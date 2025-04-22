"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { submitToRDStation } from "@/app/actions/rd-station"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
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
      // Remova este bloco quando a integração real estiver funcionando
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

      // Código real de envio
      console.log("Enviando formulário com dados:", formData)
      const result = await submitToRDStation(formData)
      console.log("Resultado do envio:", result)

      if (result.success) {
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
        console.error("Erro ao enviar formulário:", result.error)
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Exceção ao enviar formulário:", error)
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
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
