import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaDatabase()

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso!")
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Noje.js")
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros)
});

app.get("/livros/:id", (req,res) => {
    const index = searchBook(req.params.id)
    res.status(200).json(livros[index])
});

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("livro adicionado com sucesso!")
});

app.put("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros[index])
});

app.delete("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("livro deletado com sucesso!")
});

export default app;

