import NaoEncontrado from "../errors/NaoEncontrado.js"
import {livros} from "../models/index.js"

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate("autor")
        .exec()

      if (livrosResultado !== null){
        res.status(200).send(livrosResultado)
      }else{
        next(new NaoEncontrado("Nenhum livro localizado."))
      }
    } catch (erro) {
      next(erro)
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id

      const livroResultados = await livros.findById(id)
        .populate("autor", "nome")
        .exec()

      if (livroResultados !== null){
        res.status(200).send(livroResultados)
      }else{
        next(new NaoEncontrado("Id do Livro não localizado."))
      }
    } catch (erro) {
      next(erro)
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body)

      const livroResultado = await livro.save()

      res.status(201).send(livroResultado.toJSON())
    } catch (erro) {
      next(erro)
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id
      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body})

      if (livroResultado !== null) {
        res.status(200).send({message: "Autor atualizado com sucesso"})
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."))
      }

      res.status(200).send({message: "Livro atualizado com sucesso"})
    } catch (erro) {
      next(erro)
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id
      const livroResultado = await livros.findByIdAndDelete(id)

      if (livroResultado !== null) {
        res.status(200).send({message: "Autor atualizado com sucesso"})
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."))
      }

      res.status(200).send({message: "Livro removido com sucesso"})
    } catch (erro) {
      next(erro)
    }
  }

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora

      const livrosResultado = await livros.find({"editora": editora})
        .populate("autor", "nome")
        .exec()

      if (livrosResultado !== null){
        res.status(200).send(livrosResultado)
      }else{
        res.status(404).send({message: "Livro não localizado."})
      }
    } catch (erro) {
      next(erro)
    }
  }



}

export default LivroController