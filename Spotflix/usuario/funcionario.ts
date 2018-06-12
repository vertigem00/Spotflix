import {Usuario} from './usuario';

export abstract class Funcionario extends Usuario{
	private matricula : string;
	private salario : number;

	public constructor(matricula : string, salario : number, nome : string, email : string, senha : string){
		super(nome, email, senha);
		this.matricula = matricula;
		this.salario = salario;
	}

	public getMatricula() : string{
		return this.matricula;
	}

	public setMatricula(matricula : string) : void{
		this.matricula = matricula;
	}

	public getSalario() : number{
		return this.salario;
	}

	public setSalario(salario : number) : void{
		this.salario = salario;
	}
}