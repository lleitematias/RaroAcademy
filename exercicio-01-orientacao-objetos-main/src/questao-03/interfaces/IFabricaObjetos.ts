export interface IFabricaObjetos<T> {
    criarObjeto(objeto: T): void;
    listarObjetos: () => T[];
}
