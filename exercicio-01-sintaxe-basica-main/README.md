# Exercícios - Conceitos Básicos

1. O arquivo `src/exercicios/exercicio-01.ts` define dois métodos: `fahrenheitToCelsius`, que recebe por parâmetro a temperatura em fahrenheit e converte para celcius, e `celsiusToFahrenheit`, que faz o caminho oposto. Ambas estão definidas, mas não implementadas. Complete-as, para o correto funcionamento.

2. Em `src/exercicios/exercicio-02.ts`, existe a definição do método `getTipoTriangulo`, que recebe os parâmetros `a`, `b` e `c`, indicando o tamanho das arestas. Ele deve responder o tipo de triângulo que estas medidas produzem, sendo eles equilatero, isoceles ou escaleno. Caso as medidas não produzam um triângulo real, deve-se retornar a string `nao-triangulo`.

3. Em `src/exercicios/exercicio-03.ts`, novamente, as funções foram definidas, porém não implementadas. Desta vez, você precisará implementar as funções de união, intersecção e diferença de dois arrays recebidos por parâmetro. Detalhe importante: como pode ser visto no comentário de topo de todos estes métodos, pede-se que os método eliminem os elementos duplicados.

4. no `src/exercicios/exercicio-04.ts`, vamos fazer algumas funções recursivas. Por isso, estamos proibidos de usar loops para implementar nossos métodos.
No primeiro método, você tem que simplesmente calcular o fatorial de um número. Ex.: `fatorial(5) === (5 * 4 * 3 * 2 * 1) == 120`.

O segundo exercício, pede-se que você faça um método que retorne a sequencia fibonacci até o número passado por parâmetro. Ex.: `fibonacci(10) === [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]`. Este aqui é bem desafiador, por isso, vai uma dica: sugiro que você crie uma função que saiba calcular o valorFibonacci dos números. Ex.: valorFiobonacci(10) === 55. A função `sequenciaFibonacci` vai usar esta outra função para produzir o array. Mais uma dica importante: repare que estamos começando nossa lista do valor 0. Não se esqueça de adiciona-lo.