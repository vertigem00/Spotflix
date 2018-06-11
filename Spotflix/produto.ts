

export abstract class Produto {
    codigo : string;
    nome : string;
    genero : string;
    preco : number;



    abstract executar() : void
}