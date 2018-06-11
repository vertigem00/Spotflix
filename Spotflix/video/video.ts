import {Produto} from './produto.ts'

export abstract class Video extends Produto{
	private anoLancamento : number;
	private faixaEtaria : number;

	public constructor(anoLancamento : number, faixaEtaria : number){
		this.anoLancamento = anoLancamento;
		this.faixaEtaria = faixaEtaria;
	}

	public getAnoLancamento() : number{
		return this.anoLancamento;
	}

	public setAnoLancamento(anoLancamento : number) : void{
		this.anoLancamento = anoLancamento;
	}

	public getFaixaEtaria() : number{
		return this.faixaEtaria;
	}

	public setFaixaEtaria(faixaEtaria : number) : void{
		this.faixaEtaria = faixaEtaria;
	}
}
