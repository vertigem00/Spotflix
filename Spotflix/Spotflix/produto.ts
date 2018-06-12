export abstract class Produto{
	private codigo : string;
	private nome : string;
	private genero : string;
	private preco : number;

	public constructor(codigo : string, nome : string, genero : string, preco : number){
		this.codigo = codigo;
		this.nome = nome;
		this.genero = genero;
		this.preco = preco;
	}

	public getCogido() : string{
		return this.codigo;
	}

	public setCodigo(codigo : string) : void{
		this.codigo = codigo;
	}

	public getNome() : string{
		return this.nome;
	}

	public setNome(nome : string) : void{
		this.nome = nome;
	}

	public getGenero() : string{
		return this.genero;
	}

	public setGenero(genero : string) : void{
		this.genero = genero;
	}

	public getPreco() : number{
		return this.preco;
	}

	public setPreco(preco : number) : void{
		this.preco = preco;
	}

	public abstract executar() : void;
}
