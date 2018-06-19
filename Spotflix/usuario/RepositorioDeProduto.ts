import {Produto} from '../produto';
import {Filme} from '../video/filme';
import {Serie} from '../video/Serie'
import {Musica} from '../audio/musica';
import {Podcast} from '../audio/podcast';
import {Pacote} from '../Pacote';
import {Data} from '../Data';

export class RepositorioDeProduto{
	mapaProduto : Map<string, Produto>;
    mapaFilme: Map<string, Filme>;
    mapaSerie: Map<string, Serie>;
    mapaMusica: Map<string, Musica>;
    mapaPodcast: Map<string, Podcast>;
    mapaPacote: Map<string, Pacote>;

	public constructor(){
    	this.mapaProduto = new Map<string, Produto>();
    	this.mapaFilme = new Map<string, Filme>();
    	this.mapaSerie = new Map<string, Serie>();
    	this.mapaMusica = new Map<string, Musica>();
    	this.mapaPodcast = new Map<string, Podcast>();
    	this.mapaPacote = new Map<string, Pacote>();

	}

	public adicionarProduto ( codigo:string, Produto: Produto) : void { 
    	this.mapaProduto.set(codigo, Produto);
	}

	public adicionarFilme ( codigo:string, nome:string, genero:string, preco:number, 
    	anoLocamento:number, faixaEtaria:number, duracao:number) : void {

    	let filme = new Filme (codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao);
    	this.mapaFilme.set(codigo, filme);
    	this.adicionarProduto(codigo, filme);
	}

	public adicionarSerie ( codigo:string, nome:string, genero:string, preco:number, 
    	anoLocamento:number, faixaEtaria:number, numeroDeEpisodios : number, duracaoMediaDeEpisodio : number ) : void {

    	let serie = new Serie (codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpisodio);
    	this.mapaSerie.set(codigo, serie);
    	this.adicionarProduto(codigo, serie);
	}

	public adicionarMusica ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, album:string) : void {
    	let musica = new Musica ( codigo, nome, genero, preco, autor, duracao, album);
    	this.mapaMusica.set(codigo, musica);
    	this.adicionarProduto(codigo, musica);
	}

	public adicionarPodcast ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, tematica:string) : void {
    	let podcast = new Podcast ( codigo, nome, genero, preco, autor, duracao, tematica);
    	this.mapaPodcast.set(codigo, podcast);
    	this.adicionarProduto(codigo, podcast);
	}

	public adicionarPacote ( codigo:string, nome:string, genero:string, preco:number, 
    	produtos:Array<Produto>, validade: Data, precoDeProtudos:number) : void {

    	let pacote = new Pacote (codigo, nome, genero, preco, produtos, validade, precoDeProtudos);
    	this.mapaPacote.set(codigo, pacote);
    	this.adicionarProduto(codigo, pacote);
	}

	public listarProdutos (){
    	this.mapaProduto.forEach( (valor, chave) => {
        	console.log(valor);
    	});
	}

	public procurarProduto ( codigo:string ){
    	if(this.mapaProduto.has(codigo)){
        	console.log(this.mapaProduto.get(codigo));
    	}else{
    		console.log("Produto não encontrado");
    	}
	}

	public removerProduto (codigo: string) : boolean{
    	if (!this.mapaProduto.has(codigo)){
        	return false;
    	}

    	this.mapaProduto.delete(codigo);
    	return true;
	}
}