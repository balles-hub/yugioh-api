import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve a pasta de vídeos
app.use("/videos", express.static(path.join(__dirname, "videos")));

// Lista de episódios com os nomes atuais dos arquivos (com .mp4.mp4)
const episodios = [
  { id: 1, titulo: "Yu-Gi-Oh! Episódio 1", descricao: "O início do duelo!", url: "/videos/01.mp4.mp4" },
  { id: 2, titulo: "Yu-Gi-Oh! Episódio 2", descricao: "Continua!", url: "/videos/02.mp4.mp4" },
  { id: 3, titulo: "Yu-Gi-Oh! Episódio 3", descricao: "Terceiro duelo!", url: "/videos/03.mp4.mp4" },
  { id: 4, titulo: "Yu-Gi-Oh! Episódio 4", descricao: "Mais ação!", url: "/videos/04.mp4.mp4" },
  { id: 5, titulo: "Yu-Gi-Oh! Episódio 5", descricao: "Duelo épico!", url: "/videos/05.mp4.mp4" },
  { id: 6, titulo: "Yu-Gi-Oh! Episódio 6", descricao: "Novos desafios!", url: "/videos/06.mp4.mp4" },
  { id: 7, titulo: "Yu-Gi-Oh! Episódio 7", descricao: "Tensão máxima!", url: "/videos/07.mp4.mp4" },
  { id: 8, titulo: "Yu-Gi-Oh! Episódio 8", descricao: "Duelo decisivo!", url: "/videos/08.mp4.mp4" },
  { id: 9, titulo: "Yu-Gi-Oh! Episódio 9", descricao: "Clímax!", url: "/videos/09.mp4.mp4" },
  { id: 10, titulo: "Yu-Gi-Oh! Episódio 10", descricao: "Conclusão do arco!", url: "/videos/10.mp4.mp4" },
];

// Rota da API
app.get("/api/episodios", (req, res) => {
  res.json(episodios);
});

app.get("/api/episodios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const episodio = episodios.find(e => e.id === id);
  if (!episodio) return res.status(404).json({ erro: "Episódio não encontrado" });
  res.json(episodio);
});

app.listen(PORT, () => console.log(`🔥 API rodando em http://localhost:${PORT}`));
