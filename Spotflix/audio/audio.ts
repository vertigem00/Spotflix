import {Produto} from '../produto'

export abstract class Audio extends Produto {
    autor : string;
    duracao : number;

    abstract executar() : void
}