
// definição de um tipo customizado em typescript. Este é utilizado para
// determinar que a função `getTipoTriangulo` pode retornar apenas os 
// valores listados.
type tipoTriangulo = 'equilatero' | 'isosceles' | 'escaleno' | 'nao-triangulo';

/**
 * Este método recebe recebe três valores numéricos, `a`, `b` e `c`. A partir dos
 * valores recebidos, você precisa verificar se os valores formam um `triângulo equilátero`,
 * `triângulo isósceles` ou um triângulo escaleno. Se os valores não formam um triângulo,
 * você deve retornar "nao-triangulo"
 */
export function getTipoTriangulo(a: number, b: number, c: number): tipoTriangulo {
  let tipo: any = ''
  if(a<=0 && b <= 0 && c <= 0){
    tipo = 'nao-triangulo';
  }else if(a === b && b === c){
    tipo = 'equilatero';
  }else if(a === b || b === c || c === a){
    tipo = 'isosceles';
  }else{
    tipo = 'escaleno';
  }
  return tipo;
  throw new Error('função não implementada');
}

// console.log(getTipoTriangulo(1,1,1))
// console.log(getTipoTriangulo(1,3,1))
// console.log(getTipoTriangulo(1,1,3))
// console.log(getTipoTriangulo(3,1,1))
// console.log(getTipoTriangulo(1,2,3))
// console.log(getTipoTriangulo(0,0,0))