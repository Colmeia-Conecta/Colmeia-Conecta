import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/logo-rosto.png" alt="Gus Logo" className="h-8 w-8" />
              <span className="text-lg font-bold" style={{ color: "#F2B705" }}>
                Golden Guy
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando estudantes às oportunidades certas desde o início de suas carreiras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Links Rápidos</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary transition-colors">
                  Integrantes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Team Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Equipe FIAP</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Gustavo - RM561334</li>
              <li>Pedro - RM562606</li>
              <li>Lucas - RM563544</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Golden Guy. Projeto educativo FIAP - Análise e Desenvolvimento de
            Sistemas.
          </p>
        </div>
      </div>
    </footer>
  )
}
