import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Target, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <img src="/images/mascote-inteiro.png" alt="Gus - Golden Guy" className="mx-auto h-48 w-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o Golden Guy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
          Uma plataforma desenvolvida por estudantes, para estudantes
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card className="mb-8" style={{ borderColor: "#F2B705" }}>
          <CardHeader style={{ backgroundColor: "#F2E1C2" }}>
            <CardTitle className="text-2xl" style={{ color: "#572B0E" }}>
              O Projeto
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 text-pretty leading-relaxed">
              <p>
                O <strong>Golden Guy (Gus)</strong> é uma plataforma inovadora criada como atividade educativa pelos
                alunos do curso de Análise e Desenvolvimento de Sistemas da FIAP. O projeto nasceu da necessidade
                observada entre estudantes universitários: a dificuldade em encontrar vagas de emprego e estágio que
                realmente se alinhem com o curso que estão fazendo.
              </p>
              <p>
                Muitos estudantes se formam sem saber ao certo como aplicar o conhecimento adquirido em sala de aula no
                mercado de trabalho. O Golden Guy surge para preencher essa lacuna, oferecendo uma ponte entre a
                educação e as oportunidades profissionais.
              </p>
              <p>
                Nossa plataforma permite que os estudantes se cadastrem informando seu curso, e a partir daí recebam
                sugestões personalizadas de vagas e caminhos de carreira relacionados à sua área de estudo. É como ter
                um orientador de carreira sempre disponível, pronto para "dar uma luz" quando você não sabe por onde
                começar.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mascot Story */}
        <Card style={{ borderColor: "#F29F05" }}>
          <CardHeader style={{ backgroundColor: "#F2E1C2" }}>
            <CardTitle className="text-2xl flex items-center gap-2" style={{ color: "#572B0E" }}>
              Conheça Gus, o nosso "Golden Guy"!
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2 items-center mb-6">
              <div>
                <img src="/images/mascote-inteiro.png" alt="Gus - Golden Guy" className="h-80 md:h-96 w-auto mx-auto" />
              </div>
              <div className="flex flex-col gap-4 text-pretty leading-relaxed">
                <p>
                  Ele é uma abelha, e não por acaso. Acreditamos que a abelha é o símbolo perfeito para o trabalho
                  árduo, a colaboração e a dedicação que buscamos inspirar em nossa comunidade de busca de empregos. Gus
                  personifica o zelo e a produtividade, sempre com sua maleta e lupa, pronto para encontrar a próxima
                  grande oportunidade.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-pretty leading-relaxed">
              <p>
                Mas por que um estilo que nos remete aos anos 1940? Em uma era de constante inovação tecnológica, onde
                muitos se preocupam com a obsolescência de certas profissões e a incerteza sobre o futuro do trabalho,
                Gus nos lembra de uma época onde a resiliência e a adaptabilidade eram chaves.
              </p>
              <p>
                Nosso mascote representa a ponte entre o passado e o futuro: a modernidade e eficiência de nossa
                plataforma se encontram com a sabedoria e a experiência das gerações passadas. Com o Golden Guy Gus,
                queremos mostrar que a tecnologia não precisa ser uma ameaça, mas sim uma ferramenta poderosa para unir
                todas as gerações, ajudando tanto os mais experientes quanto os recém-chegados ao mercado a navegarem
                com sucesso na busca por seu próximo emprego.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Valores</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#F2B705" }}
              >
                <GraduationCap className="h-6 w-6" style={{ color: "#23160B" }} />
              </div>
              <CardTitle className="text-lg">Educação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Acreditamos que a educação é a base para o sucesso profissional
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#F29F05" }}
              >
                <Target className="h-6 w-6" style={{ color: "#23160B" }} />
              </div>
              <CardTitle className="text-lg">Foco</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Conectamos estudantes diretamente com oportunidades relevantes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#D97904" }}
              >
                <Users className="h-6 w-6" style={{ color: "#23160B" }} />
              </div>
              <CardTitle className="text-lg">Colaboração</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Construímos uma comunidade de apoio mútuo e crescimento</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#572B0E" }}
              >
                <Zap className="h-6 w-6" style={{ color: "#F2E1C2" }} />
              </div>
              <CardTitle className="text-lg">Inovação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Usamos tecnologia moderna para resolver problemas reais</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tech Stack */}
      <Card className="max-w-4xl mx-auto" style={{ backgroundColor: "#F2E1C2" }}>
        <CardHeader>
          <CardTitle className="text-2xl text-center" style={{ color: "#572B0E" }}>
            Tecnologias Utilizadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "#D97904" }}>
                Frontend
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• React + Next.js 16 + TypeScript</li>
                <li>• Tailwind CSS v4</li>
                <li>• shadcn/ui Components</li>
                <li>• SPA com React Router</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "#D97904" }}>
                Backend
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• Java com Domain Driven Design</li>
                <li>• Spring Boot REST API</li>
                <li>• Oracle Database</li>
                <li>• JWT Authentication</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
