export class Contato {
  readonly nome: string
  readonly telefone: string

  constructor(nome: string, telefone: string) {
    this.nome = nome,
    this.telefone = telefone
  }

  getNome(){
    return this.nome
  }

  getTelefone(){
    return this.telefone
  }
}
