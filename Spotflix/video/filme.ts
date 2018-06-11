import {Video} from './filme.ts';

class Filme extends Video{
	private duracao : number;

	public constructor(duracao : number){
		super(anoLancamento, faixaEtaria);
		this.duracao = duracao;
	}

	public getDuracao() : number{
		return this.duracao;
	}

	public setDuracao(duracao : number) : void{
		this.duracao = duracao;
	}
}
