# Dev Stack

Picking a tech stack for a new project always takes me longer than it should. I keep jumping between docs, comparing frameworks, and forgetting what I already decided on. So for this assignment I built **Dev Stack**, a small web app where you can browse popular technologies, check their details at a glance, and put together your own stack in one place.

**Live site:** [add your live link here](#)

## Technologies I used

- **React** for building the UI with components
- **TypeScript** to keep the data and props type safe
- **Tailwind CSS** and **DaisyUI** for styling and layout
- **React-Toastify** for the little alert messages
- **JSON** file for storing all the technology data
- **Vite** as the build tool and dev server

## Features

1. **Browse technologies**
   All technologies are loaded from a JSON file and shown as cards. Each card has the icon, a short description, category, difficulty level and rating, so it's easy to compare them side by side.

2. **Build your own stack**
   Click "Add to Stack" on any card and it shows up in the "Your Stack" panel right next to the grid. The button changes to "✓ Added to Stack" so you know what's already picked, and if you try to add the same one again you'll get a warning.

3. **Remove anytime**
   Changed your mind? Remove a single item with the ✕ button, or clear everything at once with "Remove All". The panel goes back to its empty state when nothing is selected.

## Run it locally

```bash
git clone https://github.com/devsuvo/Assignment-05.git
cd Assignment-05
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## What I learned

This was my first time mixing TypeScript with React in a real project. Passing props between components and keeping the stack state in one place (App) took me a bit to figure out, but it made the add/remove logic much cleaner in the end.

---

Made by [devsuvo](https://github.com/devsuvo)