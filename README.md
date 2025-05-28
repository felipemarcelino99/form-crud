# 💻 Form CRUD

Aplicação front-end de cadastro e edição de computadores, construída com React, Next.js 14 e TailwindCSS. O projeto utiliza um formulário com validação de dados e gerenciamento de estado com Context API. A API é fictícia e fornecida pelo [MockAPI](https://mockapi.io/). A aplicação está hospedada na [Vercel](https://vercel.com/).

## 🔗 Link de Acesso

Acesse o projeto online: [https://form-crud-alpha.vercel.app/](https://form-crud-alpha.vercel.app/)

## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) – Validação de formulários
- [MockAPI](https://mockapi.io/) – Backend simulado
- [Date-fns](https://date-fns.org/) – Manipulação de datas

## 📦 Funcionalidades

- Listagem de computadores
- Cadastro de novo computador
- Edição de dados existentes
- Exclusão de computadores
- Validação de formulário
- Feedback de carregamento e erros
- Modal para criação/edição
- Revalidação de dados após operações

## 🧠 Conceitos Aplicados

- **Client Components e Server Actions (Next.js 14)**
- **Context API** para compartilhamento de estado global
- **Zod** para validação declarativa dos campos do formulário
- **Revalidação com `revalidateTag()`** para atualizar os dados sem recarregar a página

## 📁 Estrutura de Pastas

```
src/
 ┣ app/
 ┃ ┗ actions/           # Server Actions (revalidate, etc.)
 ┣ components/          # Componentes reutilizáveis
 ┣ context/             # Contextos globais (form, computador)
 ┣ lib/                 # Schemas e validações
 ┣ services/            # Requisições à API
```

## 🔧 Como Rodar Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/felipemarcelino99/form-crud.git
   cd form-crud
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse em: `http://localhost:3000`

> ⚠️ As requisições são feitas usando o [MockAPI](https://mockapi.io/), por isso não é necessário configurar um backend local.

## 🤝 Autor

Desenvolvido por [Felipe Marcelino](https://github.com/felipemarcelino99)
