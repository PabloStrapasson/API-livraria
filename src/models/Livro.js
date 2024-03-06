import mongoose from "mongoose"

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {type: String, required: [true, "O titulo do livro é obrigatório"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O autor(a) do livro é obrigatório"]},
    editora: {type: String, required: [true, "A editora do livro é obrigatório"]},
    numeroPaginas: {type: Number}
  },
  {
    versionKey: false
  }
)

const livros= mongoose.model("livros", livroSchema)

export default livros