# Spansiva - Portfolio Website

Site institucional da Spansiva, loja especializada em produtos gamers, computadores, notebooks, impressoras e serviços de manutenção.

## 🚀 Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **Vite** - Build tool e dev server
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI baseados em Radix UI
- **Framer Motion** - Biblioteca de animações
- **React Router** - Roteamento para React
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **bun**

Recomendamos usar [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para gerenciar versões do Node.js.

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd spansiva-portfolio-launch
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
bun install
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run build:dev` - Cria build de desenvolvimento
- `npm run lint` - Executa o linter ESLint
- `npm run preview` - Visualiza o build de produção localmente

## 🏃 Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 📦 Build de Produção

Para criar um build otimizado para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🌐 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte aplicações Vite/React:

- **Vercel** - Recomendado para projetos React
- **Netlify** - Suporte nativo para Vite
- **GitHub Pages** - Com configuração adicional
- **Cloudflare Pages** - Deploy rápido e gratuito

### Deploy na Vercel

1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

## 📁 Estrutura do Projeto

```
spansiva-portfolio-launch/
├── public/          # Arquivos estáticos
├── src/
│   ├── components/ # Componentes React
│   ├── pages/      # Páginas da aplicação
│   ├── hooks/      # Custom hooks
│   ├── lib/        # Utilitários
│   └── main.tsx    # Entry point
├── index.html      # HTML principal
└── package.json    # Dependências
```

## 🎨 Características

- ✨ Design moderno e responsivo
- 🎭 Animações suaves com Framer Motion
- 🌙 Suporte a tema escuro
- 📱 Totalmente responsivo
- ⚡ Performance otimizada
- ♿ Acessibilidade (WCAG)

## 👥 Desenvolvido por

- **Artur Maciel** - [arturmaciel.pages.dev](https://arturmaciel.pages.dev)
- **Ryan Maximus**

## 📄 Licença

Todos os direitos reservados © 2025 Spansiva
