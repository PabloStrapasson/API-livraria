import mongoose, { mongo } from "mongoose";

const livrosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, requeired: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false })

const livro = mongoose.model("livros", livrosSchema)

export default livro