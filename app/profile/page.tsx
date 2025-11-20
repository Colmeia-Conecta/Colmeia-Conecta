"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { User, Mail, GraduationCap, Calendar, Save, CheckCircle2 } from "lucide-react"

const COURSES = [
  "Análise e Desenvolvimento de Sistemas",
  "Ciência da Computação",
  "Engenharia de Software",
  "Sistemas de Informação",
  "Marketing",
  "Marketing Digital",
  "Publicidade e Propaganda",
  "Design Gráfico",
  "Design Digital",
  "Administração",
  "Gestão Comercial",
  "Gestão de Recursos Humanos",
  "Outro",
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const [profileData, setProfileData] = useState({
    firstName: "João",
    lastName: "Silva",
    email: "joao.silva@email.com",
    age: "22",
    course: "Análise e Desenvolvimento de Sistemas",
    memberSince: "2024",
  })

  const handleSave = async () => {
    setIsSaving(true)
    setSaveSuccess(false)

    try {
      // TODO: Connect to backend API
      // await fetch(`/api/users/${userId}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${token}`
      //   },
      //   body: JSON.stringify(profileData)
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSaveSuccess(true)
      setIsEditing(false)
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (err) {
      console.error("Error saving profile:", err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Meu Perfil</h1>
          <p className="text-muted-foreground">Gerencie suas informações pessoais e preferências</p>
        </div>

        {saveSuccess && (
          <Alert className="mb-6" style={{ backgroundColor: "#F2E1C2", borderColor: "#F2B705" }}>
            <CheckCircle2 className="h-4 w-4" style={{ color: "#D97904" }} />
            <AlertDescription style={{ color: "#572B0E" }}>Perfil atualizado com sucesso!</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Summary Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div
                className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F2B705" }}
              >
                <User className="h-12 w-12" style={{ color: "#23160B" }} />
              </div>
              <CardTitle>
                {profileData.firstName} {profileData.lastName}
              </CardTitle>
              <CardDescription>{profileData.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Curso</span>
                </div>
                <Badge className="w-full justify-center" style={{ backgroundColor: "#F2E1C2", color: "#572B0E" }}>
                  {profileData.course}
                </Badge>
              </div>
              <div className="flex flex-col gap-3 text-sm pt-3 border-t">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Membro desde</span>
                </div>
                <p className="font-medium">{profileData.memberSince}</p>
              </div>
            </CardContent>
          </Card>

          {/* Profile Edit Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Atualize seus dados para melhorar as recomendações de vagas</CardDescription>
                </div>
                {!isEditing && (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Editar
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    id="age"
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Curso</Label>
                  <Select
                    value={profileData.course}
                    onValueChange={(value) => setProfileData({ ...profileData, course: value })}
                    disabled={!isEditing}
                  >
                    <SelectTrigger id="course">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COURSES.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex-1"
                    style={{ backgroundColor: "#F2B705", color: "#23160B" }}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isSaving ? "Salvando..." : "Salvar Alterações"}
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isSaving}>
                    Cancelar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Vagas Salvas</CardDescription>
              <CardTitle className="text-3xl" style={{ color: "#F2B705" }}>
                12
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Candidaturas</CardDescription>
              <CardTitle className="text-3xl" style={{ color: "#D97904" }}>
                8
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Perfil Visualizado</CardDescription>
              <CardTitle className="text-3xl" style={{ color: "#572B0E" }}>
                45x
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
