import {Usuario} from './usuario';
import {Data} from '../data';
import {Produto} from '../produto';
import {CartaoDeCredito} from './cartaoDeCredito'
import {RepositorioDeProduto} from './RepositorioDeProduto';

export class Cliente extends Usuario{
	private endereco : string;
	private dataDeNascimento : Data;
	private listaDeProdutos : Array<Produto>;
	private cartaoDeCredito : CartaoDeCredito;

	public constructor(endereco : string, dataDeNascimento : Data, listaDeProdutos : Array<Produto>, cartaoDeCredito : CartaoDeCredito, nome : string, email : string, senha : string){
		super(nome, email, senha);
		this.endereco = endereco;
		this.dataDeNascimento = dataDeNascimento;
		this.listaDeProdutos = listaDeProdutos;
		this.cartaoDeCredito = cartaoDeCredito;
	}

	public getEndereco() : string{
		return this.endereco;
	}

	public setEndereco(endereco : string) : void{
		this.endereco = endereco;
	}

	public getDataDeNascimento() : Data{
		return this.dataDeNascimento;
	}

	public setDataDeNascimento(dataDeNascimento : Data) : void{
		this.dataDeNascimento = dataDeNascimento;
	}

	public getListaDeProdutos() : Array<Produto>{
		return this.listaDeProdutos;
	}

	public setListaDeProdutos(listaDeProdutos : Array<Produto>) : void{
		this.listaDeProdutos = listaDeProdutos;
	}

	public getCartaoDeCredito() : CartaoDeCredito{
		return this.cartaoDeCredito;
	}

	public setCartaoDeCredito(cartaoDeCredito : CartaoDeCredito) : void{
		this.cartaoDeCredito = cartaoDeCredito;
	}

	public comprarProduto(){
		let preco = 0
        if(RepositorioDeProduto.length == 0){
            return false;
        }else{
            for(let produto of this.listaDeProdutos){
                preco += produto.getPreco();
            }

        } return true;
	}

	public listarMeusProdutos() : void{
       for(let produto of this.listaDeProdutos){
           console.log(produto.getNome());

       }
    }

    public limiteDoCartao() : boolean{
        let soma = 0;
        if(RepositorioDeProduto.length == 0){
            return false;
        }else{
            for(let produto of this.listaDeProdutos){
                soma += produto.getPreco();
                
            }
        }
        if(this.cartaoDeCredito.getLimite() >= soma){
            return true
        }else{
            return false;
        }
    }
}
