import {Produto} from './produto'
import {Data} from './data'
import {Video} from './video/video';
import {Filme} from './video/filme';
import {Serie} from './video/serie';
import {Podcast} from './audio/podcast';
import {Musica} from './audio/musica';

export class Pacote extends Produto {
    private  filmes?: Array<Filme>; 
    private  series?: Array<Serie>;
    private  musica?: Array<Musica>;
    private  podcast?: Array<Podcast>; 
    private produtos: Array<Produto>;

    private validade : Data;
    private precoProduto : number;

    public constructor (codigo:string, nome:string, genero:string, preco:number, produtos:Array<Produto>, validade: Data, precoProduto:number, filmes?: Array<Filme>, series?: Array<Serie>, musica?: Array<Musica>, podcast?: Array<Podcast>){
        
        super (codigo, nome, genero, preco);
        this.filmes = filmes;
        this.series = series;
        this.musica = musica;
        this.podcast = podcast;
        
        this.produtos = produtos;
        this.validade = validade;
        this.precoProduto = precoProduto;
    }

    public getProdutos() : Array<Produto> {
        return this.produtos;
    }

    public setProdutos(produtos : Array<Produto>) : void {
        this.produtos = produtos;
    }

    public getValidade() : Data {
        return this.validade;
    }

    public setValidade(validade : Data) : void {
        this.validade = validade;
    }

    public getPrecoMensal() : number {
        return this.precoMensal;
    }

    public setPrecoMensal(PrecoProduto : number) : void {
        this.precoProduto = this.precoProduto;
    }

    public executar():  void{
    }
    /*public precoMensal(precoProduto: number): number{
    return this.precoProtudo*0,15;
    }*/
}