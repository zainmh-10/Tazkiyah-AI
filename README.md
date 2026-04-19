# Tazkiyah AI

Islamic web app focused on Qur’an understanding, Tajweed, adab, and structured **Tazkiyah Coach** guidance (not fatwas).

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- No authentication or database (static content)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing |
| `/dashboard` | Today’s ayah + quick actions |
| `/coach` | Tazkiyah Coach (topics + guidance panel) |
| `/tajweed` | Tajweed rules list |
| `/tajweed/[rule]` | Single rule (ikhfa, idgham, iqlab, izhar) |
| `/adab` | Adab library by category |

## Content

- `data/ayahs.json` — rotating daily ayah
- `data/tajweed.json` — rules
- `data/adab.json` — adab entries
- `data/tazkiyah.ts` — coach topics