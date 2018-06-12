import {Usuario} from './usuario';

export class RepositorioDeUsuario{
	private repositorio : Map<string, Usuario>;

	public constructor(){
		this.repositorio = new Map<string, Usuario>()
	}

	public adicionarUsuario(usuario : Usuario) : boolean{
		this.repositorio.set(usuario.getEmail(), usuario);
		return true;
	}

	public removerUsuario(email : string) : boolean{
		return this.repositorio.delete(email);
	}

	public retornarUsuario(email : string) : Usuario|undefined{
		return this.repositorio.get(email);
	}
}