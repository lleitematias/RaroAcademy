# Exercício Semana 02 - Orientação à Objetos com TypeScript

Olá pessoal, chegamos ao fim da segunda semana curso de `Node.js`. O exercício valendo nota desta semana será composto por **3 questões**, coda uma com um peso específico. Lembando que a _Semana 02 - Orientação à Objetos com TypeScript_ **tem peso 4**. O peso de cada questão será informado no enunciado e boa sorte! 😉

**1 [Peso - 1]:** Faça	um programa	de agenda	telefônica, com	as	classes	`Agenda`	e	`Contato`, seguindo as seguintes especificações:
  * A classe `Contato` deve ter as seguintes informações:
    * Atributos:
      * Nome; (Deve ser apenas lido)
      * Telefone; (Deve ser apenas lido)
  * A classe `Agenda` deve ter as seguintes informações:
    * Atributos:
      * Nome; (Só pode ter o valor alterado no `construtor`, deve ser apenas lido e não pode ser visível fora da classe)
      * Contatos; (O valor pode ser alterado apenas na própria classe e não pode ser visível fora da classe)
    * Métodos:
      * Adicionar contato; (Deve receber um contato por parâmetro e adiciona-lo em seus contatos)
      * Excluir contato; (Deve receber um telefone como parâmetro e remover o objeto que possui esse telefone no atributo contato)
      * recuperar contatos; (Deve retornar a lista de contatos da salvos na classe);
    * **Observação**: Só é possível adicionar um novo contato à agenda, se não existir o mesmo telefone no objeto contato dentro da lista.
  
**2 [Peso - 1.5]:** Faça um programa	que demonstre o comportamento dos animais da seguinte forma:
  * O programa deve ter uma classe `Animal` que **não pode ser instanciada**. A mesma deve ter as seguintes informações:
    * Atributos:
      * Nome; (Só pode ter o valor alterado no `construtor` e deve ser apenas lido)
      * Idade; (Só pode ter o valor alterado no `construtor` e deve ser apenas lido)
    * Métodos:
      * Comunicar; (**Não pode ser implementado nesta classe e deve retornar um texto**)
      * Locomover; (**Poder ser implementado nesta classe e deve retornar um texto**)
    * **Observação:** Todos os métodos desta classe (`Animal`) devem ser implementados de um _interface_.
  * Agora crie **três** classes: `Cachorro`, `Canguru` e `Tubarão` que vão herdar as propriedades da classe `Animal`, implementar a ou as funções obrigatórias e se necessário reescrever alguma função padrão.

**3 [Peso - 1.5]:** Escreva uma interface chamada `IFabricaObjetos` que deverá possuir um generics `T`, onde a mesma deve conter dois métodos:
  * criarObjeto: que deve receber por parâmetro um objeto do tipo `T` (Um Generics) e não retornar nada.
  * listarObjetos: que não recebe nada como parâmetro, porem retorna uma lista de objetos do tipo `T`.
  * Após a criação da interface, crie um classe chamada `FabricaObjetos`, onde a mesma implementará a interface `IFabricaObjetos` e deve conter as seguintes informações:
    * Atributos:
      * objetos: lista de objetos do tipo `T` (O mesmo deve ser inicializado no `construtor` como um array vazio);
    * Métodos: (implementados pela interface)
      * criarObjeto: Deve adicionar o objeto recebido por parâmetro na lista de objetos da variável `objetos`;
      * listarObjetos: Deve retornar a lista de objetos da variável `objetos`;
  * Agora, execute os métodos `criarObjeto` e `listarObjetos` no arquivo `main.ts`. E deve ser exibido no terminal o resultado esperado. (uma lista de objetos do tipo que for passado nos métodos `criarObjeto` e `listarObjetos`)

## Observação:
**Se for encontrado qualquer método, variável, type, entre outros, com a tipagem "any", o mesmo perderá 1.5 da nota!**
