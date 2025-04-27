"use client"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9]">
      <div className="container max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center flex-1 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-6" />

          <h1 className="text-4xl font-bold text-[#1C1D1F] mb-4">Formulário enviado com sucesso!</h1>

          <p className="text-xl text-gray-700 mb-8">
            Agradecemos pelo seu contato. Nossa equipe entrará em contato com você em breve para discutir seu projeto de
            móveis planejados.
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
  )
}
