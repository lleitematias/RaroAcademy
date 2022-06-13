import { Animal } from "./Animal";

export class Tubarao extends Animal{
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  locomover(): void {
    console.log("O tubarao se locomove nadando");
  }

  comunicar(): void {
    console.log("O tubarao se comunica com linguagem corporal")
  }
}