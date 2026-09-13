# Dev Stack Builder

Dev Stack Builder is a web app that helps developers explore modern frontend, backend, database, and DevOps technologies, then put together a personalized tech stack for their next project. Users can browse technology cards with ratings and difficulty levels, add their favorites to a "Your Stack" list, and remove them individually or all at once.

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- Vite

## Features

1. **Browse and filter technologies** — Explore 12 technologies across categories like Frontend, Backend, Database, Language, Styling, and DevOps, each with a rating, difficulty level, and short description.
2. **Build your custom stack** — Add technologies to a personal "Your Stack" list with a single click, with duplicate protection and toast notifications confirming each action.
3. **Fully responsive design** — A mobile-friendly navbar with a hamburger menu, a responsive card grid, and a sidebar that adapts cleanly from mobile to desktop layouts.

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a combination of JavaScript and XML/HTML-like syntax that lets you write UI structure directly inside JavaScript code. It's used in React because it makes components more readable, keeps UI markup and JS logic together in one place, and feels familiar since its syntax is close to plain HTML.

**2. What is the difference between props and state?**

Props are data passed from a parent component to a child component — the child receives them but cannot change them directly. State is data a component manages internally using `useState`, and it can be updated by that component. In this project, child components never change a parent's state directly; instead, the parent passes down a function (like `onAdd`) as a prop, the child calls that function, and the parent updates its own state inside it.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a component hold a value that can change over time, and tells React to re-render the UI whenever that value updates. I used it several times in this project — for the fetched technologies list, the loading state while fetching, the selected stack of technologies, and the mobile menu's open/closed state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs a "side effect" after a component renders — things like fetching data, which aren't part of rendering itself. I needed it to load `technologies.json` because calling fetch directly during render would cause it to run on every re-render. Using `useEffect` with an empty dependency array (`[]`) makes sure the fetch only runs once, when the component first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The `key` prop helps React identify each item individually so it can efficiently track which items were added, removed, or changed between renders, instead of re-rendering the entire list every time. Without a unique key, React can't reliably match items across renders, which can lead to bugs or unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different JSX depending on some condition. I used it in the `YourStack` component: `stack.length === 0 ? <p>No technologies selected yet</p> : stack.map(...)` — if the stack is empty, it shows a message; otherwise, it renders the list of selected items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child using props, like `<TechnologyCard technology={tech} />`, where `App` sends each technology object to `TechnologyCard`. A child can't directly change anything in the parent, but it can communicate back by calling a function the parent passed down as a prop — like `onAdd={addToStack}`, which the child calls via `onClick={() => onAdd(technology)}` to let the parent know something happened.