import mongoose from "mongoose"

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {type: String, required: [true, "O titulo do livro é obrigatório"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O autor(a) do livro é obrigatório"]},
    editora: {type: String, required: [true, "A editora do livro é obrigatório"], enum: { values: ["Classicos", "Alura"], message: "A editora {VALUE} não é um valor permitido"}},
    numeroPaginas: {
      type: Number, 
      validate: { 
        validator: (valor) => { return valor >= 10 && valor <= 5000 },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fonecido {VALUE}"
      }
    }
  },
  {
    versionKey: false
  }
)

const livros= mongoose.model("livros", livroSchema)

export default livros