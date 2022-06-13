import { Animal } from "./Animal";

export class Canguru extends Animal{
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  locomover(): void {
    console.log("O canguru se locomove saltando");
  }

  comunicar(): void {
    console.log("O canguru se comunica com o olhar")
  }

}

