import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "B'Lucca - Móveis Planejados",
  description: "Móveis planejados que unem estética, funcionalidade e inovação para tornar seu ambiente exclusivo.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Script de integração do RD Station */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js";
                fjs.parentNode.insertBefore(js, fjs);
              })(document, 'script', 'rd-js-integration');
            `,
          }}
        />

        {/* Código de Monitoramento do RD Station */}
        <script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/58ce11a1-e42b-4a71-89ce-b4307bc65156-loader.js"
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
