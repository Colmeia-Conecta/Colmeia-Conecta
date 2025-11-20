# Golden Guy (Gus) - Plataforma de Vagas para Estudantes

![Golden Guy Logo](/images/logo-rosto.png)

## 📋 Sobre o Projeto

**Golden Guy (Gus)** é uma plataforma inovadora que conecta estudantes universitários a oportunidades de emprego e estágio relacionadas aos seus cursos. Desenvolvido como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas da FIAP, o sistema ajuda estudantes a descobrirem como aplicar o conhecimento adquirido em sala de aula no mercado de trabalho.

### Status do Projeto
🚧 **Em Desenvolvimento** - Versão acadêmica/demonstração

## 📑 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Endpoints Principais](#endpoints-principais)
- [Equipe](#equipe)
- [Screenshots](#screenshots)
- [Contato](#contato)

## 🎯 Sobre o Projeto

O Golden Guy nasceu da necessidade observada entre estudantes: a dificuldade em encontrar vagas que se alinhem com o curso que estão fazendo. Nossa plataforma oferece:

- 🎓 **Recomendações Personalizadas**: Vagas filtradas por curso
- 🔍 **Busca Inteligente**: Filtros por nível, localização e palavras-chave
- ⭐ **Vagas Favoritas**: Salve oportunidades para candidatura futura
- 👤 **Perfil Personalizado**: Gerencie suas informações e preferências
- 🐝 **Gus, o Mascote**: Um guia amigável inspirado nos anos 1940

### Conheça Gus

Gus é uma abelha e nosso mascote oficial! A abelha simboliza trabalho árduo, colaboração e dedicação. Com seu estilo vintage dos anos 1940, Gus representa a ponte entre a sabedoria do passado e a tecnologia do futuro, mostrando que a inovação pode unir gerações na busca por oportunidades.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.2** - Biblioteca para interfaces
- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI reutilizáveis
- **Vite** - Build tool moderna
- **React Router** - Roteamento SPA

### Backend
- **Java 17+** - Linguagem de programação
- **Spring Boot** - Framework para APIs REST
- **Domain Driven Design (DDD)** - Arquitetura
- **JWT** - Autenticação e autorização
- **Oracle Database** - Banco de dados relacional
- **Flyway** - Migrations de banco de dados

### DevOps & Tools
- **Docker** - Containerização
- **Git & GitHub** - Controle de versão
- **GitHub Actions** - CI/CD
- **Vercel** - Deploy do frontend
- **Cloud Provider** - Deploy do backend (AWS/GCP/Heroku)

## ✨ Funcionalidades

### Para Estudantes
- ✅ Cadastro com informações do curso
- ✅ Login seguro com JWT
- ✅ Busca de vagas por curso, nível e localização
- ✅ Filtros avançados de busca
- ✅ Salvar vagas favoritas
- ✅ Perfil editável
- ✅ Dashboard com estatísticas

### Para Administradores (Futuro)
- 📝 Cadastro de novas vagas
- 📊 Painel de analytics
- 👥 Gestão de usuários

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ e npm/yarn
- Java 17+ e Maven
- Oracle Database (local ou cloud)
- Git

### Instalação do Frontend

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/golden-guy.git
cd golden-guy/frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas configurações

# Inicie o servidor de desenvolvimento
npm run dev
\`\`\`

O frontend estará disponível em `http://localhost:3000`

### Instalação do Backend

\`\`\`bash
cd golden-guy/backend

# Configure o application.properties
cp src/main/resources/application.properties.example src/main/resources/application.properties
# Edite com suas credenciais do Oracle DB

# Execute as migrations
mvn flyway:migrate

# Compile e execute
mvn spring-boot:run
\`\`\`

O backend estará disponível em `http://localhost:8080`

### Usando Docker

\`\`\`bash
# Na raiz do projeto
docker-compose up -d
\`\`\`

## 🎮 Como Usar

### URLs de Acesso

**Frontend (Produção)**: https://golden-guy.vercel.app  
**Backend (Produção)**: https://api-golden-guy.herokuapp.com  
**Documentação API**: https://api-golden-guy.herokuapp.com/swagger-ui.html

### Fluxo Básico

1. **Cadastre-se**: Acesse `/auth/register` e preencha seus dados
2. **Faça Login**: Entre com email e senha em `/auth/login`
3. **Explore Vagas**: Navegue pelas vagas em `/vagas`
4. **Filtre por Curso**: Use os filtros para encontrar vagas do seu curso
5. **Salve Favoritas**: Clique no coração para salvar vagas
6. **Gerencie Perfil**: Atualize suas informações em `/profile`

## 📁 Estrutura de Pastas

\`\`\`
golden-guy/
├── frontend/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx              # Home
│   │   │   ├── vagas/page.tsx        # Listagem de vagas
│   │   │   ├── about/page.tsx        # Sobre o projeto
│   │   │   ├── team/page.tsx         # Integrantes
│   │   │   ├── contact/page.tsx      # Contato e FAQ
│   │   │   ├── profile/page.tsx      # Perfil do usuário
│   │   │   ├── favorites/page.tsx    # Vagas salvas
│   │   │   └── auth/
│   │   │       ├── login/page.tsx    # Login
│   │   │       └── register/page.tsx # Cadastro
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── auth-provider.tsx
│   ├── lib/
│   │   ├── api.ts                    # API client
│   │   ├── auth.ts                   # Auth utilities
│   │   └── utils.ts
│   ├── public/
│   │   └── images/                   # Mascote e assets
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/goldenguy/
│   │   │   │   ├── domain/           # Domain layer (DDD)
│   │   │   │   ├── application/      # Application layer
│   │   │   │   ├── infrastructure/   # Infrastructure layer
│   │   │   │   └── api/              # API/Controllers layer
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── db/migration/     # Flyway migrations
│   │   └── test/
│   ├── pom.xml
│   └── Dockerfile
├── infra/
│   ├── docker-compose.yml
│   └── scripts/
│       ├── create-tables.sql
│       └── seed-data.sql
└── README.md
\`\`\`

## 🔌 Endpoints Principais

### Autenticação
\`\`\`
POST   /api/auth/register    - Registrar novo usuário
POST   /api/auth/login       - Login (retorna JWT)
POST   /api/auth/refresh     - Refresh token
\`\`\`

### Usuários
\`\`\`
GET    /api/users/{id}                  - Buscar perfil
PUT    /api/users/{id}                  - Atualizar perfil
GET    /api/users/{id}/favorites        - Listar vagas salvas
POST   /api/users/{id}/favorites        - Salvar vaga
DELETE /api/users/{id}/favorites/{id}   - Remover vaga salva
\`\`\`

### Vagas
\`\`\`
GET    /api/vagas                       - Listar vagas (com filtros)
GET    /api/vagas/{id}                  - Buscar vaga específica
POST   /api/vagas                       - Criar vaga (admin)
\`\`\`

### Contato
\`\`\`
POST   /api/contact                     - Enviar mensagem
\`\`\`

### Parâmetros de Query (GET /api/vagas)
- `course` - Filtrar por curso
- `level` - Filtrar por nível (Estágio, Júnior, Trainee)
- `location` - Filtrar por cidade
- `q` - Busca por palavra-chave
- `page` - Número da página (padrão: 0)
- `size` - Itens por página (padrão: 10)

## 👥 Equipe

### Desenvolvedores - FIAP 1TDSPV

| Nome | RM | GitHub | LinkedIn |
|------|-----|--------|----------|
| **Gustavo Ganaha Freire** | RM561334 | [@ghfreiree](https://github.com/ghfreiree) | [LinkedIn](https://www.linkedin.com/in/gustavo-ganaha-freire-0815bb353/) |
| **Pedro Gomes** | RM562606 | [@Pedrogomesz](https://github.com/Pedrogomesz) | [LinkedIn](https://www.linkedin.com/in/pedrogoomes/) |
| **Lucas Lopes** | RM563544 | [@LLopessss](https://github.com/LLopessss) | [LinkedIn](#) |

**Instituição**: FIAP  
**Curso**: Análise e Desenvolvimento de Sistemas  
**Ano**: 2025

## 📸 Screenshots

### Home Page
A página inicial apresenta Gus, nosso mascote, e uma visão geral das vagas disponíveis.

### Busca de Vagas
Sistema de filtros avançados permite buscar vagas por curso, nível e localização.

### Perfil do Usuário
Gerencie suas informações e acompanhe suas estatísticas de uso da plataforma.

## 🗄️ Schema do Banco de Dados (DDL)

\`\`\`sql
-- Users table
CREATE TABLE users (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    first_name VARCHAR2(100) NOT NULL,
    last_name VARCHAR2(100) NOT NULL,
    age NUMBER NOT NULL,
    email VARCHAR2(255) NOT NULL UNIQUE,
    password_hash VARCHAR2(255) NOT NULL,
    course VARCHAR2(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vagas table
CREATE TABLE vagas (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    title VARCHAR2(255) NOT NULL,
    company VARCHAR2(255) NOT NULL,
    description CLOB,
    level VARCHAR2(50) NOT NULL,
    location VARCHAR2(255) NOT NULL,
    tags VARCHAR2(500),
    course VARCHAR2(255) NOT NULL,
    salary VARCHAR2(100),
    type VARCHAR2(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Favorites table
CREATE TABLE favorites (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    user_id NUMBER NOT NULL,
    vaga_id NUMBER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_favorites_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_favorites_vaga FOREIGN KEY (vaga_id) REFERENCES vagas(id)
);

-- Contacts table
CREATE TABLE contacts (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name VARCHAR2(255) NOT NULL,
    email VARCHAR2(255) NOT NULL,
    subject VARCHAR2(255) NOT NULL,
    message CLOB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## 🧪 Testes

### Frontend
\`\`\`bash
npm test                 # Testes unitários
npm run test:e2e        # Testes E2E
npm run test:coverage   # Cobertura de código
\`\`\`

### Backend
\`\`\`bash
mvn test                # Testes unitários
mvn verify              # Testes de integração
\`\`\`

## 🚀 Deploy

### Frontend (Vercel)
\`\`\`bash
# Push para main branch dispara deploy automático
git push origin main
\`\`\`

### Backend (Heroku)
\`\`\`bash
heroku login
heroku create api-golden-guy
git push heroku main
\`\`\`

## 🔐 Variáveis de Ambiente

### Frontend (.env.local)
\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
\`\`\`

### Backend (application.properties)
```properties
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:XE
spring.datasource.username=your_username
spring.datasource.password=your_password
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000
