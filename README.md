# HoraEmbedded Portfolio — Complete Beginner Guide

This is your professional engineering portfolio. Below is everything you need — step by step.

---

## QUICK START

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Deploy to Vercel
vercel --prod
```

---

## FILE STRUCTURE

```
horaembedded-portfolio/
├── app/
│   ├── layout.tsx       ← HTML head, meta tags, fonts
│   ├── page.tsx         ← Main page (all sections assembled)
│   └── globals.css      ← Colors, fonts, global styles
├── components/          ← One file per section (edit UI here)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── EngineeringLab.tsx
│   ├── FutureVision.tsx
│   ├── Blog.tsx
│   ├── Timeline.tsx
│   ├── PersonalTouch.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/                ← YOUR CONTENT LIVES HERE (edit these!)
│   ├── projects.ts      ← Add/edit your projects
│   ├── skills.ts        ← Add/edit your skills
│   ├── timeline.ts      ← Add timeline entries
│   └── blog.ts          ← Write blog articles
└── public/
    └── cv-horacia-azonhoumon.pdf  ← Put your CV here
```

---

## HOW TO ADD A PROJECT

Open `data/projects.ts` and add a new object:

```typescript
{
  id: 7,
  title: "Your Project Title",
  category: "Automation",  // Automation | Embedded | IoT | AI | Electronics
  problem: "What problem did you solve?",
  solution: "How did you solve it?",
  technologies: ["Python", "Arduino"],
  github: "https://github.com/yourusername/project",
  status: "Completed",     // Completed | In Progress | Concept
  year: "2025",
  highlights: ["Key result 1", "Key result 2"],
},
```

## HOW TO ADD A SKILL

Open `data/skills.ts` and add to the `skills` array:

```typescript
{ name: "Siemens TIA Portal", level: 65, category: "Hardware" },
```
Level = 1 to 100. Category = Programming | Hardware | Tools | Concepts

## HOW TO WRITE A BLOG ARTICLE

Open `data/blog.ts` and add a new post:

```typescript
{
  id: 4,
  title: "Your Article Title",
  summary: "Short preview shown on the card.",
  date: "June 2025",
  readTime: "5 min read",
  category: "Learning",   // Learning | Project | Industry | Reflection
  tags: ["Tag1", "Tag2"],
  content: `
## Heading

Write your article in plain text here.
Use ## for headings.
Use **bold** for emphasis.
  `,
},
```

## HOW TO CHANGE YOUR EMAIL / LINKS

- Hero buttons: `components/Hero.tsx` → find the email/github/linkedin links
- Contact section: `components/Contact.tsx` → update the `socials` array
- Footer: `components/Footer.tsx` → update the links

## HOW TO CHANGE COLORS

Open `app/globals.css`:
```css
.dark {
  --accent-amber: #F5A623;  /* Main accent color (dark mode) */
  --accent-cyan: #00CFEE;   /* Secondary color (dark mode) */
}
:root {
  --accent-amber: #D97706;  /* Main accent color (light mode) */
}
```

## HOW TO ADD YOUR CV

Put your PDF file in the `public/` folder.
Name it: `cv-horacia-azonhoumon.pdf`
Or update the filename in `components/Hero.tsx` — find `href="/cv-horacia-azonhoumon.pdf"`

---

## DEPLOY TO VERCEL (Free, 60 seconds)

```bash
# Install Vercel CLI once
npm install -g vercel

# Deploy
vercel

# Future updates
vercel --prod
```

## DEPLOY TO NETLIFY (Free, drag & drop)

1. Run: `npm run build`
2. Go to: https://netlify.com
3. Drag the `out/` folder onto the Netlify dashboard
4. Done!

## CONNECT CUSTOM DOMAIN

After deploying:
1. Buy a domain (e.g., `horaembedded.dev`)
2. Go to Vercel/Netlify dashboard → Custom Domains
3. Follow the DNS instructions

---

## MAKE CONTACT FORM SEND REAL EMAILS

1. Create free account at: https://formspree.io
2. Create a new form → copy your form ID
3. Open `components/Contact.tsx`
4. In the `handleSubmit` function, replace the simulation with:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (response.ok) setStatus('sent');
```

---

## COMMON PROBLEMS

| Problem | Solution |
|---------|----------|
| `npm run dev` fails | Run `npm install` first |
| Changes not showing | Hard refresh: Ctrl+Shift+R |
| Build TypeScript error | Check data files for missing required fields |
| Dark mode not working | Run `npm install next-themes` |

---

*HoraEmbedded — Portfolio of Horacia Azonhoumon*
*ENSA Tangier, Morocco · 2025*
