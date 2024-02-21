import livro from "../models/Livro.js"
import { autor } from "../models/Autor.js"

export default class LivroController {

    static async listarLivros(req, res){
        try{
            const lista_livros = await livro.find({})
            res.status(200).json(lista_livros)
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao buscar livros!`})
        }
        
    }

    static async listarLivroId(req, res){
        try{
            const id = req.params.id
            const livro_encontrado = await livro.findById(id)
            res.status(200).json(livro_encontrado)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao buscar livro!`})
        }
    }

    static async listarLivroEditora(req, res){
        const editora = req.query.editora
        try{
            const livros_editora = await livro.find({editora: editora})
            res.status(200).json(livros_editora)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao buscar livro!`})
        }
    }
    
    static async cadastrarLivro(req, res) {
        const novo_livro = req.body

        try {
            const autor_encontrado = await autor.findById(novo_livro.autor)
            const livro_completo = {...novo_livro, autor: {...autor_encontrado._doc}}
            const livro_cadastrado = await livro.create(livro_completo)
            res.status(201).json({ message: "Livro cadastrado com sucesso!", livro: livro_cadastrado })
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro!`})
        }
    }

    static async atualizarLivroId(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Livro atualizado com sucesso!"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do livro!`})
        }
    }

    static async deletarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({message: "Livro deletado copm sucesso!"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao deletar livro`})
        }
    }

}