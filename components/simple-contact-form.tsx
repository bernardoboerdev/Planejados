"use client"

import { useEffect, useRef } from "react"

export function SimpleContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Verificar se o container do formulário existe
    const formContainer = document.getElementById("clientes-blucca-45d4e2b5cc55d6808edb")
    console.log("Container do formulário renderizado:", formContainer)

    // Só executar no lado do cliente e apenas uma vez
    if (typeof window === "undefined" || scriptLoaded.current) return

    // Função para carregar o script do RD Station
    const loadRdStationForms = () => {
      // Criar e adicionar o script principal
      const script = document.createElement("script")
      script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
      script.async = true
      script.onload = () => {
        // Quando o script principal carregar, inicializar o formulário
        try {
          if (window.RDStationForms) {
            new window.RDStationForms("clientes-blucca-45d4e2b5cc55d6808edb", "null").createForm()
            console.log("Formulário RD Station inicializado")
          } else {
            console.error("RDStationForms não foi carregado corretamente")
          }
        } catch (error) {
          console.error("Erro ao inicializar o formulário RD Station:", error)
        }
      }

      document.body.appendChild(script)
      scriptLoaded.current = true
    }

    // Pequeno atraso para garantir que o DOM está completamente carregado
    setTimeout(loadRdStationForms, 100)

    // Limpeza ao desmontar
    return () => {
      scriptLoaded.current = false
    }
  }, [])

  return (
    <div className="space-y-4 max-w-md">
      {/* Container para o formulário do RD Station */}
      <div role="main" id="clientes-blucca-45d4e2b5cc55d6808edb" ref={formContainerRef}></div>
    </div>
  )
}

// Adicionar a definição do tipo RDStationForms ao objeto window
declare global {
  interface Window {
    RDStationForms: any
  }
}
