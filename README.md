## Projeto Locadora Blockbuster

Uma plataforma para gerenciar uma locadora de filmes, na qual os usuários tem acesso ao painel administrativo e ao site com catálogo de filmes.

## Lista de Filmes

Abaixo a tela dentro do painel administrativo

![Thumbnail GitHub](https://raw.githubusercontent.com/weslley19/desafio-essent-locadora/main/dash.png)

> Área acessada somente via login, na qual somente o dono e os funcionários tem acesso

## 🔨 Funcionalidades do projeto

Usuário logado pode:
- Cadastrar pessoas (cliente, atores, diretores, funcionários)
- Cadastrar categorias de filmes
- Cadastrar filmes, com banners
- Dashboard com faturamento da locadora

![](https://github.com/alura-cursos/android-com-kotlin-personalizando-ui/raw/master/img/amostra.gif)

## ✔️ Técnicas e tecnologias utilizadas

- `Next JS`: Criação do layout e API com actions
- `Prisma`: ORM para maninupalação do banco de dados e migrations
- `Postgress`: Banco de dados
- `TailwindCSS`: Estilizaçãod de toda a aplicação
- `Zod`: Validação dos formulários
- `Hook Form`: Criação dos formulários
- `Shadcn UI`: Componentes da aplicação
- `TypeScript`: Linguagem do projeto
- `yarn`: Gerenciador de dependência

## 📁 Acesso ao projeto

Execute o seguinte comando
```bash
git clone https://github.com/weslley19/desafio-essent-locadora.git
```

## 🛠️ Abrir e rodar o projeto

Após clonar o projeto, execute o seguinte comando para instalar todas as dependências do projeto
```bash
yarn
```

Baixados tudo, execute
```bash
npx prisma generate
```
Isso irá atualizar o gerenciador do prisma

Feito isto, está tudo pronto pra começar, o banco fica hospedado online, então não precisa baixar nada.

Caso queira, pode usar o prisma studio:
```bash
npx prisma studio
```
Irá abrir um cliente para visualizar todas as tabelas
