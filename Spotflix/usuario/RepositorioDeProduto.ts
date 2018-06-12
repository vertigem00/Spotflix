import {Produto} from '../produto';

export class RepositorioDeProduto{
	private repositorio : Map<string, Produto>;

	public constructor(){
		this.repositorio = new Map<string, Produto>()
	}

	public adicionarUsuario(produto : Produto) : boolean{
		this.repositorio.set(produto.getCogido(), produto);
		return true;
	}

	public removerUsuario(codigo : string) : boolean{
		return this.repositorio.delete(codigo);
	}

	public retornarUsuario(codigo : string) : Produto|undefined{
		return this.repositorio.get(codigo);
	}
}