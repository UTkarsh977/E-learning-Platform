# E-learning Platform

COMPANY - CODTECH IT SOLUTIONS

NAME: UTKARSH KHANDELWAL

INTERN ID: CTIS7615

DOMAIN: FRONTEND WEB DEVELOPMENT

DURATION: 8 WEEKS

MENTOR: NEELA SANTOSH


E-learning Platform is a responsive, static learning dashboard built with HTML, CSS, and JavaScript. It presents a complete student experience for browsing courses, tracking progress, watching tutorial videos, and accessing protected lessons through a lightweight login and signup flow. The project is designed as a clean frontend prototype that can run directly in a browser without installing packages, starting a server, or connecting to a database.

## Overview

The website is organized around a student who is following a frontend certificate track. The dashboard introduces the current learning module, active courses, completed lessons, weekly progress, recommended courses, and a daily agenda. The course catalog contains realistic course data with categories, difficulty levels, lesson counts, durations, instructor names, completion percentages, preview images, and direct course actions. The progress page summarizes completion across every course, while the lesson page loads tutorial videos based on the course selected by the learner.

## Main Features

- Responsive dashboard with learning metrics, current module details, recommended courses, and agenda items.
- Course catalog with search and difficulty filters for beginner, intermediate, and advanced courses.
- Real tutorial video playlists for every course using YouTube embeds.
- Dynamic lesson player that reads the selected course from the URL and updates the video, playlist, title, category, and notes.
- Progress tracking page with an overall completion ring and per-course progress bars.
- Login and signup pages for controlled course access.
- Local session behavior using `localStorage` so users can sign up, log in, sign out, and return to the selected course.
- Mobile-friendly layout across dashboard, catalog, video player, progress view, and authentication screens.

## Pages

`index.html` is the dashboard and home page. It gives a quick snapshot of the learner's activity, shows the current module, and displays recommended next courses.

`courses.html` is the course catalog. Courses are rendered from JavaScript data, so the cards stay consistent across the dashboard, catalog, and progress page. Learners can search by course title, instructor, category, or difficulty.

`lesson.html` is the video lesson page. When a learner starts a course, the page receives a `course` query parameter, finds the matching course, and loads the correct playlist. If no course is provided, it defaults to the first course.

`progress.html` shows learning momentum with an overall completion summary and detailed progress for every course.

`login.html` and `signup.html` provide the access flow. Course links send unauthenticated users to login first, then redirect them back to the lesson they wanted to open.

## Tech Stack

`Frontend`
`HTML5`
`CSS3`
`JavaScript (ES6)`

## Features
`Dynamic Course Rendering`
`Search & Filtering`
`Video Lesson System`
`Progress Tracking`
`Authentication Flow`
`Query Parameter Routing`

## Course Content

The current catalog includes practical frontend and product-learning topics: HTML, CSS, responsive layouts, JavaScript fundamentals, React component systems, accessible product design, learning analytics dashboards, and advanced CSS architecture. Each course includes multiple tutorial video entries with providers and YouTube video IDs. The lesson player builds embed URLs automatically and supports video start times for specific sections.

## Authentication Behavior

This project uses frontend-only authentication for demonstration. Signup stores a user's name, email, and password in browser `localStorage`, while login checks those saved values and creates a local session. This is useful for a UI prototype, portfolio project, or classroom demo, but it is not secure production authentication. A real deployment should replace it with a backend, password hashing, sessions or tokens, validation, and server-side authorization.

## Responsive Design

The interface uses CSS Grid, Flexbox, stable media aspect ratios, and breakpoint-specific layout changes. The sidebar becomes a top navigation area on smaller screens, course grids reduce from three columns to two and then one, the video player stacks above the playlist on mobile, and form controls expand to full width where needed. The design avoids layout shifts by giving cards, images, buttons, and progress elements predictable dimensions.

## How to Run

Open `index.html` directly in a browser. No build step is required. Because the project uses external YouTube embeds and remote images, an internet connection is recommended for the full experience. If the videos or images do not appear, check the browser's network access or any content-blocking extensions.

## Project Structure

The app is intentionally simple. HTML files define the main pages, `styles.css` controls layout and visual design, and `script.js` stores course data, renders dynamic sections, handles filters, manages the lesson player, and controls login/signup behavior.

Screenshots-

<img width="722" height="657" alt="image" src="https://github.com/user-attachments/assets/f791f74c-9f5a-42d4-9336-ce94acee4e19" />
<img width="721" height="714" alt="image" src="https://github.com/user-attachments/assets/63ad8ad4-bc26-47f9-8995-6299c7fc98c6" />
<img width="722" height="711" alt="image" src="https://github.com/user-attachments/assets/47c26e3e-a44e-4f09-a3ca-b483c24d1c3c" />
<img width="723" height="706" alt="image" src="https://github.com/user-attachments/assets/c6e5337d-28b5-4a4f-8f3e-895f030c63d1" />




## Future Improvements

Good next steps would include a real backend, persistent user accounts, saved course completion, quiz pages, certificates, instructor dashboards, comments, bookmarks, and deployment through GitHub Pages or another static hosting service.
