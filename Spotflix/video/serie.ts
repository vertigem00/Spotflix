import {Video} from './filme.ts';

class Serie extends Video{
	private numeroDeEpisodios : number;
	private duracaoMediaDeEpisodio : number;

	public constructor(numeroDeEpisodios : number, duracaoMediaDeEpisodio : number){
		super(anoLancamento, faixaEtaria);
		this.numeroDeEpisodios = numeroDeEpisodios;
		this.duracaoMediaDeEpisodio = duracaoMediaDeEpisodio;
	}

	public getNumeroDeEpisodios() : number{
		return this.numeroDeEpisodios;
	}

	public setNumeroDeEpisodios(numeroDeEpisodios : number) : void{
		this.numeroDeEpisodios = numeroDeEpisodios;
	}

	public getDuracaoMediaDeEpisodio() : number{
		return this.duracaoMediaDeEpisodio;
	}

	public setDuracaoMediaDeEpisodio(duracaoMediaDeEpisodio : number) : void{
		this.duracaoMediaDeEpisodio = duracaoMediaDeEpisodio;
	}
	
}
