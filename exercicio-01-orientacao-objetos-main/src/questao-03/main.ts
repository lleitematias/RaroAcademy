import { FabricaObjetos } from "./models/FabricaObjetos";


const obj1 = new FabricaObjetos<Number>([])
obj1.criarObjeto(1)
obj1.criarObjeto(2)
console.log(obj1.listarObjetos())

const obj2 = new FabricaObjetos<String>([])
obj2.criarObjeto("Larissa")
obj2.criarObjeto("Teste")
console.log(obj2.listarObjetos())