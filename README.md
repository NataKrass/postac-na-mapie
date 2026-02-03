# Postać na Mapie

A simple React + TypeScript application that allows users to configure and control a character on a static map.

## Tech Stack
- React 18
- TypeScript
- Vite

## Features
- Character configuration form (name, color picker)
- Color name fetched from The Color API
- Static map with keyboard‑controlled character movement
- Clean separation of logic and UI using custom hooks

## Architecture
- `hooks/` – reusable business logic
- `components/` – presentational UI components
- `api/` – external API communication
- `types/` – shared TypeScript interfaces

## Setup
```bash
npm install
npm run dev