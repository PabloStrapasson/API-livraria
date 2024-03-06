export default class ErroBase extends Error {
  constructor(mensagem = "Erro interno do Servidor", status = 500){
    super()
    this.message = mensagem
    this.status = status
  }

  enviarRerposta(res){
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status
    })
  }
}