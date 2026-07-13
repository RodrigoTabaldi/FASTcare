# FastCare

Site educativo sobre as **7 etapas da escala FAST** (Functional Assessment
Staging Tool, Reisberg et al.) para cuidadores e familiares de idosos com
suspeita de demência.

Stack: **React 18 + TypeScript + Vite**. Sem backend — todo o conteúdo é
estático. Build gera uma pasta `dist/` pronta para qualquer host estático.

## Rodar local

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de produção

```bash
npm run build    # gera dist/
npm run preview  # serve a build localmente
```

## Deploy

Projeto 100% estático. Escolha um:

- **Vercel** — importe o repo. Detecta Vite via `vercel.json` (build `npm run build`, output `dist`).
- **Netlify** — `netlify.toml` já configura build `npm run build` e publish `dist`.
- **GitHub Pages / S3 / qualquer estático** — rode `npm run build` e suba a pasta `dist/`.

## Estrutura

```
fastcare/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vercel.json
├── netlify.toml
└── src/
    ├── main.tsx
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
