# AI Coding Assistant

A modern, AI-powered coding assistant built with Next.js and Google Gemini AI. This application helps developers understand, debug, and generate code through an intuitive web interface.

## ✨ Features

- **🔍 Smart Code Analysis** - Get detailed explanations of complex code snippets with AI-powered insights
- **🐝 Intelligent Debugging** - Find and fix bugs quickly with AI-driven debugging suggestions
- **⚡ Code Generation** - Generate code from natural language descriptions in multiple programming languages
- **📜 History Panel** - Track your previous interactions and easily reference past code explanations, debugging sessions, and generated code
- **🎨 Modern UI** - Beautiful, responsive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **AI Integration**: Google Gemini AI (gemini-2.5-flash)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ai-coding-assistant
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your Google Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
ai-coding-assistant/
├── src/
│   ├── app/
│   │   ├── api/              # API routes for AI interactions
│   │   │   ├── explain/      # Code explanation endpoint
│   │   │   ├── debug/        # Code debugging endpoint
│   │   │   └── generate/     # Code generation endpoint
│   │   ├── components/       # React components
│   │   │   ├── CodeExplanation.tsx
│   │   │   ├── CodeDebugging.tsx
│   │   │   ├── CodeGeneration.tsx
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── Header.tsx
│   │   │   └── HistoryPanel.tsx
│   │   ├── data/             # Static data and configurations
│   │   │   ├── examples.ts
│   │   │   ├── features.ts
│   │   │   └── tabs.ts
│   │   ├── types/            # TypeScript type definitions
│   │   │   └── index.ts
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main page component
│   └── ...
├── public/                   # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎯 Usage

### Code Explanation
1. Navigate to the "Explain code" tab
2. Paste or type your code in the input area
3. Click the explain button to get a detailed AI-powered explanation

### Code Debugging
1. Navigate to the "Debug Code" tab
2. Paste the code you want to debug
3. Get AI-driven suggestions for fixing bugs and issues

### Code Generation
1. Navigate to the "Generate Code" tab
2. Describe what code you want to generate in natural language
3. Receive generated code based on your description

All interactions are automatically saved to the history panel for easy reference.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your `GEMINI_API_KEY` to the environment variables
4. Deploy!

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and not licensed for public use.

## 🙏 Acknowledgments

- Powered by [Google Gemini AI](https://ai.google.dev/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
