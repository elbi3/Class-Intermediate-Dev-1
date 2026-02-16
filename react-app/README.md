# ⚡ Vite Fan Page

A small React demo project built with Vite + React Router as part of a component architecture assignment.

This project intentionally leans into a playful “Vite fan page” theme while demonstrating reusable components, routing, layout composition, and basic interactivity.

## 🚀 Tech Stack

- React
- Vite
- React Router
- TypeScript

## 📚 What This Project Demonstrates
1️⃣ Modern React Setup
Created using Vite (no CRA)
Clean, minimal configuration
Fast development server

2️⃣ Routing with React Router
createBrowserRouter
Nested layout pattern
Shared Layout with Header + Footer
Multiple route pages

3️⃣ Reusable Components
FunButton component used in ComponentA and ComponentB
Demonstrates:
- Local state
- Props
- Optional callbacks
- Parent-child communication

4️⃣ Layout Composition
Shared Header
Shared Footer
Outlet for nested routing

5️⃣ Pure Fun
Dynamic (on hover) Vite logo
Slightly overenthusiastic design choices
Light animation and hover effects

## 🧱 Project Structure (Simplified)
```css
src/
  main.tsx
  components/
    Layout.tsx
    Header.tsx
    Footer.tsx
    FunButton.tsx
  routes/
    Home.tsx
    About.tsx
    ComponentA.tsx
    ComponentB.tsx
```

## ▶️ How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start the development server
npm run dev

3️⃣ Open in browser
Vite will output a local URL, typically:
http://localhost:5173

## 🎯 Purpose of This Project

This project was created as part of a learning assignment focused on:
- Setting up a modern React application
- Practicing routing and layout patterns
- Demonstrating reusable components
- Understanding state and props
- Exploring Vite as a development tool

It is intentionally lightweight and designed to demonstrate concepts rather than production patterns.