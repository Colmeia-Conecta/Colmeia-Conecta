"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Briefcase, ExternalLink, Trash2 } from "lucide-react"

interface FavoriteJob {
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
  savedAt: string
}

const MOCK_FAVORITES: FavoriteJob[] = [
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
    savedAt: "2025-01-10",
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
    savedAt: "2025-01-08",
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteJob[]>(MOCK_FAVORITES)

  const handleRemoveFavorite = (jobId: string) => {
    setFavorites(favorites.filter((job) => job.id !== jobId))
    // TODO: Update backend
    // await fetch(`/api/users/${userId}/favorites/${jobId}`, { method: 'DELETE' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Minhas Vagas Salvas</h1>
          <p className="text-muted-foreground">Acompanhe as oportunidades que você salvou para candidatura futura</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total de Vagas Salvas</CardDescription>
              <CardTitle className="text-3xl" style={{ color: "#F2B705" }}>
                {favorites.length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Vagas de Esta Semana</CardDescription>
              <CardTitle className="text-3xl" style={{ color: "#D97904" }}>
                2
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Vagas Fechando Hoje</CardDescription>
              <CardTitle className="text-3xl" style={{ color: "#572B0E" }}>
                0
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Favorites List */}
        {favorites.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {favorites.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                      <CardDescription className="mt-1">{job.company}</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleRemoveFavorite(job.id)}
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>

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
                      Salva em: <span className="font-medium">{new Date(job.savedAt).toLocaleDateString("pt-BR")}</span>
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1" style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
                        Ver Detalhes
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleRemoveFavorite(job.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full p-4" style={{ backgroundColor: "#F2E1C2" }}>
                <Heart className="h-8 w-8" style={{ color: "#D97904" }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nenhuma vaga salva ainda</h3>
                <p className="text-muted-foreground mb-4">Comece a salvar vagas para acompanhá-las facilmente</p>
                <Button asChild style={{ backgroundColor: "#F2B705", color: "#23160B" }}>
                  <a href="/vagas">Explorar Vagas</a>
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
