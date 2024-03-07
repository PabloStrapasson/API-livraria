import RequisicaoIncorreta from "./../errors/RequisicaoIncorreta.js"

async function paginar(req, res, next){
  try {
    let { limite = 5, pagina = 1, ordenarPor = "_id:-1"} = req.query
    let [ordenar, ordem] = ordenarPor.split(":")
    limite = parseInt(limite)
    pagina = parseInt(pagina)
    ordem = parseInt(ordem)

    // atribuição do método listarLivros na variavel resultado
    const resultado = req.resultado

    if(limite > 0 && pagina > 0){
      const resultadoPaginado = await resultado.find()
        .sort({[ordenar]: ordem})
        .skip((pagina - 1) * limite)
        .limit(limite)
        //.populate("autor")
        .exec()

      res.status(200).send(resultadoPaginado)
    } else {
      next(new RequisicaoIncorreta())
    }

  } catch(erro) {
    next(erro)
  }
}

export default paginar