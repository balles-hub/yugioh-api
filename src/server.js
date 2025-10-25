import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const episodios = [
  { "id": 1,  "titulo": "Episódio 1",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314174/01.mp4_hqck2m.mp4" },
  { "id": 2,  "titulo": "Episódio 2",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314168/02.mp4_b7hyxc.mp4" },
  { "id": 3,  "titulo": "Episódio 3",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314217/03.mp4_irtq7m.mp4" },
  { "id": 4,  "titulo": "Episódio 4",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314630/04.mp4_koyhni.mp4" },
  { "id": 5,  "titulo": "Episódio 5",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314633/05.mp4_ccvlqh.mp4" },
  { "id": 6,  "titulo": "Episódio 6",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314335/06.mp4_j8c7st.mp4" },
  { "id": 7,  "titulo": "Episódio 7",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314630/07.mp4_lkx2cz.mp4" },
  { "id": 8,  "titulo": "Episódio 8",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761399159/08_me3eyg.mp4" },
  { "id": 9,  "titulo": "Episódio 9",  "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761341323/09.mp4_pvoqm8.mp4" },
  { "id": 10, "titulo": "Episódio 10", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761314173/10.mp4_tjkrba.mp4" },
  { "id": 11, "titulo": "Episódio 11", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761399724/11_mkyt2q.mp4" },
  { "id": 12, "titulo": "Episódio 12", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761399757/12_da1ukp.mp4" },
  { "id": 13, "titulo": "Episódio 13", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761400481/13_b8oin0.mp4" },
  { "id": 14, "titulo": "Episódio 14", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761400475/14_awswf5.mp4" },
  { "id": 15, "titulo": "Episódio 15", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761401101/15_sy8yko.mp4" },
  { "id": 16, "titulo": "Episódio 16", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761401499/16_p16jun.mp4" },
  { "id": 17, "titulo": "Episódio 17", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761400925/17_ic9cpm.mp4" },
  { "id": 18, "titulo": "Episódio 18", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761401014/18_qwhm9t.mp4" },
  { "id": 19, "titulo": "Episódio 19", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761402863/19_tcmbpf.mp4" },
  { "id": 20, "titulo": "Episódio 20", "url": "https://res.cloudinary.com/dbqhmedpc/video/upload/v1761403753/20_zwvp5s.mp4" }
];



module.exports = episodios;


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
