import {Produto} from './produto'
import {Data} from './data'

export class Pacote extends Produto {
    private produtos : Array<Produto>
    private validade : Data;
    private precoMensal : number;

    public constructor(codigo : string, nome : string, genero : string, preco : number, produtos : Array<Produto>,
                        validade : Data, precoMensal : number){
        super(codigo, nome, genero, preco);
    }

    getProdutos() : Array<Produto> {
        return this.produtos;
    }

    setProdutos(produtos : Array<Produto>) : void {
        this.produtos = produtos;
    }

    getValidade() : Data {
        return this.validade;
    }

    setValidade(validade : Data) : void {
        this.validade = validade;
    }

    getPrecoMensal() : number {
        return this.precoMensal;
    }

    setPrecoMensal(PrecoMensal : number) : void {
        this.precoMensal = this.precoMensal;
    }

    executar() : void {
        console.log("Não pega")
    }
}