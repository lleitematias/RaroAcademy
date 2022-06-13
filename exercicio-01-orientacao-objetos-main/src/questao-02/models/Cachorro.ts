import { Animal } from "./Animal";

export class Cachorro extends Animal{
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  locomover(): void {
    console.log("O cachorro se locomove andando ou correndo");
  }

  comunicar(): void {
    console.log("O cachorro se comunica latindo")
  }
}