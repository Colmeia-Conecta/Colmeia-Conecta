import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Briefcase, GraduationCap, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F2E1C2" }}>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance" style={{ color: "#23160B" }}>
                Encontre Vagas Perfeitas para Seu Curso
              </h1>
              <p className="text-lg text-pretty" style={{ color: "#572B0E" }}>
                Com o Golden Guy, estudantes descobrem oportunidades de carreira alinhadas com seus estudos. Não sabe
                como aplicar seu conhecimento? Deixe Gus te guiar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
                  <Link href="/auth/register">Começar Agora</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#vagas">Ver Vagas</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/mascote-inteiro.png"
                alt="Gus - Golden Guy Mascot"
                className="h-80 md:h-[500px] w-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#F2B705" }}
              >
                <GraduationCap className="h-6 w-6" style={{ color: "#23160B" }} />
              </div>
              <CardTitle>Cadastre-se com Seu Curso</CardTitle>
              <CardDescription>Informe seu nome, idade, e-mail e o curso que está fazendo</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#F29F05" }}
              >
                <Search className="h-6 w-6" style={{ color: "#23160B" }} />
              </div>
              <CardTitle>Descubra Vagas Relacionadas</CardTitle>
              <CardDescription>
                Receba sugestões de vagas e caminhos de carreira específicos para sua área
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#D97904" }}
              >
                <Briefcase className="h-6 w-6" style={{ color: "#23160B" }} />
              </div>
              <CardTitle>Candidate-se e Cresça</CardTitle>
              <CardDescription>Salve suas vagas favoritas e aplique-se para as melhores oportunidades</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="vagas" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Vagas em Destaque</h2>
              <p className="text-muted-foreground mt-2">Oportunidades para você começar sua carreira</p>
            </div>
            <Button asChild style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
              <Link href="/auth/register">Ver Todas as Vagas</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample Job Cards */}
            {[
              {
                title: "Desenvolvedor Front-end Júnior",
                company: "Tech Startup",
                level: "Júnior",
                location: "São Paulo, SP",
                tags: ["React", "TypeScript", "CSS"],
                course: "Análise e Desenvolvimento",
              },
              {
                title: "Analista de Marketing Digital",
                company: "Agência Criativa",
                level: "Estágio",
                location: "Remoto",
                tags: ["SEO", "Social Media", "Google Ads"],
                course: "Marketing",
              },
              {
                title: "Designer UX/UI",
                company: "Fintech",
                level: "Trainee",
                location: "Rio de Janeiro, RJ",
                tags: ["Figma", "Design System", "Prototyping"],
                course: "Design Digital",
              },
            ].map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription className="mt-1">{job.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">{job.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" style={{ borderColor: "#F2B705", color: "#572B0E" }}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Relacionado a:{" "}
                        <span className="font-medium" style={{ color: "#D97904" }}>
                          {job.course}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/images/mascote-inteiro.png" alt="Gus - Golden Guy" className="h-80 md:h-96 w-auto" />
            </div>
            <div className="flex flex-col gap-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold" style={{ color: "#F2B705" }}>
                Conheça Gus, o nosso "Golden Guy"!
              </h2>
              <div className="flex flex-col gap-4 text-pretty leading-relaxed">
                <p>
                  Ele é uma abelha, e não por acaso. Acreditamos que a abelha é o símbolo perfeito para o trabalho
                  árduo, a colaboração e a dedicação que buscamos inspirar em nossa comunidade de busca de empregos. Gus
                  personifica o zelo e a produtividade, sempre com sua maleta e lupa, pronto para encontrar a próxima
                  grande oportunidade.
                </p>
                <p>
                  Mas por que um estilo que nos remete aos anos 1940? Em uma era de constante inovação tecnológica, onde
                  muitos se preocupam com a obsolescência de certas profissões e a incerteza sobre o futuro do trabalho,
                  Gus nos lembra de uma época onde a resiliência e a adaptabilidade eram chaves.
                </p>
                <p>
                  Nosso mascote representa a ponte entre o passado e o futuro: a modernidade e eficiência de nossa
                  plataforma se encontram com a sabedoria e a experiência das gerações passadas. Com o Golden Guy Gus,
                  queremos mostrar que a tecnologia não precisa ser uma ameaça, mas sim uma ferramenta poderosa para
                  unir todas as gerações, ajudando tanto os mais experientes quanto os recém-chegados ao mercado a
                  navegarem com sucesso na busca por seu próximo emprego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t" style={{ backgroundColor: "#F2B705" }}>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#23160B" }}>
            Pronto para Encontrar Sua Próxima Oportunidade?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#572B0E" }}>
            Cadastre-se gratuitamente e comece a explorar vagas hoje mesmo!
          </p>
          <Button asChild size="lg" style={{ backgroundColor: "#23160B", color: "#F2E1C2" }}>
            <Link href="/auth/register">Criar Conta Grátis</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
