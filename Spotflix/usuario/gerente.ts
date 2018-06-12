import {Funcionario} from './funcionario';
import {Cliente} from './cliente';
import {Produto} from '../produto';
import {OperadorDeSistema} from './operador';

class Gerente extends Funcionario{

	public constructor(matricula : string, salario : number, nome : string, email : string, senha : string){
		super(matricula. salario, nome, email, senha);
	}

	public addOperador(){

	}

	public removeOperador(){

	}

	public listarCPO(){
		
	}

	public procurarCPO(valor : string){
		
	}
}