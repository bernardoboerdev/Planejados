"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactAccordion } from "@/components/contact-accordion"
import { SimpleContactForm } from "@/components/simple-contact-form"
import { Instagram, Facebook } from "lucide-react"

export default function Home() {
  // Função simplificada que apenas rola para o topo
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault() // Impedir o comportamento padrão do link

    // Rolar para o topo absoluto da página e permanecer lá
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Usar "auto" para rolagem instantânea
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9]">
      <header className="w-full py-3 bg-[#f9f9f9] sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <Link href="/" className="h-16 md:h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B60BD97E9-473A-472E-8883-130BDCD23B1D%7D-Photoroom-xeJk8Jh3BsfbMcQfzHnNSNTwG1NTY3.png"
              alt="B'Lucca"
              className="h-full"
            />
          </Link>
          <Button className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-2" onClick={handleContactClick}>
            Contato
          </Button>
        </div>
      </header>

      {/* Formulário de contato movido para logo após o cabeçalho */}
      <section className="relative bg-[#f9f9f9] pt-2 pb-8" id="contato-section">
        <div className="container">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-medium text-[#1C1D1F]">
                  Planejados que <span className="font-bold">inspira e valoriza</span> seu espaço
                </h1>
                <p className="text-gray-700 max-w-md">
                  Projetos de móveis planejados que unem estética, funcionalidade e inovação para tornar seu ambiente
                  exclusivo.
                </p>
              </div>

              <SimpleContactForm />
            </div>

            {/* Imagem à direita no desktop, abaixo no mobile */}
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-ekrulila-8569470.jpg-G0SAD83tmB3Z5xkIxJFpYw79v1U6bg.jpeg"
                alt="Cozinha moderna com armários planejados em madeira, mesa de jantar com cadeiras azuis e piso em espinha de peixe"
                className="w-4/5 h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Diferenciais Section */}
        <section id="diferenciais" className="py-16 bg-black text-white">
          <div className="container text-center">
            <p className="uppercase tracking-wider text-center mb-2">DIFERENCIAIS</p>
            <h2 className="text-5xl font-bold text-center mb-12">O que oferecemos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Projetos sob-medida</h3>
                <p className="text-white">
                  Nossa equipe de projetistas cria projetos personalizados. Não usamos peças modulares. Isso otimiza o
                  espaço interno dos móveis e ajuda no design do ambiente.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Matérias-primas</h3>
                <p className="text-white">
                  As matérias-primas utilizadas em nossos projetos são MDFs resinados de excelente qualidade, com
                  tratamento anti-cupim, proteção antibacteriana e anti-mofo.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Entrega e montagem</h3>
                <p className="text-white">
                  Nossa equipe de entrega e montagem é treinada para instalação perfeita do projeto. Nos preocupamos com
                  as quinas e objetos presentes nos ambientes para que nada seja danificado no momento da instalação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-[#f9f9f9]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-[#1C1D1F] mb-4">Transformamos ideias em espaços únicos.</h2>
                <p className="text-2xl text-gray-700 mb-8">Projetos que unem beleza e funcionalidade.</p>
              </div>
              <Button
                className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-6 mt-4 lg:mt-0"
                onClick={handleContactClick}
              >
                Fale conosco +
              </Button>
            </div>

            <div className="w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-heyho-8134812.jpg-H8Sm0CSmaGuRBAmm0eZFfXYuE8E4dt.jpeg"
                alt="Closet planejado em madeira clara com prateleiras, espaços para pendurar roupas e gavetas, ao lado de um banheiro moderno"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <div>
                <h3 className="text-2xl font-bold text-[#1C1D1F] mb-6">Conheça A B'Lucca Planejados</h3>
              </div>
              <div>
                <p className="text-black">
                  Somos uma equipe de profissionais especializados na área de móveis sob medida para residências,
                  escritórios, lojas e shoppings. Trabalhamos com muito empenho para manter a qualidade de nossos
                  produtos do início da fabricação até o acabamento final em nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalhes Section (Replacing Testimonials) */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#1C1D1F]">
                  Cada detalhe é pensado para oferecer um ambiente harmonioso e funcional.
                </h2>
                <p className="text-gray-700">
                  Sempre em busca da máxima satisfação de nossos clientes, fabricamos móveis planejados de alta
                  qualidade e design moderno para compor seu ambiente.
                </p>
                <Button
                  className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-6 mt-4"
                  onClick={handleContactClick}
                >
                  Fale conosco +
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-cottonbro-7404938.jpg-GU5sILarkBnrBD8f6592Sxr4B4HWDq.jpeg"
                  alt="Sala de estar minimalista com sofá branco, mesa de centro de madeira, lareira embutida com velas e nicho para lenha"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-[#f9f9f9]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jonathanborba-5570226.jpg-Zjdrfh4ZsoOL7azamqzi2bZYE2qq1l.jpeg"
                  alt="Sala de jantar moderna com mesa branca, cadeiras estofadas claras e escada flutuante de madeira em ambiente integrado com pé-direito alto"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#1C1D1F]">Do Conceito à Execução:</h2>
                  <p className="text-2xl text-gray-700 mt-2">Tudo o que seu projeto precisa</p>
                </div>

                <ContactAccordion />

                <div className="pt-6">
                  <Button
                    className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-6"
                    onClick={handleContactClick}
                  >
                    Fale conosco agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores e Missão Section */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col space-y-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%20miss%C3%A3o.png-j30w8nMuF4l397b0WNRHH5BgznNWFp.jpeg"
                  alt="Console de madeira elegante com obra de arte abstrata vermelha, planta monstera e abajur sobre parede de concreto"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">Missão</h3>
                <p className="text-gray-700">
                  Expressar cuidado e respeito aos clientes com o oferecimento de produtos e serviços de qualidade
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_2025-04-17_23.16.44-5EaSbYMGsvgbfX0zK3fgKDZrTKvg0E.png"
                  alt="Sala de estar em estilo japonês minimalista com sofá branco, mesa de centro de madeira e arte de flores de cerejeira na parede"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">Visão</h3>
                <p className="text-gray-700">
                  Promover o respeito ao ser humano, tanto do ponto de vista físico como mental, atendendo a sua mais
                  básica necessidade de moradia.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_2025-04-17_23.16.57.png-CwFLakEqqqzHxFaWalonHBWteCx5mF.jpeg"
                  alt="Sala de estar elegante com sofá branco, almofadas marrons, mesa de centro de madeira e fotografia de palmeiras na parede"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">Valores</h3>
                <p className="text-gray-700">
                  Nosso objetivo é promover conforto e praticidade com projetos personalizados e de valor.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_2025-04-17_23.17.10-qPxP4kHknDXDdwZCx65pwaoVlBtJpf.png"
                  alt="Hall de entrada luxuoso com parede texturizada branca, console de madeira natural e decoração minimalista em tons neutros"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">
                  Projetos para casa completa de alta qualidade e preço justo!
                </h3>
                <Button
                  className="bg-black hover:bg-black/90 text-white rounded-none px-6 py-4 mt-2"
                  onClick={handleContactClick}
                >
                  Fale conosco +
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Serviços Personalizados Section with Image that already has text overlay */}
      <footer className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-6 max-w-3xl">
            Serviços personalizados para criar o espaço dos seus sonhos
          </h2>
          <Button
            className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-6 border-2 border-white"
            onClick={handleContactClick}
          >
            Fale conosco agora
          </Button>

          {/* Social Media Buttons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/bluccaplanejados/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white rounded-full hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.facebook.com/people/Blucca-Planejados/100090376152087/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white rounded-full hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-kitchen-interior-design.jpg-53P9ijxlN9D1eES4ihcrQpiBPneyRu.jpeg"
          alt="Cozinha moderna com ilha integrada à mesa de jantar, armários em madeira clara e cinza escuro"
          className="w-full h-full object-cover"
        />
      </footer>

      {/* Retângulo de copyright e políticas */}
      <div className="w-full bg-black py-6 text-white">
        <div className="container mx-auto text-center text-sm text-white/70">
          Copyright © B'Lucca – Todos os direitos reservados. |
          <Link href="#" className="hover:text-white mx-2">
            Termos de Uso
          </Link>{" "}
          |
          <Link href="#" className="hover:text-white mx-2">
            Políticas de Privacidade
          </Link>{" "}
          |
          <Link href="#" className="hover:text-white mx-2">
            Políticas de Cookies
          </Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5511940177290"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#20BA5C] transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
