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
      <FAQItem
        question="Quanto tempo leva para produzir e entregar os móveis planejados?"
        answer="O prazo médio é de 30 a 45 dias, a partir da aprovação do projeto."
      />
      <FAQItem question="O orçamento é gratuito?" answer="Sim! Fazemos orçamentos 100% gratuitos e sem compromisso." />
      <FAQItem
        question="Vocês atendem quais tipos de ambientes?"
        answer="Atendemos cozinhas, quartos, salas, escritórios, banheiros, áreas gourmet e projetos personalizados."
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
        question="Vocês fazem o projeto em 3D antes da fabricação?"
        answer="Sim! Apresentamos um projeto 3D realista para você visualizar como ficará antes da produção."
      />
      <FAQItem
        question="Vocês atendem apenas residências ou também empresas?"
        answer="Atendemos residências e empresas, criando soluções sob medida para cada necessidade."
      />
      <FAQItem
        question="Como é feito o pagamento dos móveis planejados?"
        answer="Aceitamos cartão de crédito, transferências, boletos e, em alguns casos, condições especiais de financiamento."
      />
      <FAQItem
        question="Vocês trabalham com marca própria ou terceirizada?"
        answer="Todos os móveis são produzidos e instalados pela nossa própria equipe especializada."
      />
      <FAQItem
        question="E se o móvel não couber no espaço?"
        answer="Nossos projetos são feitos sob medida, com medidas precisas, garantindo o encaixe perfeito."
      />
      <FAQItem
        question="Posso solicitar alterações no projeto antes de fechar?"
        answer="Sim! Você pode sugerir ajustes antes da aprovação final do projeto."
      />
      <FAQItem
        question="Vocês oferecem garantia dos móveis e da instalação?"
        answer="Sim! Oferecemos garantia de fábrica nos móveis e garantia de instalação."
      />
      <FAQItem
        question="Preciso preparar o ambiente antes da instalação?"
        answer="Sim, o espaço precisa estar livre e pronto para receber os móveis, mas orientamos você em cada etapa."
      />
      <FAQItem
        question="Vocês atendem quais regiões?"
        answer="Atendemos São Paulo e região metropolitana. Consulte para saber se cobrimos sua área."
      />
      <FAQItem
        question="Como agendar uma visita técnica ou atendimento?"
        answer="É simples! Preencha o formulário nesta página ou fale conosco pelo WhatsApp para agendar."
      />
    </div>
  )
}
