import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...")
});

// function buscarPostPorId(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id)
//   })
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorId(req.params.id)
//   res.status(200).json(posts[index])
// })
