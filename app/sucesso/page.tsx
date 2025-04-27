"use client"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Script from "next/script"

export default function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
    // Este efeito será executado apenas no lado do cliente
    // Adiciona o noscript do Google Tag Manager ao body
    const noscript = document.createElement("noscript")
    const iframe = document.createElement("iframe")
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-T8C7FWSM"
    iframe.height = "0"
    iframe.width = "0"
    iframe.style.display = "none"
    iframe.style.visibility = "hidden"
    noscript.appendChild(iframe)
    document.body.appendChild(noscript)

    // Limpa o noscript quando o componente for desmontado
    return () => {
      document.body.removeChild(noscript)
    }
  }, []) // Array de dependências vazio para executar apenas uma vez

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T8C7FWSM');
        `}
      </Script>
      {/* End Google Tag Manager */}

      <div className="flex min-h-screen flex-col bg-[#f9f9f9]">
        <div className="container max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center flex-1 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-6" />

            <h1 className="text-4xl font-bold text-[#1C1D1F] mb-4">Formulário enviado com sucesso!</h1>

            <p className="text-xl text-gray-700 mb-8">
              Agradecemos pelo seu contato. Nossa equipe entrará em contato com você em breve para discutir seu projeto
              de móveis planejados.
            </p>

            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Enquanto isso, você pode retornar à página inicial para conhecer mais sobre nossos serviços.
              </p>

              <Button
                onClick={() => router.push("/")}
                className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-6 text-lg"
              >
                Voltar para a página inicial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
