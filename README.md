# FastCare

Site educativo sobre as **7 etapas da escala FAST** (Functional Assessment
Staging Tool, Reisberg et al.) para cuidadores e familiares de idosos com
suspeita de demência.

Stack: **Next.js + React + TypeScript** (App Router).

## Rodar local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Deploy

O projeto está configurado para Next.js na Vercel e no Netlify. Defina
`NEXT_PUBLIC_SITE_URL` com a URL pública para canonical, sitemap e Open Graph.

O formulário de feedback não armazena dados por padrão. Para habilitar o envio
à fila de aprovação, defina `FEEDBACK_MODERATION_WEBHOOK` com um endpoint seguro
que receba os itens com status `pending`. A publicação deve acontecer apenas no
sistema de moderação, após autenticação e revisão do administrador.

## Estrutura

```
fastcare/
├── app/               # rotas, SEO e endpoint de feedback
├── package.json
├── next.config.mjs
├── tsconfig.json
├── vercel.json
├── netlify.toml
└── src/
    ├── App.tsx
    ├── styles.css
    ├── data.ts          # 7 etapas FAST + sintomas
    ├── hooks.ts         # reveal on scroll
    └── components/
        ├── Header.tsx  Hero.tsx  Sobre.tsx  Etapas.tsx
        ├── Autoteste.tsx  Alertas.tsx  Footer.tsx
        ├── Logo.tsx  NeuroCanvas.tsx  Tilt.tsx
```

## Aviso

Conteúdo **educativo e informativo**. Não substitui avaliação, diagnóstico ou
tratamento por profissionais de saúde.

Referência: Reisberg B. Functional Assessment Staging (FAST) —
https://pubmed.ncbi.nlm.nih.gov/1504288/
