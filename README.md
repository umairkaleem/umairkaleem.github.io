# Umair Kaleem — Portfolio Website

A personal portfolio site with a glassmorphism UI, a community blog with an approval workflow, and a private admin dashboard for managing posts and files — built and deployed on GitHub Pages with a Supabase backend.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**Live site:** [umairkaleem.github.io](https://umairkaleem.github.io)

---

## About

This is my personal site — built to showcase my projects, share writing, and act as a private workspace for my own files. Rather than a static one-pager, it's a small full-stack application: anyone can browse my work and read the blog, visitors can submit their own blog posts for review, and I have a private admin dashboard to approve content and store assignments or documents securely.

---

## Features

### Public site
- Glassmorphism UI with an ambient gradient background and frosted glass panels throughout
- About section with skills, stats, and background
- Full project showcase pulling in all of my repositories — machine learning, full-stack web apps, desktop applications, and algorithm work
- Community blog where any visitor can read approved posts

### Blog with approval workflow
- Anyone can submit a post through a simple form (name, email, title, content)
- Submissions are stored as **pending** and are not publicly visible until reviewed
- I review, approve, or reject each submission from the admin dashboard
- Approved posts appear instantly on the public blog page

### Private admin dashboard
- Protected by Supabase authentication — login restricted to my account only
- Tabs for Pending / Approved / Rejected posts, with one-click approve, reject, or delete
- A personal file vault for storing assignments, notes, and documents privately, with drag-and-drop upload, download, and delete

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, vanilla JavaScript |
| Hosting | GitHub Pages |
| Backend | [Supabase](https://supabase.com) (PostgreSQL database, Auth, Storage) |
| Fonts | Space Grotesk, DM Mono |
| Icons | Font Awesome |

---

## Architecture

```
Visitor:
Browse Site → Read Blog → Submit Post (status: pending) → Awaiting Review

Admin (me):
Login (Supabase Auth) → Dashboard → Approve/Reject Posts → Manage Private Files
```

The site is fully static (no server required) and talks directly to Supabase from the browser using the JavaScript client library. Row Level Security policies on the database and storage bucket control exactly who can read, write, or delete each piece of data — public visitors can only submit posts and read approved ones, while only my authenticated admin account can manage content and access the file vault.

---

## Project Structure

```
umairkaleem.github.io/
│
├── index.html              # Home — hero, about, projects, blog teaser, contact
├── blog.html                # Public blog — list of approved posts + submission form
├── admin.html                # Admin dashboard — login, post moderation, file vault
├── style.css                  # Shared stylesheet for all pages
├── supabase-config.js   # Supabase client initialization
├── umair.jpeg               # Profile photo
└── Umair-Kaleem-Resume.pdf  # Downloadable resume
```

---

## Running Locally

This is a static site with no build step.

```bash
# Clone the repository
git clone https://github.com/umairkaleem/umairkaleem.github.io.git

# Open index.html directly in a browser, or serve it locally
cd umairkaleem.github.io
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

> Note: the blog and admin features require a connected Supabase project (database tables, auth, and storage bucket already configured) to function.

---

## Author

**Umair Kaleem**
BSAI Student | Sir Syed CASE Institute of Technology
[GitHub](https://github.com/umairkaleem) · [LinkedIn](https://www.linkedin.com/in/umair-kaleem-918386326) · [Kaggle](https://www.kaggle.com/umairkaleem)

---

## License

Open-source and free to reference for learning purposes.

---

> ⭐ If you found this useful or interesting, consider giving it a star!
