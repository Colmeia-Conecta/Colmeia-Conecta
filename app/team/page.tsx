import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

const TEAM_MEMBERS = [
  {
    name: "Gustavo Ganaha Freire",
    rm: "RM561334",
    role: "Desenvolvedor Full Stack",
    turma: "1TDSPV",
    photo: "/images/gustavo-foto.jpeg",
    github: "https://github.com/ghfreiree",
    linkedin: "https://www.linkedin.com/in/gustavo-ganaha-freire-0815bb353/",
    skills: ["React", "Java", "Oracle", "Spring Boot"],
  },
  {
    name: "Pedro Gomes",
    rm: "RM562606",
    role: "Desenvolvedor Full Stack",
    turma: "1TDSPV",
    photo: "/images/pedro-foto.jpg",
    github: "https://github.com/Pedrogomesz",
    linkedin: "https://www.linkedin.com/in/pedrogoomes/",
    skills: ["TypeScript", "Next.js", "API Design", "UX/UI"],
  },
  {
    name: "Lucas Lopes",
    rm: "RM563544",
    role: "Desenvolvedor Full Stack",
    turma: "1TDSPV",
    photo: "/images/lucas-foto.jpeg",
    github: "https://github.com/LLopessss",
    linkedin: "#",
    skills: ["Database", "Backend", "Java", "SQL"],
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Conheça os estudantes da FIAP que desenvolveram o Golden Guy
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.rm} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={member.photo || "/placeholder.svg"} alt={member.name} className="h-full w-full object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
              <div className="flex gap-2 pt-2">
                <Badge style={{ backgroundColor: "#F2B705", color: "#23160B" }}>{member.rm}</Badge>
                <Badge variant="outline">{member.turma}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Especialidades:</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon">
                  <Link href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                {member.linkedin !== "#" && (
                  <Button asChild variant="outline" size="icon">
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Info */}
      <Card className="max-w-4xl mx-auto" style={{ backgroundColor: "#F2E1C2" }}>
        <CardHeader>
          <CardTitle className="text-2xl text-center" style={{ color: "#572B0E" }}>
            Projeto Acadêmico FIAP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-pretty leading-relaxed">
              Este projeto foi desenvolvido como parte das atividades do curso de{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> da FIAP. O objetivo é criar uma solução real que
              ajude estudantes a encontrarem oportunidades de carreira alinhadas com seus estudos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="text-sm">
                <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas
              </div>
              <div className="hidden sm:block text-muted-foreground">•</div>
              <div className="text-sm">
                <strong>Instituição:</strong> FIAP
              </div>
              <div className="hidden sm:block text-muted-foreground">•</div>
              <div className="text-sm">
                <strong>Ano:</strong> 2025
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
