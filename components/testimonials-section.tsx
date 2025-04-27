import { Star } from "lucide-react"

interface TestimonialProps {
  initial: string
  name: string
  time?: string
  reviews?: number
  photos?: number
  rating: number
  text: string
}

export function Testimonial({ initial, name, time, reviews, photos, rating, text }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl mr-4">
          {initial}
        </div>
        <div>
          <h3 className="font-medium text-[#1C1D1F]">{name}</h3>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {time && <span className="mr-2">há {time}</span>}
              {reviews && <span className="mr-2">{reviews} críticas</span>}
              {photos && <span>• {photos} fotos</span>}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1C1D1F] mb-12">
          O que nossos clientes dizem
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            initial="M"
            name="Márcia Adriana de Oliveira Avelino Santos"
            time="6 meses"
            reviews={5}
            photos={3}
            rating={5}
            text="Superou as expectativas, desde o atendimento do projeto até a instalação, ótima qualidade e funcionários dedicados, eu recomendo essa marcenaria."
          />

          <Testimonial
            initial="R"
            name="Rossanna Semeraro Amaral"
            reviews={5}
            photos={3}
            rating={5}
            text="Foram bem atenciosos. Cumpriram com o prazo com poucos ajustes. Entenderam a proposta e ficou como queria amos."
          />

          <Testimonial
            initial="R"
            name="Reginaldo Lima Pereira"
            reviews={1}
            time="um ano"
            rating={5}
            text="Atendimento de excelência. Material utilizado nos móveis de extrema qualidade. Sem contar que fica tudo lindo e perfeito. Super recomendo 👍 👍"
          />
        </div>
      </div>
    </section>
  )
}
