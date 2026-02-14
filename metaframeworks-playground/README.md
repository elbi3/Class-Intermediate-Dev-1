# Metaframeworks Playground

## Overview

This project explores several modern React-based metaframeworks.  
The goal of the assignment was to initialize and build small demo applications in each framework to understand their routing, data fetching, rendering strategies, and overall developer experience.

The following frameworks were implemented:

- Next.js
- React Router (Remix-style framework mode)
- Gatsby
- Expo (React Native)

Each implementation is a minimal demo showcasing core features.

---

## 1. Next.js

Framework: Next.js

Features implemented:
- Static landing page
- Static Site Generation (SSG)
- Dynamic route for user profiles
- Data fetching from a public API
- Pre-rendering via build step

This demonstrated:
- File-based routing
- Static generation
- Dynamic routes with pre-rendered data

---

## 2. React Router (Remix-style)

Framework: React Router (framework mode)

Features implemented:
- Blog index page
- Dynamic blog post routes
- Nested routing for categories
- Markdown-based content loading
- Server-side data loaders

This demonstrated:
- Route configuration
- Dynamic URL segments
- Nested routing
- Data loaders
- File-based content sourcing

---

## 3. Gatsby

Framework: Gatsby

Features implemented:
- Portfolio-style homepage
- Markdown-based project content
- GraphQL data queries
- Programmatic page creation
- Template-based dynamic pages
- Optional styling via CSS-in-JS

This demonstrated:
- Gatsby's GraphQL data layer
- Static site generation
- Programmatic page creation
- Content sourcing from the filesystem

(CMS integration was not implemented.)

---

## 4. Expo (React Native)

(note: had to download Android Studio for this, it's huge amount of space)
Framework: Expo

Features implemented:
- Tab-based navigation (Home / About)
- API data fetching on Home tab
- List rendering using FlatList
- Local push notifications on data load

This demonstrated:
- Mobile navigation patterns
- External API integration
- Mobile UI rendering
- Local notification handling

---

## Summary

Each framework approaches routing, data fetching, and rendering differently:

- Next.js emphasizes hybrid rendering (SSG/SSR).
- React Router framework mode emphasizes explicit route configuration and loaders.
- Gatsby emphasizes static content and GraphQL data sourcing.
- Expo focuses on mobile application development with React Native.

These demos provide a practical comparison of how modern React metaframeworks structure applications and manage data.


## Walkthrough (after installs)

### Next.js

npm run dev
http://localhost:3000
http://localhost:3000/users/1
npm run build (prove SSG)

### Remix.js

npm run dev
http://localhost:5173
http://localhost:5173/blog/first-post (slug)
http://localhost:5173/blog/second-post
http://localhost:5173/blog/category/javascript  (nested routing)

### Gatsby.js

npm start
http://localhost:8000
http://localhost:8000/___graphql
http://localhost:8000/projects/project-one

### Expo.js

npx expo start
a (if installed Android Studio)
or w for web