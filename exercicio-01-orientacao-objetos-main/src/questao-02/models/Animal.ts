import { IAnimal } from "../interfaces/IAniaml";

export abstract class Animal implements IAnimal {
  private readonly nome: string;
  private readonly idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  
  getNome(){
    return this.nome;
  }
  getIdade(){
    return this.idade;
  }

  abstract locomover(): void;
  
}