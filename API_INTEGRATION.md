# Integração com API Java

Este documento descreve como a aplicação Golden Guy está integrada com o backend Java Spring Boot.

## Configuração da API

A aplicação está configurada para se conectar com a API Java hospedada em:
**https://testejavags-2.onrender.com**

### Variável de Ambiente

A URL da API é configurada através da variável de ambiente `NEXT_PUBLIC_API_URL`:

\`\`\`env
NEXT_PUBLIC_API_URL=https://testejavags-2.onrender.com/usuario
\`\`\`

Se você precisar alterar a URL (por exemplo, para desenvolvimento local), você pode:

1. No v0, abrir o sidebar e ir em **Vars**
2. Adicionar a variável `NEXT_PUBLIC_API_URL` com o valor desejado
3. Ou criar um arquivo `.env.local` na raiz do projeto com o conteúdo acima

## Endpoints Implementados

### Autenticação

#### POST /auth/register
Cria uma nova conta de usuário.

**Request Body:**
\`\`\`json
{
  "firstName": "João",
  "lastName": "Silva",
  "age": 20,
  "email": "joao@example.com",
  "password": "senha123",
  "course": "Ciência da Computação"
}
\`\`\`

**Response:**
\`\`\`json
{
  "id": "user-id",
  "message": "Usuário criado com sucesso"
}
\`\`\`

#### POST /auth/login
Faz login e retorna token JWT.

**Request Body:**
\`\`\`json
{
  "email": "joao@example.com",
  "password": "senha123"
}
\`\`\`

**Response:**
\`\`\`json
{
  "token": "jwt-token-here",
  "refreshToken": "refresh-token-here",
  "user": {
    "id": "user-id",
    "firstName": "João",
    "lastName": "Silva",
    "email": "joao@example.com",
    "age": 20,
    "course": "Ciência da Computação"
  }
}
\`\`\`

## Arquivos de Integração

### `lib/auth.ts`
Gerencia tokens de autenticação e configuração da URL base da API.

### `lib/api.ts`
Cliente HTTP que encapsula todas as chamadas à API Java, incluindo:
- `authAPI.register()` - Registrar usuário
- `authAPI.login()` - Fazer login
- `usersAPI.getProfile()` - Buscar perfil
- `usersAPI.updateProfile()` - Atualizar perfil
- `vagasAPI.list()` - Listar vagas
- E mais...

### `app/auth/register/page.tsx`
Página de cadastro que chama `authAPI.register()`.

### `app/auth/login/page.tsx`
Página de login que chama `authAPI.login()`.

## Fluxo de Autenticação

1. **Registro**: Usuário preenche formulário → `authAPI.register()` → API cria usuário no banco Oracle → Redireciona para login
2. **Login**: Usuário entra com credenciais → `authAPI.login()` → API valida e retorna JWT → Token armazenado no localStorage → Usuário autenticado
3. **Navegação**: Token é incluído automaticamente em todas as requisições através do header `Authorization: Bearer {token}`

## Tratamento de Erros

Todas as chamadas à API incluem tratamento de erros:

- **401 Unauthorized**: E-mail ou senha incorretos
- **400 Bad Request**: Dados inválidos
- **500 Internal Server Error**: Erro no servidor
- **Network Error**: Falha de conexão

Mensagens de erro são exibidas ao usuário através de componentes Alert.

## Debug

Para debug, console.log com prefixo `[v0]` são usados para rastrear:
- Requisições sendo enviadas
- Respostas recebidas
- Erros ocorridos

Exemplo:
\`\`\`typescript
console.log("[v0] Sending registration request to API:", data)
console.log("[v0] Registration successful:", response)
console.error("[v0] Registration error:", err)
\`\`\`

## Próximos Passos

Para integrar outros endpoints:

1. Adicione a função no `lib/api.ts`
2. Importe e use a função na página/componente
3. Trate erros e exiba feedback ao usuário

Exemplo:
\`\`\`typescript
import { vagasAPI } from '@/lib/api'

const vagas = await vagasAPI.list({
  course: 'Ciência da Computação',
  level: 'Estágio'
})
\`\`\`

## Requisitos do Backend

Para que a integração funcione, a API Java deve:

1. Aceitar requisições CORS do domínio do frontend
2. Retornar JSON com Content-Type correto
3. Implementar os endpoints conforme documentado
4. Usar JWT para autenticação
5. Retornar códigos HTTP apropriados

## Testando a Integração

1. Acesse a página de cadastro: `/auth/register`
2. Preencha o formulário com dados válidos
3. Verifique o console do navegador para logs `[v0]`
4. Se bem-sucedido, será redirecionado para `/auth/login`
5. Faça login com as credenciais criadas
6. Se bem-sucedido, será redirecionado para a home page

## Suporte

Em caso de problemas:

1. Verifique os logs do console (F12 no navegador)
2. Confirme que a API está rodando e acessível
3. Teste os endpoints diretamente com Postman/Insomnia
4. Verifique se o CORS está configurado corretamente no backend
