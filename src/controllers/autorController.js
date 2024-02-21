import { autor } from "../models/Autor.js"

export default class AutorController {

    static async listarAutores(req, res){
        try{
            const lista_autores = await autor.find({})
            res.status(200).json(lista_autores)
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao buscar autores!`})
        }
        
    }

    static async listarAutorId(req, res){
        try{
            const id = req.params.id
            const autor_encontrado = await autor.findById(id)
            res.status(200).json(autor_encontrado)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao buscar autor!`})
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novo_autor = await autor.create(req.body)
            res.status(201).json({ message: "Autor cadastrado com sucesso!", autor: novo_autor })
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor!`})
        }
    }

    static async atualizarAutorId(req, res){
        try{
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Autor atualizado com sucesso!"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do autor!`})
        }
    }

    static async deletarAutor(req, res){
        try{
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json({message: "Autor deletado copm sucesso!"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao deletar autor`})
        }
    }

}