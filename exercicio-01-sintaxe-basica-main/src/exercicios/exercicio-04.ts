/*
  OBS.: PARA OS EXERCÍCIOS ABAIXO, CONSIDERE A INEXISTÊNCIA DE QUALQUER MÉTODO
  DE ITERAÇÃO. TODOS DEVERÃO SER FEITOS ATRAVÉS DE RECURSÃO.
*/

/**
 * A função de cálculo do fatorial abaixo possui um erro. Corrija-o.
 */
export function fatorial(n: number): number {
  if(n == 0){
    return 1
  }else{
    return n * fatorial(n - 1);
  }
}
//console.log(fatorial(1))

/**
 * a função comentada abaixo implementa o cálculo do valor fibonacci para a posição
 * n da sequência. Ex.: fibonacci(5) === 5, fibonacci(6) === 8, fibonacci(7) === 13.
 * 
 * modifique a função, para que ela retorne todos os valores, desde a posição 0 até a
 * posição n.
 * 
 * ex.: sequenciaFibonacci(5) === [0, 1, 1, 2, 3, 5]
 * 
 * referencia: https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci
 */
 export function sequenciaFibonacci(n: number): number[] {
  const sequencia = [0,1]
  if (n <= 1) {
    return sequencia  
  }
  for(let i = 2; i <= n; i++){
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2]
  }
  return sequencia;
  throw new Error('função não implementada');
}
//console.log(sequenciaFibonacci(5) + "" === [ 0, 1, 1, 2, 3, 5 ] + "")