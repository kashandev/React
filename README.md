# React

A collection of small practice projects: three React apps and one Prisma example.

| Folder | What it is | Built with |
|---|---|---|
| [`openai/app`](openai/app) | React app | React, TypeScript and Vite |
| [`todo/app`](todo/app) | To-do list app | Create React App, Font Awesome |
| [`task_list/app`](task_list/app) | Task list app | Create React App, Material UI, React Router, DataTables, react-tabs |
| [`prisma`](prisma) | Prisma starter with a `User` and a `Post` model | Prisma 5, SQLite and TypeScript |

Each folder is a separate project with its own `package.json` and its own README where one exists.

## Run an app

You need Node.js and npm. Pick a folder and run:

```bash
cd todo/app
npm install
npm start
```

| Folder | Start command | Build command |
|---|---|---|
| `openai/app` | `npm run dev` | `npm run build` |
| `todo/app` | `npm start` | `npm run build` |
| `task_list/app` | `npm start` | `npm run build` |

## Prisma example

The `prisma` folder has a schema with two models: `User` (email, name, posts) and `Post` (title, content, published, author). It uses SQLite, so set `DATABASE_URL` first, for example `DATABASE_URL="file:./dev.db"`, then:

```bash
cd prisma
npm install
npx prisma migrate dev
```
