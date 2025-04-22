import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    console.log("Dados do formulário recebidos:", formData)

    // Obter o token do RD Station das variáveis de ambiente
    const RD_STATION_TOKEN = process.env.RD_STATION_TOKEN

    if (!RD_STATION_TOKEN) {
      console.error("Token do RD Station não configurado")
      return NextResponse.json({ error: "Token do RD Station não configurado" }, { status: 500 })
    }

    console.log("Token RD Station disponível:", RD_STATION_TOKEN.substring(0, 5) + "...")

    // Preparar os dados no formato que o RD Station espera
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
        cf_termos: formData.terms ? "Sim" : "Não",
      },
    }

    console.log("Dados a serem enviados para RD Station:", JSON.stringify(rdStationData))

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

    // Obter a resposta como texto
    const responseText = await response.text()
    console.log("Resposta completa:", responseText)

    // Se a resposta não for bem-sucedida, retornar erro com detalhes
    if (!response.ok) {
      console.error("Erro na resposta da API:", responseText)
      return NextResponse.json(
        {
          error: "Erro ao enviar para RD Station",
          details: responseText,
          status: response.status,
          statusText: response.statusText,
        },
        { status: 500 },
      )
    }

    // Retornar sucesso
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao processar solicitação:", error)
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
