"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700">
      <button
        type="button"
        className="flex w-full justify-between items-center py-4 text-left font-medium text-[#1C1D1F] hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "transform rotate-180")} />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0",
        )}
      >
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  )
}

export function ContactAccordion() {
  return (
    <div className="space-y-4">
      <AccordionItem title="Projetos personalizados">
        <p>
          Nossa equipe de designers trabalha em estreita colaboração com você para criar móveis que atendam
          perfeitamente às suas necessidades e estilo. Cada projeto é único e desenvolvido especificamente para o seu
          espaço.
        </p>
      </AccordionItem>

      <AccordionItem title="Materiais de alta qualidade">
        <p>
          Utilizamos apenas materiais premium em nossos móveis, incluindo MDF resinado de alta densidade, ferragens
          importadas e acabamentos duráveis que garantem beleza e longevidade aos seus móveis.
        </p>
      </AccordionItem>

      <AccordionItem title="Processo de fabricação">
        <p>
          Nosso processo de fabricação combina técnicas artesanais com tecnologia de ponta. Cada peça passa por rigoroso
          controle de qualidade para garantir perfeição em cada detalhe.
        </p>
      </AccordionItem>

      <AccordionItem title="Montagem e instalação">
        <p>
          Nossa equipe de montagem é treinada para realizar instalações com precisão e cuidado. Garantimos que seus
          móveis sejam montados corretamente, respeitando seu espaço e outros itens do ambiente.
        </p>
      </AccordionItem>

      <AccordionItem title="Garantia e assistência">
        <p>
          Oferecemos garantia em todos os nossos produtos e serviço de assistência pós-venda. Estamos sempre disponíveis
          para ajudar com qualquer necessidade relacionada aos seus móveis.
        </p>
      </AccordionItem>
    </div>
  )
}
