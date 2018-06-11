import {Video} from './video';

class Filme extends Video{
	private duracao : number;

	public constructor(codigo : string, nome : string, genero : string, preco : number, 
		anoLancamento : number, faixaEtaria : number, duracao : number) {
		super(codigo, nome, genero, preco, anoLancamento, faixaEtaria);
		this.duracao = duracao;
	}

	public executar() : void{}

	public getDuracao() : number{
		return this.duracao;
	}

	public setDuracao(duracao : number) : void{
		this.duracao = duracao;
	}
}
