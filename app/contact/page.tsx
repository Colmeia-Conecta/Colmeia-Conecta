"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MessageSquare, HelpCircle, CheckCircle2, AlertCircle } from "lucide-react"

const FAQ_ITEMS = [
  {
    question: "Como me cadastro na plataforma?",
    answer:
      'Para se cadastrar, clique no botão "Cadastrar" no topo da página e preencha o formulário com seus dados pessoais, incluindo nome, idade, e-mail e o curso que está fazendo. O cadastro é gratuito e leva apenas alguns minutos.',
  },
  {
    question: "Quais cursos são suportados pela plataforma?",
    answer:
      'A plataforma suporta uma ampla variedade de cursos, incluindo Análise e Desenvolvimento de Sistemas, Ciência da Computação, Marketing, Design, Administração, entre outros. Se seu curso não estiver na lista, você pode selecioná-lo na opção "Outro".',
  },
  {
    question: "Como funciona a recomendação de vagas?",
    answer:
      "Ao se cadastrar e informar seu curso, nossa plataforma filtra automaticamente as vagas mais relevantes para sua área de estudo. Você verá vagas de estágio, trainee e júnior relacionadas ao seu campo de atuação.",
  },
  {
    question: "Posso salvar vagas para ver depois?",
    answer:
      'Sim! Usuários cadastrados podem favoritar vagas clicando no ícone de coração. Todas as vagas salvas ficam disponíveis na seção "Minhas Vagas" do seu perfil.',
  },
  {
    question: "As vagas são reais?",
    answer:
      "Esta é uma versão de demonstração do projeto acadêmico. Na versão completa em produção, as vagas serão integradas com APIs reais de empresas parceiras e plataformas de recrutamento.",
  },
  {
    question: "Como posso me candidatar a uma vaga?",
    answer:
      'Ao clicar em "Ver Detalhes" em uma vaga, você será direcionado para a página com mais informações sobre a oportunidade e o botão de candidatura. Em alguns casos, você será redirecionado para o site da empresa.',
  },
  {
    question: "A plataforma é gratuita?",
    answer:
      "Sim, o Golden Guy é 100% gratuito para estudantes. Nosso objetivo é ajudar você a encontrar oportunidades de carreira sem nenhum custo.",
  },
  {
    question: "Posso atualizar meu perfil depois do cadastro?",
    answer:
      "Sim! Após fazer login, você pode acessar seu perfil e atualizar suas informações a qualquer momento, incluindo curso, idade e preferências de busca.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer:
      "Você pode entrar em contato através do formulário nesta página ou enviando um e-mail diretamente para nossa equipe. Respondemos todas as mensagens em até 48 horas.",
  },
  {
    question: "Quem desenvolveu esta plataforma?",
    answer:
      'O Golden Guy foi desenvolvido por estudantes da FIAP como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas. Conheça nossa equipe na página "Integrantes".',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // TODO: Connect to backend API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato e FAQ</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Entre em contato conosco ou encontre respostas para suas dúvidas
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#F2B705" }}
                >
                  <Mail className="h-5 w-5" style={{ color: "#23160B" }} />
                </div>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
              </div>
              <CardDescription>Preencha o formulário abaixo e nossa equipe entrará em contato em breve</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === "success" && (
                  <Alert style={{ backgroundColor: "#F2E1C2", borderColor: "#F2B705" }}>
                    <CheckCircle2 className="h-4 w-4" style={{ color: "#D97904" }} />
                    <AlertDescription style={{ color: "#572B0E" }}>
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>Erro ao enviar mensagem. Tente novamente.</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    placeholder="Sobre o que você quer falar?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva sua dúvida ou sugestão..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#F2B705", color: "#23160B" }}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-6" style={{ backgroundColor: "#F2E1C2" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: "#572B0E" }}>
                <MessageSquare className="h-5 w-5" />
                Outras Formas de Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" style={{ color: "#D97904" }} />
                <div>
                  <p className="font-medium" style={{ color: "#572B0E" }}>
                    E-mail
                  </p>
                  <p className="text-sm text-muted-foreground">contato@goldenguy.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 mt-0.5" style={{ color: "#D97904" }} />
                <div>
                  <p className="font-medium" style={{ color: "#572B0E" }}>
                    Tempo de Resposta
                  </p>
                  <p className="text-sm text-muted-foreground">Respondemos em até 48 horas úteis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#D97904" }}
                >
                  <HelpCircle className="h-5 w-5" style={{ color: "#F2E1C2" }} />
                </div>
                <CardTitle className="text-2xl">Perguntas Frequentes</CardTitle>
              </div>
              <CardDescription>Encontre respostas rápidas para as dúvidas mais comuns</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground text-pretty">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto" style={{ backgroundColor: "#F2B705" }}>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#23160B" }}>
              Não encontrou o que procurava?
            </h3>
            <p className="mb-4" style={{ color: "#572B0E" }}>
              Nossa equipe está sempre disponível para ajudar. Entre em contato!
            </p>
            <img src="/images/logo-rosto.png" alt="Gus Logo" className="mx-auto h-16 w-16" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
