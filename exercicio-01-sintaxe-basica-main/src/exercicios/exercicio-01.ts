/**
 * Método que executa a conversão de farhenheit para celsius
 * ex.: fahrenheitToCelsius(32) === 0
 * 
*/
export function fahrenheitToCelsius(temperatura: number): number {
  temperatura =  5/9 * (temperatura-32)
  return temperatura;
  throw new Error('função não implementada');
}

/**
 * Método que executa a conversão de farhenheit para celsius
 * 
 * ex.: celsiusToFahrenheit(0) === 32
 */
export function celsiusToFahrenheit(temperatura: number): number {
  temperatura = (temperatura * 1.8) + 32
  return temperatura 
  throw new Error('função não implementada');
}

// console.log(fahrenheitToCelsius(32) === 0)
// console.log(fahrenheitToCelsius(100) === 20)
// console.log(celsiusToFahrenheit(0) === 32)
// console.log(celsiusToFahrenheit(30) === 5)