import { Contato } from "./Contato";

export class Agenda {
  private static nome: string;
  private contatos: Contato[];

  constructor(nome: string, contatos: string) {
    Agenda.nome = nome;
    this.contatos = [];
  }

  adicionarContato(contato: Contato): void {
    let aux: boolean = false
    for(let i = 0; i < this.contatos.length;i++){
      if(contato.getTelefone() === this.contatos[i].telefone){
        aux = true;
      }
    }
    if(aux){
      console.log("Contato já existe")
    }else{
      this.contatos.push(contato)
    }
  }

  excluirContato(telefone: string): void {
    let aux: boolean = false
    for(let i = 0; i < this.contatos.length;i++){
      if(this.contatos[i].getTelefone() === telefone){
        this.contatos.splice(i++, 1)
      }
    }
  }
  recuperarContatos(): Contato[] {
    return this.contatos
  }
}

