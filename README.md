# Chisom's Portfolio

> A modern, responsive personal portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

---

## 🚀 Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 3) Build for production

```bash
npm run build
```

### 4) Preview the production build

```bash
npm run preview
```

---

## 🔎 About this Project

This repository contains a personal portfolio site showcasing projects, skills, and contact information. It is built with a modern React + TypeScript stack and includes:

- Responsive layout and styling powered by **Tailwind CSS**
- UI components built on **shadcn/ui** + **Radix UI**
- Routing via **React Router**
- State & data handling with **React Query**
- Form validation with **React Hook Form** and **Zod**
- Local theme support using **next-themes**
- Animations with **Framer Motion**

---

## 🧱 Key Features

- 🌙 Dark + Light theme toggle
- 📄 Multiple pages (Home, Projects, Skills, About, Contact)
- 🧩 Component-based design system (buttons, cards, modals, toast notifications)
- ⚡ Fast builds and hot reloading via Vite
- ✅ Type-safe forms & validation

---

## 🗂️ Project Structure (Highlights)

- `src/main.tsx` – app entrypoint
- `src/App.tsx` – router and layout
- `src/pages/` – top-level pages (Home, Projects, Skills, About, Contact)
- `src/components/` – reusable UI components and shadcn/ui primitives
- `src/data/` – project and product data used in pages
- `src/lib/utils.ts` – shared helper utilities

---

## ✅ Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build production assets |
| `npm run preview` | Serve built production assets locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (Vitest) |

---

## 📦 Deploying

You can deploy this site to any static hosting provider that supports Vite builds.

### Recommended platforms

- **Netlify** – connect repository and deploy from `dist/`
- **Vercel** – auto-detects Vite apps
- **GitHub Pages** – serve `dist/` via `gh-pages` or via GitHub Actions

---

## 🤝 Contributing

Feel free to open issues or pull requests. Key contribution areas:

- Adding new projects, skills, or page content
- Improving accessibility and responsiveness
- Adding new components (e.g., charts, forms, or data visualizations)

---

## 📝 License

This project is currently unlicensed. Add a license file if you want to clarify reuse terms.
