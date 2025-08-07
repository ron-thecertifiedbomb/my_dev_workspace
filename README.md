# 🛠️ My Dev Workspace

This repository contains reusable templates for kickstarting projects quickly.

## 📁 Templates Included

- `expo-bare-template` – Expo Bare Workflow with TypeScript
- `expo-monorepo-template` – Expo Monorepo Setup
- `next-js-template` – Next.js Project with TypeScript
- `react-template` – Vite + React + TypeScript (No framework)

---

## 📦 How to Download Only a Specific Template

Use [`degit`](https://github.com/Rich-Harris/degit) to download just one template directory.

### 🧪 Example: Download the `expo-bare-template`

```bash
npx degit ron-thecertifiedbomb/my_dev_workspace/expo-bare-template my-expo-app
cd my-expo-app
npm install
npm run android   # or ios/web depending on your setup
⚛️ Example: Download the react-template
bash
Copy
Edit
npx degit ron-thecertifiedbomb/my_dev_workspace/react-template my-react-app
cd my-react-app
npm install
npm run dev