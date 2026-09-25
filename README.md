# Tinnova — Site Institucional

Site institucional da Tinnova, construído com [Astro](https://astro.build). O projeto nasceu de uma iniciativa da equipe de Marketing para renovar a presença digital da empresa: um novo layout (a partir do design em Figma), páginas dedicadas para cada linha de solução e uma base técnica mais fácil de manter e evoluir ao longo do tempo.

## Sobre o projeto

O site apresenta a Tinnova, suas soluções de consultoria e desenvolvimento de tecnologia, cases de clientes e um canal de contato comercial. É um site estático — sem backend próprio — pensado para ser rápido, simples de hospedar e fácil de atualizar por quem cuida do conteúdo institucional.

Principais seções:

- **Home** (`/`) — apresentação da empresa, pilares de confiança, cases e formulário de contato.
- **Soluções** (`/solucoes/<slug>/`) — uma página por linha de serviço (Consultoria de TI, Outsourcing, POC/MVP, Design de Produto, Serviços de TI Gerenciados), geradas a partir de arquivos de conteúdo (veja [Como adicionar/editar uma solução](#como-adicionareditar-uma-solução)).

## Tecnologias utilizadas

- **[Astro 5](https://astro.build)** — framework de build para sites estáticos/multi-página. Todo o site é renderizado em HTML no build, sem framework de UI (React/Vue) no cliente.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — gera o `sitemap-index.xml` automaticamente a cada build, sempre refletindo as páginas reais do site.
- **Content Collections do Astro** (`astro:content`) — as páginas de solução são geradas a partir de arquivos YAML em `src/content/solucoes/`, validados por um schema (`src/content.config.ts`).
- **CSS puro** — sem framework de CSS (Tailwind, etc.). Estilos globais compartilhados em `src/styles/base.css`, estilos específicos de cada seção dentro dos próprios componentes/layouts.
- **JavaScript vanilla** — scripts de interação (menu mobile, dropdown de navegação, envio do formulário) sem dependências externas.
- **[Web3Forms](https://web3forms.com/)** — serviço externo usado para processar o envio do formulário de contato sem precisar de backend próprio.
- **Google Tag Manager** — instrumentação de analytics.

## Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (nav, footer, seções da home, SEO, GTM, formulário)
├── consts.ts         # IDs e textos centralizados (GTM, WhatsApp, e-mail, redes sociais, dados da empresa)
├── content.config.ts # Schema da Content Collection "solucoes"
├── content/
│   └── solucoes/     # Um arquivo .yaml por página de solução (dados de conteúdo)
├── layouts/
│   └── SolutionLayout.astro  # Layout compartilhado pelas páginas de solução
├── pages/
│   ├── index.astro           # Home
│   └── solucoes/[slug].astro # Template dinâmico que renderiza cada solução da Content Collection
└── styles/
    └── base.css       # CSS global compartilhado (variáveis, navbar, footer, formulário, menu mobile)
public/                # Assets estáticos (imagens, logos, fontes, robots.txt)
```

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (instalado junto com o Node.js)

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Abre o site em `http://localhost:4321` com hot-reload a cada alteração de arquivo.

### Build de produção

```bash
npm run build
```

Gera o site estático otimizado na pasta `dist/`.

### Testar o build de produção localmente

```bash
npm run preview
```

Serve o conteúdo de `dist/` localmente, para validar o resultado final antes de publicar.

## Como adicionar/editar uma solução

As páginas em `/solucoes/` não são arquivos `.astro` individuais — são geradas a partir de dados. Para editar uma solução existente, basta alterar o arquivo correspondente em `src/content/solucoes/<slug>.yaml`. Para criar uma nova solução:

1. Criar um novo arquivo `src/content/solucoes/<novo-slug>.yaml` seguindo a mesma estrutura dos existentes (título, textos do hero, cenário, benefícios, etc.).
2. Adicionar os links de navegação em `src/components/SiteNav.astro` e `src/components/SiteFooter.astro`.
3. Rodar `npm run build` (ou `npm run dev`) — a nova página `/solucoes/<novo-slug>/` é gerada automaticamente, com sitemap e SEO (Open Graph, JSON-LD) já incluídos.

## Deploy

O resultado de `npm run build` (pasta `dist/`) é um conjunto de arquivos estáticos e pode ser publicado em qualquer serviço de hospedagem estática (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, etc.).
