import livro from "../models/Livro.js"

export default class LivroController {

    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
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

    static async cadastrarLivro(req, res) {
        try {
            const novo_livro = await livro.create(req.body)
            res.status(201).json({ message: "livro cadastrado com sucesso!", livro: novo_livro })
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