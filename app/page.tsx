"use client"

import Link from "next/link"
import Image from "next/image"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Instagram, Facebook } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  // Link do WhatsApp atualizado para o novo número
  const whatsappLink =
    "https://wa.me/5511940177290?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados"

  // Imagens para o carrossel
  const carouselImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-ekrulila-8569470.jpg-G0SAD83tmB3Z5xkIxJFpYw79v1U6bg.jpeg",
      alt: "Cozinha moderna com armários planejados em madeira, mesa de jantar com cadeiras azuis e piso em espinha de peixe",
    },
    {
      src: "/modern-bathroom.jpeg",
      alt: "Banheiro moderno com armário planejado, espelho com iluminação LED e acabamentos elegantes",
    },
    {
      src: "/modern-kitchen.jpeg",
      alt: "Cozinha planejada com armários brancos, eletrodomésticos embutidos e iluminação em LED no teto de madeira",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9]">
      <header className="w-full py-3 bg-[#f9f9f9] sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <Link href="/" className="h-20 md:h-24">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B60BD97E9-473A-472E-8883-130BDCD23B1D%7D-Photoroom-xeJk8Jh3BsfbMcQfzHnNSNTwG1NTY3.png"
              alt="B'Lucca"
              className="h-full"
            />
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-2 inline-flex items-center justify-center h-10 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
          >
            Solicitar Orçamento
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#f9f9f9] pt-8 pb-16" id="hero-section">
        <div className="container px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-medium text-[#1C1D1F]">
                  Móveis planejados que elevam seu espaço – Personalização e qualidade que você sente todos os dias.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-md">
                  Com móveis planejados sob medida, cada canto da sua casa ganha vida e funcionalidade, refletindo sua
                  personalidade em cada detalhe.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-4 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Carrossel de imagens à direita no desktop, abaixo no mobile */}
            <div className="w-full flex justify-center mt-8 lg:mt-0">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[400px] sm:h-[500px] md:h-[600px]">
                <ImageCarousel images={carouselImages} interval={5000} className="w-full h-full" verticalMode={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Diferenciais Section */}
        <section id="diferenciais" className="py-16 bg-black text-white">
          <div className="container text-center px-4">
            <p className="uppercase tracking-wider text-center mb-2">DIFERENCIAIS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">O que oferecemos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Empresa Familiar com Atendimento Personalizado</h3>
                <p className="text-white">
                  Somos uma marcenaria de família, e tratamos cada projeto como se fosse para nossa própria casa.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Preço Justo com Transparência Total</h3>
                <p className="text-white">
                  Na nossa marcenaria, prezamos por uma relação de confiança com cada cliente. Por isso, praticamos
                  preços justos, alinhados à qualidade dos materiais e à dedicação envolvida em cada projeto.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Proteção Extra Contra Desgaste e Danos</h3>
                <p className="text-white">
                  Usamos acabamentos de alta proteção para que seu móvel continue novo por muito mais tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-[#f9f9f9]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1C1D1F]">Conheça A B'Lucca Planejados</h2>
              <div className="w-24 h-1 bg-black mx-auto mt-4 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/team-photo.jpeg"
                  alt="Equipe da B'Lucca Planejados reunida em um ambiente de trabalho, mostrando o time de profissionais dedicados que trabalham nos projetos"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Somos uma equipe de profissionais especializados na área de móveis sob medida para residências,
                  escritórios, lojas e shoppings. Trabalhamos com muito empenho para manter a qualidade de nossos
                  produtos do início da fabricação até o acabamento final em nossos clientes.
                </p>

                <p className="text-gray-700 text-xl leading-relaxed">
                  Nossa missão é transformar ambientes com soluções personalizadas que combinam funcionalidade, estética
                  e durabilidade, sempre respeitando as necessidades e o estilo de cada cliente.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-4"
                >
                  Fale conosco +
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detalhes Section (Replacing Testimonials) */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#1C1D1F]">
                  Cada detalhe é pensado para oferecer um ambiente harmonioso e funcional.
                </h2>
                <p className="text-gray-700">
                  Sempre em busca da máxima satisfação de nossos clientes, fabricamos móveis planejados de alta
                  qualidade e design moderno para compor seu ambiente.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-4"
                >
                  Fale conosco +
                </a>
              </div>
              <div className="relative">
                <img
                  src="/modern-living-room.jpeg"
                  alt="Sala de estar moderna com sofá em L, escada com guarda-corpo de vidro, armários planejados e iluminação integrada"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valores e Missão Section */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center p-8">
                  <Image
                    src="/mission-icon-new.png"
                    alt="Ícone de missão - aperto de mãos representando acordo e compromisso"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">Missão</h3>
                <p className="text-gray-700">
                  Buscamos promover o bem-estar de todos incluindo clientes funcionários e sociedade, focando na ética,
                  transparência e integridade no serviço.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center p-8">
                  <Image
                    src="/vision-icon-shield.png"
                    alt="Ícone de visão - aperto de mãos com escudo de verificação representando confiança e parceria"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">Visão</h3>
                <p className="text-gray-700">
                  Com integridade, honestidade, responsabilidade e busca pela execução buscamos ser agentes de
                  transformação positiva na sociedade e com nossos cliente, alinhando negócios e valores.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center p-8">
                  <Image
                    src="/values-icon-heart.png"
                    alt="Ícone de valores - duas mãos com um coração entre elas representando cuidado e respeito"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">Valores</h3>
                <p className="text-gray-700">
                  Buscamos respeitar a dignidade de clientes e funcionários valorizando as suas diferença e tratando-os
                  com respeito dignidade.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center p-8">
                  <Image
                    src="/checkmark-new.png"
                    alt="Marca de verificação representando qualidade e aprovação"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1C1D1F] mt-2">
                  Projetos para casa completa de alta qualidade e preço justo!
                </h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 py-4 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background mt-2"
                >
                  Fale conosco +
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-[#f9f9f9]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1C1D1F]">Perguntas Frequentes</h2>
              <div className="w-24 h-1 bg-black mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Tire suas dúvidas sobre nossos serviços, processos e produtos. Se não encontrar o que procura, entre em
                contato conosco.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQSection />
            </div>

            <div className="text-center mt-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
              >
                Ainda tem dúvidas? Fale conosco
              </a>
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
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-2 border-white"
          >
            Fale conosco agora
          </a>

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
        href={whatsappLink}
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
