# Welcome to the FlightTracking & Detection project

## Purpose
This website serves as the project presentation page for the EEC 172 Embedded Systems final project, showcasing the design and functionality of the flight detection system.

## Repo Structure
src/
  assets/images cused throughout the website.

  src/components/
    contains React components for each section of the page
    (Hero, Overview, Architecture, Features, etc.)

  src/pages/
    Index.tsx — main entry point that renders the website and imports all page sections

- assets/ contains all images used in the project.
- components/ contains the TypeScript React components that make up the UI sections.
- pages/Index.tsx acts as the main file responsible for rendering the page and organizing components.

If you want to add, remove, or reorder sections, modify the imports inside Index.tsx.

## Running the Project Locally
1. Install dependencies
```bash
npm install
```
2. Start the development server
```bash
npm run dev
```
The application will start locally and can be viewed in your browser.

 ## Technologies Used
This project is built using:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vite (development environment)