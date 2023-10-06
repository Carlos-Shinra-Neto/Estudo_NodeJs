import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import router from "./routes/livrosRoutes.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de Conexão'));
db.once("open", () => {
    console.log(`conexão com o banco de dados feita com sucesso`);
})

const app = express();

// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis"},
//     {id: 2, "titulo": "O hobbit"}
// ]

app.use(express.json());

routes(app);

app.get('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    res.json(livros[index])
})  

app.put('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscarLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
  })

function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app