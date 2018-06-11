import {Produto} from './produto'
import {Data} from './data'

export class Pacote extends Produto {
    produtos : Array<Produto>
    validade : Data;
    precoMensal : number;

    executar() : void {
        console.log("Não pega")
    }
}