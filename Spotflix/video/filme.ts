import {Video} from './video';

export class Filme extends Video{
	private duracao : number;

	public constructor(codigo : string, nome : string, genero : string, preco : number, 
		anoLancamento : number, faixaEtaria : number, duracao : number) {
		super(codigo, nome, genero, preco, anoLancamento, faixaEtaria);
		this.duracao = duracao;
	}

	public executar() : void{
		console.log("Executando: ");
	}

	public getDuracao() : number{
		return this.duracao;
	}

	public setDuracao(duracao : number) : void{
		this.duracao = duracao;
	}
}
