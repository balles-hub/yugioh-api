import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configuração de intervalos de temporadas
// Exemplo: 1-40 → temporada 1, 41-80 → temporada 2, etc.
const temporadasConfig = [
  { temporada: 1, min: 1, max: 40 },
  { temporada: 2, min: 41, max: 80 },
  { temporada: 3, min: 81, max: 120 },
  { temporada: 4, min: 121, max: 160 },
  { temporada: 5, min: 161, max: 200 }
];

// Função para determinar a temporada com base no número do vídeo
function getTemporada(numero) {
  const temp = temporadasConfig.find(t => numero >= t.min && numero <= t.max);
  return temp ? temp.temporada : null;
}

// Rota para listar vídeos e organizar por temporada
app.get("/api/episodios", async (req, res) => {
  try {
    const videos = await cloudinary.api.resources({
      type: "upload",
      resource_type: "video",
      max_results: 500 // ajusta conforme a quantidade de vídeos
    });

    const episodios = videos.resources.map(v => {
      // Extrair número do vídeo do nome do arquivo
      // Ex: "01.mp4" ou "143_ueqpfq.mp4" → pega o 01 ou 143
      const match = v.public_id.match(/^(\d+)/);
      const numero = match ? parseInt(match[1]) : null;

      return {
        titulo: `Episódio ${numero}`,
        url: v.secure_url,
        numero,
        temporada: numero ? getTemporada(numero) : null
      };
    })
    .filter(e => e.temporada !== null) // remove vídeos sem temporada definida
    .sort((a, b) => a.numero - b.numero); // ordena pelo número

    res.json(episodios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
