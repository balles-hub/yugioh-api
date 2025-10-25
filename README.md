Yu-Gi-Oh API & Streaming

🎴 Projeto de streaming de episódios de Yu-Gi-Oh usando Node.js, Express e Cloudinary.

💻 Tecnologias

Node.js

Express

Cloudinary (armazenamento de vídeos)

Dotenv (variáveis de ambiente)

CORS

HTML, CSS e JavaScript (front-end simples)

⚙️ Funcionalidades

Listar episódios de Yu-Gi-Oh por temporada.

Assistir vídeos via modal no navegador.

Ordenação automática por número de episódio.

Upload de vídeos via Cloudinary (API já preparada para puxar todos os uploads).

📁 Estrutura do Projeto
yugioh-api/
│
├─ src/
│  └─ server.js       # Servidor Node + API
│
├─ .env               # Variáveis de ambiente (não versionar)
├─ package.json
├─ package-lock.json
└─ index.html         # Front-end para assistir episódios
