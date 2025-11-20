"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, Heart, ExternalLink } from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  description: string
  level: string
  location: string
  tags: string[]
  course: string
  salary?: string
  type: string
}

const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Desenvolvedor Front-end Júnior",
    company: "Tech Startup Brasil",
    description: "Buscamos desenvolvedor júnior para trabalhar com React, TypeScript e Next.js em projetos inovadores.",
    level: "Júnior",
    location: "São Paulo, SP",
    tags: ["React", "TypeScript", "CSS", "Next.js"],
    course: "Análise e Desenvolvimento de Sistemas",
    salary: "R$ 4.000 - R$ 6.000",
    type: "CLT",
  },
  {
    id: "2",
    title: "Analista de Marketing Digital",
    company: "Agência Criativa Digital",
    description: "Oportunidade para atuar com estratégias de marketing digital, SEO, e gestão de redes sociais.",
    level: "Estágio",
    location: "Remoto",
    tags: ["SEO", "Social Media", "Google Ads", "Analytics"],
    course: "Marketing Digital",
    salary: "R$ 1.500 - R$ 2.000",
    type: "Estágio",
  },
  {
    id: "3",
    title: "Designer UX/UI",
    company: "Fintech Inovadora",
    description: "Procuramos designer para criar experiências incríveis em produtos financeiros.",
    level: "Trainee",
    location: "Rio de Janeiro, RJ",
    tags: ["Figma", "Design System", "Prototyping", "User Research"],
    course: "Design Digital",
    salary: "R$ 3.000 - R$ 4.500",
    type: "CLT",
  },
  {
    id: "4",
    title: "Desenvolvedor Back-end Java",
    company: "Empresa de E-commerce",
    description: "Vaga para desenvolvedor back-end com experiência em Java, Spring Boot e bancos de dados.",
    level: "Júnior",
    location: "São Paulo, SP",
    tags: ["Java", "Spring Boot", "Oracle", "REST API"],
    course: "Análise e Desenvolvimento de Sistemas",
    salary: "R$ 5.000 - R$ 7.000",
    type: "CLT",
  },
  {
    id: "5",
    title: "Analista de Recursos Humanos",
    company: "Consultoria RH",
    description: "Oportunidade para atuar com recrutamento e seleção, treinamento e desenvolvimento.",
    level: "Estágio",
    location: "Belo Horizonte, MG",
    tags: ["Recrutamento", "Seleção", "Treinamento", "Excel"],
    course: "Gestão de Recursos Humanos",
    salary: "R$ 1.800 - R$ 2.500",
    type: "Estágio",
  },
  {
    id: "6",
    title: "Analista de Dados",
    company: "Tech Corp",
    description: "Trabalhe com análise de dados, SQL, Python e criação de dashboards para tomada de decisões.",
    level: "Júnior",
    location: "Remoto",
    tags: ["SQL", "Python", "Power BI", "Excel"],
    course: "Ciência da Computação",
    salary: "R$ 4.500 - R$ 6.500",
    type: "PJ",
  },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState<string>("all")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCourse = selectedCourse === "all" || job.course === selectedCourse
    const matchesLevel = selectedLevel === "all" || job.level === selectedLevel
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation)

    return matchesSearch && matchesCourse && matchesLevel && matchesLocation
  })

  const courses = Array.from(new Set(MOCK_JOBS.map((job) => job.course)))
  const levels = Array.from(new Set(MOCK_JOBS.map((job) => job.level)))
  const locations = Array.from(new Set(MOCK_JOBS.map((job) => job.location.split(",")[0])))

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Vagas Disponíveis</h1>
        <p className="text-muted-foreground">Encontre oportunidades perfeitas para seu curso e nível de experiência</p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Filtros de Busca
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Título, empresa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Curso</label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os cursos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os cursos</SelectItem>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Nível</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os níveis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os níveis</SelectItem>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Localização</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as cidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as cidades</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                  <SelectItem value="Remoto">Remoto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredJobs.length} {filteredJobs.length === 1 ? "vaga encontrada" : "vagas encontradas"}
        </p>
        {(searchQuery || selectedCourse !== "all" || selectedLevel !== "all" || selectedLocation !== "all") && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchQuery("")
              setSelectedCourse("all")
              setSelectedLevel("all")
              setSelectedLocation("all")
            }}
          >
            Limpar filtros
          </Button>
        )}
      </div>

      {/* Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                  <CardDescription className="mt-1">{job.company}</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span>
                    {job.type} • {job.salary}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" style={{ backgroundColor: "#F2E1C2", color: "#572B0E" }}>
                  {job.level}
                </Badge>
                {job.tags.slice(0, 2).map((tag, i) => (
                  <Badge key={i} variant="outline" style={{ borderColor: "#F2B705" }}>
                    {tag}
                  </Badge>
                ))}
                {job.tags.length > 2 && <Badge variant="outline">+{job.tags.length - 2}</Badge>}
              </div>

              <div className="pt-3 border-t">
                <p className="text-xs text-muted-foreground mb-3">
                  Relacionado a:{" "}
                  <span className="font-medium" style={{ color: "#D97904" }}>
                    {job.course}
                  </span>
                </p>
                <Button className="w-full" style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
                  Ver Detalhes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card className="p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full p-4" style={{ backgroundColor: "#F2E1C2" }}>
              <Search className="h-8 w-8" style={{ color: "#D97904" }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Nenhuma vaga encontrada</h3>
              <p className="text-muted-foreground">Tente ajustar seus filtros de busca ou limpar todos os filtros</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
