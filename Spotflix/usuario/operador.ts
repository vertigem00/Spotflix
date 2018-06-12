import {Funcionario} from './funcionario';
import {Cliente} from './cliente';
import {Produto} from '../produto';

class OperadorDeSistema extends Funcionario{

	public constructor(matricula : string, salario : number, nome : string, email : string, senha : string){
		super(matricula, salario, nome, email, senha);
	}

	public addProduto(){

	}

	public removeProduto(){

	}

	public listarCP(){

	}

	public procurarCP(){
		
	}
}