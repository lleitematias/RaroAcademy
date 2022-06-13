/**
 * Este método retorna a união dos arrays a e b, excluindo todos os elementos
 * repetidos.
 * 
 * definicao: https://proofwiki.org/wiki/Definition:Set_Union
 * obs.: pediu-se aqui que a união de elementos únicos, diferentemente da definição
 * formal da operação matemática.
 * 
 * Ex.: uniao([1, 2, 3], [2, 3, 4]) === [1, 2, 3, 4]
 */
export function uniao(a: number[], b: number[]): number[] {
  a = a.concat(b)
  for(let i = 0; i < a.length; ++i){
    for(let j = i+1; j < a.length; ++j){
      if(a[i] === a[j]){
        a.splice(j--, 1)
      }
    }
  }
  return a
  throw new Error('função não implementada');
}
//console.log(uniao([1, 2, 3], [2, 3, 4]) + "" === [1, 2, 3, 4] + "")

/**
 * Este método retorna a intersecao dos arrays a e b, excluindo todos os elementos
 * repetidos.
 * 
 * definicao: https://proofwiki.org/wiki/Definition:Set_Intersection
 * 
 * Ex.: intersecao([1, 2, 3, 3], [2, 3, 4]) === [2, 3]
 */
export function intersecao(a: number[], b: number[]): number[] {
  a = a.filter(value => b.includes(value))
  for(let i = 0; i < a.length; ++i){
    for(let j = i+1; j < a.length; ++j){
      if(a[i] === a[j]){
        a.splice(i++, 1)
      }
    }
  }
  return a
  throw new Error('função não implementada');
}
//console.log(intersecao([1, 2, 3, 3], [2, 3, 4]) + "" === [2, 3] + "")

/**
 * Este método retorna a diferenca dos arrays a e b, excluindo todos os elementos
 * repetidos.
 * 
 * definicao: https://proofwiki.org/wiki/Definition:Set_Difference
 * 
 * Ex.: diferenca([1, 2, 3, 3], [2, 3, 4]) === [1]
 * Ex.: diferenca([2, 3, 4], [1, 2, 3, 3]) === [4]
 */
export function diferenca(a: number[], b: number[]): number[] {
  a = a.filter(num => !b.includes(num))
  return a
  throw new Error('função não implementada');
}
//console.log(diferenca([1, 2, 3, 3], [2, 3, 4]) + "" === [1] + "")
// console.log(diferenca([2, 3, 4], [1, 2, 3, 3]) + "" === [4] + "")