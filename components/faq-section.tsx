"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        className="flex w-full justify-between items-center text-left font-medium text-[#1C1D1F] hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "transform rotate-180")} />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0",
        )}
      >
        <div className="text-gray-700 text-xl leading-relaxed">{answer}</div>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <div className="space-y-2">
      <FAQItem question="O orçamento é gratuito?" answer="Sim! Fazemos orçamentos 100% gratuitos e sem compromisso." />
      <FAQItem
        question="Quanto tempo leva para produzir e entregar os móveis planejados?"
        answer="O prazo médio é de 30 a 45 dias, a partir da aprovação do projeto."
      />
      <FAQItem
        question="Posso escolher os materiais dos móveis?"
        answer="Sim! Trabalhamos com diversas opções de materiais e acabamentos para personalizar seu projeto."
      />
      <FAQItem
        question="Qual a diferença entre móveis planejados e móveis modulados?"
        answer="Móveis planejados são feitos sob medida para o seu espaço; já os modulados são peças prontas com medidas padrões."
      />
      <FAQItem
        question="Como é feito o pagamento dos móveis planejados?"
        answer="Aceitamos cartão de crédito, transferências, boletos e, em alguns casos, condições especiais de financiamento."
      />
    </div>
  )
}
