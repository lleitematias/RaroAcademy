import { IFabricaObjetos } from "../interfaces/IFabricaObjetos";

export class FabricaObjetos<T> implements IFabricaObjetos<T>{
  
  objetos: T[];
  constructor(objetos: T[]) {
    this.objetos = []
  }
  criarObjeto(objeto: T): void {
    this.objetos.push(objeto);
  }
  listarObjetos(): T[] {
    return this.objetos
  }
}
