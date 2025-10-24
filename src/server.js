import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const episodios = [
  { id: 1, titulo: "Yu-Gi-Oh! Episódio 1", descricao: "O início do duelo!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314600/01.mp4" },
  { id: 2, titulo: "Yu-Gi-Oh! Episódio 2", descricao: "Continua!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314610/02.mp4" },
  { id: 3, titulo: "Yu-Gi-Oh! Episódio 3", descricao: "Terceiro duelo!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314620/03.mp4" },
  { id: 4, titulo: "Yu-Gi-Oh! Episódio 4", descricao: "Mais ação!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314630/04.mp4_koyhni.mp4" },
  { id: 5, titulo: "Yu-Gi-Oh! Episódio 5", descricao: "Duelo épico!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314640/05.mp4" },
  { id: 6, titulo: "Yu-Gi-Oh! Episódio 6", descricao: "Novos desafios!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314650/06.mp4" },
  { id: 7, titulo: "Yu-Gi-Oh! Episódio 7", descricao: "Tensão máxima!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314660/07.mp4" },
  { id: 8, titulo: "Yu-Gi-Oh! Episódio 8", descricao: "Duelo decisivo!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314670/08.mp4" },
  { id: 9, titulo: "Yu-Gi-Oh! Episódio 9", descricao: "Clímax!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314680/09.mp4" },
  { id: 10, titulo: "Yu-Gi-Oh! Episódio 10", descricao: "Conclusão do arco!", url: "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314690/10.mp4" },
];

app.get("/", (req, res) => res.send("API do Yu-Gi-Oh está rodando!"));

app.get("/api/episodios", (req, res) => res.json(episodios));

app.get("/api/episodios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const episodio = episodios.find(e => e.id === id);
  if (!episodio) return res.status(404).json({ erro: "Episódio não encontrado" });
  res.json(episodio);
});

app.listen(PORT, () => {
  console.log(`🔥 API rodando na porta ${PORT}`);
  if (process.env.RENDER_EXTERNAL_URL) {
    console.log(`🌐 Acesse sua API em: ${process.env.RENDER_EXTERNAL_URL}`);
  }
});
