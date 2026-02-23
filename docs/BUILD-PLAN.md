# Dark Mode Toggle — Build Plan

## Project Summary

- **8 HTML pages**, 1 shared `styles.css`, no external JS files
- Already uses **CSS custom properties** (variables) for colors
- Minimal JS (just a `toggleMenu()` function inline on each page)
- Green + gold color scheme with white/off-white backgrounds

---

## Steps

### Step 1: Add dark mode CSS variables
**What:** In `styles.css`, define a second set of CSS variables under a `[data-theme="dark"]` selector (dark backgrounds, light text, adjusted greens/golds).
**Test:** No visible change yet — just verify the site still looks normal.

### Step 2: Add the toggle button to one page
**What:** Add a dark mode toggle button (sun/moon icon) to the header in `index.html` only.
**Test:** You see the button in the header. It doesn't do anything yet — just confirm placement and styling look right.

### Step 3: Write the toggle JavaScript
**What:** Create a small `darkmode.js` file that toggles `data-theme="dark"` on `<html>` when the button is clicked.
**Test:** Click the button on `index.html` — colors should flip between light and dark. Click again to go back.

### Step 4: Persist the choice with localStorage
**What:** Update `darkmode.js` to save the user's preference in `localStorage` and apply it on page load.
**Test:** Toggle to dark mode, refresh the page — it should stay dark. Toggle back, refresh — stays light.

### Step 5: Add the toggle button to all other pages
**What:** Copy the same toggle button markup into the header of the remaining 7 HTML files and link `darkmode.js`.
**Test:** Navigate between pages — dark mode preference carries across all pages without flickering.

### Step 6: Fine-tune dark mode styles
**What:** Review each page in dark mode and fix anything that looks off — images with white edges, form inputs, card shadows, hover states, the footer, etc.
**Test:** Visit every page in dark mode and confirm nothing looks broken or unreadable.
