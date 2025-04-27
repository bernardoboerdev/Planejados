"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export function SimpleContactForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ambiente: "",
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Criar um FormData object para enviar
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      // Adicionar o valor do checkbox terms manualmente
      formDataObj.set("terms", formData.terms ? "Sim" : "Não")

      // Enviar o formulário usando fetch
      const response = await fetch("https://formspree.io/f/xyzwylqo", {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Redirecionar para a página de sucesso em vez de mostrar um toast
        router.push("/sucesso")
      } else {
        console.error("Erro ao enviar formulário:", response.statusText)
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.",
          variant: "destructive",
        })
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Exceção ao enviar formulário:", error)
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id="contato-form"
      className="space-y-4 max-w-md"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xyzwylqo"
      method="POST"
    >
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

      <select
        name="ambiente"
        value={formData.ambiente}
        onChange={handleChange}
        className={`w-full border border-gray-300 bg-white rounded-none p-3 ${
          formData.ambiente === "" ? "text-gray-400" : "text-gray-800"
        }`}
      >
        <option value="" disabled className="text-gray-400">
          Ambiente
        </option>
        <option value="cozinha">Cozinha</option>
        <option value="sala">Sala</option>
        <option value="quartos">Quartos</option>
        <option value="banheiros">Banheiros</option>
        <option value="completo">Completo</option>
        <option value="outros">Outros</option>
      </select>
      <p className="text-xs text-gray-500">Qual ambiente você deseja transformar?</p>

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

      {/* Campo oculto para o valor do checkbox */}
      <input type="hidden" name="terms" value={formData.terms ? "Sim" : "Não"} />

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
