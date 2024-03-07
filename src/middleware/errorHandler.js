import mongoose from "mongoose"
import ErroBase from "../errors/ErroBase.js"
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js"
import ErroValidacao from "../errors/ErroValidacao.js"

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
  console.log(erro)

  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarRerposta(res)

  } else if(erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarRerposta(res)

  } else if(erro instanceof ErroBase) {
    erro.enviarRerposta(res)
    
  } else {
    new ErroBase().enviarRerposta(res)
  }
}

export default errorHandler