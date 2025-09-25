Aplicação com funcionalidade básica de autenticação, com:

- Next.js
- Auth.js
- Supabase (postgres)
- ORM Prisma

Deployed to Vercel.

---

Como usar o ORM Prisma em um projeto que já possui um banco de dados PostgreSQL:

- https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql

Incluir "postinstall": "prisma generate" para garantir que o `Prisma Client` será gerado:

- https://www.prisma.io/docs/guides/nextjs#7-deploy-your-application-to-vercel-optional

Instruções para implementar Auth.js + ORM Prisma (supabase)

- https://authjs.dev/getting-started/adapters/prisma
