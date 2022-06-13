import { Contato } from "./models/Contato";
import { Agenda } from "./models/Agenda";

const agenda1 = new Agenda('', '');
const contato1 = new Contato("Larissa", '2020-3030')
const contato2 = new Contato("Chance", '3020-3030')
const contato3 = new Contato("Zeus", '1546-8412')
agenda1.adicionarContato(contato1)
agenda1.adicionarContato(contato2)
agenda1.adicionarContato(contato3)
agenda1.excluirContato('3020-3030')
console.log(agenda1.recuperarContatos())