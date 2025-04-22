"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function ContactFormClient() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    position: "",
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.email || !formData.phone || !formData.projectType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      })
      return
    }

    // Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um endereço de e-mail válido.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulação de envio bem-sucedido para testes
      // Descomente este bloco para testar a UI sem depender da API
      /*
      setTimeout(() => {
        toast({
          title: "Formulário enviado",
          description: "Entraremos em contato em breve!",
          variant: "default",
        })
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          position: "",
          terms: false,
        })
        
        setIsSubmitting(false)
      }, 1500)
      return
      */

      console.log("Enviando formulário com dados:", formData)

      // Enviar dados para a API Route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Status da resposta:", response.status, response.statusText)

      // Obter a resposta como texto primeiro para depuração
      const responseText = await response.text()
      console.log("Resposta completa:", responseText)

      // Converter para JSON se possível
      let result
      try {
        result = responseText ? JSON.parse(responseText) : { success: false, error: "Resposta vazia" }
      } catch (e) {
        console.error("Erro ao analisar resposta JSON:", e)
        result = { success: false, error: "Erro ao processar resposta", details: responseText }
      }

      if (response.ok && result.success) {
        toast({
          title: "Formulário enviado",
          description: "Entraremos em contato em breve!",
          variant: "default",
        })

        // Limpar formulário após envio bem-sucedido
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          position: "",
          terms: false,
        })
      } else {
        console.error("Erro ao enviar formulário:", result.error, result.details)
        toast({
          title: "Erro ao enviar",
          description:
            result.details ||
            result.error ||
            "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Exceção ao enviar formulário:", error)
      toast({
        title: "Erro ao enviar",
        description:
          error instanceof Error ? error.message : "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contato-form" className="space-y-4 max-w-md" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 bg-white text-gray-800 rounded-none p-3"
      />
      <input
        type="email"
        name="email"
        placeholder="*E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 bg-white text-gray-800 rounded-none p-3"
      />
      <input
        type="tel"
        name="phone"
        placeholder="*Telefone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 bg-white text-gray-800 rounded-none p-3"
      />
      <input
        type="text"
        name="projectType"
        placeholder="*Empresarial ou Residencial?"
        value={formData.projectType}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 bg-white text-gray-800 rounded-none p-3"
      />
      <p className="text-xs text-gray-500">Você tem um projeto para sua empresa ou residência?</p>
      <input
        type="text"
        name="position"
        placeholder="Cargo"
        value={formData.position}
        onChange={handleChange}
        className="w-full border border-gray-300 bg-white text-gray-800 rounded-none p-3"
      />
      <p className="text-xs text-gray-500">Se respondeu empresa no campo acima qual é o seu cargo?</p>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms"
          checked={formData.terms}
          onCheckedChange={handleCheckboxChange}
          className="rounded-sm mt-1"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          Concordo em fornecer meus dados para receber conteúdos e ofertas por e-mail ou outros meios.
        </label>
      </div>

      <Button
        type="submit"
        className="w-full bg-black hover:bg-black/90 text-white rounded-none py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Fale conosco agora!"}
      </Button>
    </form>
  )
}
