"use server"

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  position?: string
  terms: boolean
}

export async function submitToRDStation(formData: FormData) {
  // Obter o token do RD Station das variáveis de ambiente
  const RD_STATION_TOKEN = process.env.RD_STATION_TOKEN

  if (!RD_STATION_TOKEN) {
    console.error("Token do RD Station não configurado")
    return {
      success: false,
      error: "Token do RD Station não configurado. Por favor, configure a variável de ambiente RD_STATION_TOKEN.",
    }
  }

  try {
    console.log("Iniciando envio para RD Station com token:", RD_STATION_TOKEN.substring(0, 5) + "...")

    // Preparar os dados no formato que o RD Station espera
    // Usando o formato mais simples para evitar problemas de validação
    const rdStationData = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "formulario-contato-site",
        email: formData.email,
        name: formData.name || "Não informado",
        personal: {
          mobile_phone: formData.phone,
        },
        cf_tipo_projeto: formData.projectType,
        cf_cargo: formData.position || "",
        cf_termos: formData.terms ? "Sim" : "Não",
      },
    }

    console.log("Enviando dados para RD Station:", JSON.stringify(rdStationData))

    // Enviar para a API do RD Station
    const response = await fetch("https://api.rd.services/platform/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RD_STATION_TOKEN}`,
      },
      body: JSON.stringify(rdStationData),
    })

    console.log("Status da resposta:", response.status, response.statusText)

    // Obter o texto da resposta
    const responseText = await response.text()
    console.log("Resposta completa:", responseText)

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      let errorMessage = `Erro na API do RD Station: Status ${response.status} - ${response.statusText}`

      if (responseText) {
        try {
          // Tentar analisar como JSON se possível
          const errorData = JSON.parse(responseText)
          errorMessage = `Erro na API do RD Station: ${JSON.stringify(errorData)}`
        } catch (parseError) {
          // Se não for JSON, usar o texto da resposta
          errorMessage = `Erro na API do RD Station: ${responseText}`
        }
      }

      console.error(errorMessage)
      return {
        success: false,
        error: errorMessage,
      }
    }

    // Se a resposta estiver vazia, considerar como sucesso
    if (!responseText || responseText.trim() === "") {
      console.log("Resposta vazia do RD Station, considerando como sucesso")
      return { success: true }
    }

    // Se houver conteúdo, tentar analisar como JSON
    try {
      const responseData = JSON.parse(responseText)
      console.log("Resposta do RD Station:", responseData)
      return { success: true, data: responseData }
    } catch (parseError) {
      // Se não for um JSON válido mas a resposta foi ok, ainda considerar como sucesso
      console.log("Resposta não-JSON do RD Station:", responseText)
      return { success: true }
    }
  } catch (error) {
    console.error("Erro ao enviar dados para RD Station:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido ao enviar dados",
    }
  }
}
