import NaoEncontrado from "../errors/NaoEncontrado.js"

export default function handler404(req, res, next){
  const erro404 = new NaoEncontrado()
  next(erro404)
}