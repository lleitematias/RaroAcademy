import { fahrenheitToCelsius } from "./exercicios/exercicio-01";
import { celsiusToFahrenheit } from "./exercicios/exercicio-01";
import { getTipoTriangulo } from "./exercicios/exercicio-02";
import { uniao } from "./exercicios/exercicio-03";
import { intersecao } from "./exercicios/exercicio-03";
import { diferenca } from "./exercicios/exercicio-03";
import { fatorial } from "./exercicios/exercicio-04";
import { sequenciaFibonacci } from "./exercicios/exercicio-04";

console.log(fahrenheitToCelsius(32) === 0);
console.log(celsiusToFahrenheit(0) === 32);
console.log('\n')
console.log(getTipoTriangulo(1,1,1))
console.log(getTipoTriangulo(1,3,1))
console.log(getTipoTriangulo(1,1,3))
console.log(getTipoTriangulo(3,1,1))
console.log(getTipoTriangulo(1,2,3))
console.log(getTipoTriangulo(0,0,0))
console.log('\n')
console.log(intersecao([1, 2, 3, 3], [2, 3, 4]) + "" === [2, 3] + "")
console.log(uniao([1, 2, 3], [2, 3, 4]) + "" === [1, 2, 3, 4] + "")
console.log(diferenca([1, 2, 3, 3], [2, 3, 4]) + "" === [1] + "")
console.log(diferenca([2, 3, 4], [1, 2, 3, 3]) + "" === [4] + "")
console.log('\n')
console.log(fatorial(5))
console.log(sequenciaFibonacci(5) + "" === [ 0, 1, 1, 2, 3, 5 ] + "")
console.log(sequenciaFibonacci(10) + "" === 
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] + "")
