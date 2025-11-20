"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, User } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // TODO: Get auth state from context
  const isAuthenticated = false

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo-rosto.png" alt="Gus Logo" className="h-10 w-10" />
          <span className="text-xl font-bold" style={{ color: "#F2B705" }}>
            Golden Guy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link href="/vagas" className="text-sm font-medium transition-colors hover:text-primary">
            Vagas
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">
            Integrantes
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contato
          </Link>

          {isAuthenticated ? (
            <>
              <Button asChild variant="ghost" size="icon">
                <Link href="/favorites">
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="default" style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
                <Link href="/auth/register">Cadastrar</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/auth/login">Entrar</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/vagas"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vagas
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrantes
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  href="/favorites"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vagas Salvas
                </Link>
                <Link
                  href="/profile"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Perfil
                </Link>
              </>
            ) : (
              <>
                <Button asChild variant="default" style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
                  <Link href="/auth/register">Cadastrar</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/auth/login">Entrar</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
