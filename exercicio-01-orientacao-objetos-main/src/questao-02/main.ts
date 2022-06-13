import { Canguru } from "./models/Canguru";
import { Cachorro } from "./models/Cachorro";
import { Tubarao } from "./models/Tubarao";

const cachorro1 = new Cachorro("Loki" , 10);
const canguru1 = new Canguru("Jack", 12);
const tubarao1 = new Tubarao("Tuna", 15);

console.log(cachorro1)
cachorro1.locomover()
cachorro1.comunicar()
console.log(canguru1)
canguru1.locomover()
canguru1.comunicar()
console.log(tubarao1)
tubarao1.locomover()
tubarao1.comunicar()



 