# ⚡ Quick Project Context & Structure Guide (`quick.md`)

Welcome! This file is designed for **AI Coding Agents** and **Developers** to instantly grasp the workspace layout, current project context, and state of development without losing continuity.

---

## 📌 Workspace Overview
- **Path**: `d:\code\pknu2026\react\03.VITE방식`
- **Tech Stack**: React 19 (v19.2.6), Vite (v8.0.12), React Router DOM v7 (v7.15.1), CSS Modules
- **Purpose**: A comprehensive educational repository structured as sequential React learning projects (`prj01` to `prj06`).

---

## 📂 Project Directory Structure

The workspace contains 6 main subdirectories:

| Directory | Scope / Purpose | Example Range | Key Notes |
| :--- | :--- | :--- | :--- |
| **`prj01`** | Basic Vite & React Starter | Starter | Initial setup and entry files |
| **`prj02`** | Intermediate Basics | - | Initial component structures |
| **`prj03`** | Basic Component Styling | - | CSS styling and imports |
| **`prj04`** | State & Hooks Intro | `Ex01` – `Ex07` | Intro to `useState`, `useEffect`, basic forms |
| **`prj05`** | Intermediate Hooks & Styling | `Ex08` – `Ex12` | React CSS Modules, advanced handlers |
| **`prj06`** | **Active Project: Advanced Examples** | `Ex13` – `Ex19` | Context API, concurrent features, custom hooks, UX patterns |

---

## 🚀 Active Project: `prj06` Deep Dive

The primary active development is happening in **`prj06`**. Below is a summary of all examples inside `prj06/src/pages`:

### 📋 Example Breakdown & Status

| Page | Concept / Topic | Technical Highlights | Status / Notes |
| :--- | :--- | :--- | :--- |
| **`Ex13.jsx`** | `fetch` & loading states | Cleanup in `useEffect` (clearing `setTimeout`), loading spinner asset import | Completed |
| **`Ex14.jsx`** | Render Optimization with `useMemo` | Preventing heavy computations (`lag()` loop) when unrelated state changes | Completed |
| **`Ex15.jsx`** | Mouse pointer tracking | Absolute positioning following mouse coordinates via `onPointerMove` | Completed |
| **`Ex15a.jsx`**| Cursor tracking optimization | Attempt to throttle re-renders using `useRef` + `requestAnimationFrame` | Completed (Experimental) |
| **`Ex16.jsx`** | **Real-time calculations & useReducer** | Intended for real-time calculations using imported data and reducer state | **⚠️ Incomplete / In-Progress** (Needs setup) |
| **`Ex17.jsx`** | Global State with `useContext` | Theme switching, profile editing, custom `useLocalStorage` hook, decoupled rendering | Completed (Excellent Pattern) |
| **`Ex18.jsx`** | Concurrency with `useTransition` | React 19 transition features, comparing ON/OFF typing latency over 10k items | Completed (Advanced UX) |
| **`Ex19.jsx`** | State Machine & UX Workflow | 4-segment license activation inputs, auto-focus routing using `useRef`, input masking | Completed (Advanced UX) |

---

## 🛠️ Main Setup & Entry Points (`prj06`)

- **`prj06/src/App.jsx`**:
  Defines the top navigation bar with linear gradient styles, active link visual indications, and registers routes for `/ex13` through `/ex19` mapped to respective components.
- **`prj06/src/main.jsx`**:
  Standard entry point importing `App.jsx` and rendering it inside `<BrowserRouter>`.
- **`prj06/package.json`**:
  Defines dependencies like `react` and `react-dom` (`^19.2.6`), and `react-router-dom` (`^7.15.1`).

---

## 💡 Guidelines for Agents/Developers

1. **Developing `Ex16.jsx`**:
   - `Ex16.jsx` is currently a skeletal component and needs implementation of `useReducer` and real-time operations after data import.
   - Design aesthetics should follow high-end premium standards (elegant layout, harmonious HSL/dark mode colors, responsive tables).
2. **Styling Paradigm**:
   - Use **CSS Modules** (`[Filename].module.css`) for component-specific styles to prevent class collisions, aligning with the repository pattern in `Ex17`, `Ex18`, and `Ex19`.
3. **Running the Project**:
   - Ensure you are working inside the `prj06` directory (`cd d:\code\pknu2026\react\03.VITE방식\prj06`).
   - Run `npm run dev` to start the local Vite development server.
