declare function require(name : string) : any;
var readline = require('readline-sync');

import {Data} from './data';
import {Produto} from './produto';
import {Pacote} from './pacote';
import {Cliente} from './usuario/cliente';
import {Funcionario} from './usuario/funcionario';
import {Gerente} from './usuario/gerente';
import {OperadorDeSistema} from './usuario/operador';
import {Usuario} from './usuario/usuario';
import {RepositorioDeUsuario} from './usuario/RepositorioDeUsuario'

let c : Usuario = new Cliente("rua afonso pena");

while(true){/*bem vindo*/
	let op : string = readline.question("*** Bem Vindo *** \n 1- Logar\n 2- Cadastrar-se como cliente\n 3- Sair\n Digite uma opção: ");
	if(op=="3") break;
	if(op=="2"){
		let nome = readline.question("Nome: ");
		Cliente.nome = nome;
		let email = readline.question("Email: ");
		if(email != Cliente.email){
			console.log("Email inválido ou já cadastrado!");
		}else{
			Cliente.setEmail(email);	
		}
		let senha =  readline.question("Senha: ");
		Cliente.setSenha(senha);
		let end = readline.question("Endereco: ");
		Cliente.setEndereco(end);
		let dat = readline.question("Data de nascimento: ");
		Cliente.setDataDeNascimento(dat);
	}
	if(op=="1"){
		console.log("****Faça seu Login****");
		let email1 = readline.quetions("Digite seu login: ");
		if(email1 != RepositorioDeUsuario.setEmail){
			console.log("Email inválido")
		}else{
			if(Usuario.setEmail(email1) instanceof Gerente){
				while(true){
					let opc = readline.question("****Olá Gerente "+ Gerente.getNome() +"*****\n 1 – Cadastrar Operador\n 2 – Remover Operador\n 3 – Listar Produtos\n 4 – Listar Clientes\n 5 – Listar Operadores\n 6 – Procurar Produto\n 7 – Procurar Cliente\n 8 – Procurar Operador\n 9 – Sair\n Digite a opção:")
					if(opc == "1"){

					}
					if(opc == "2"){

					}
					if(opc == "3"){

					}
					if(opc == "4"){

					}
					if(opc == "5"){

					}
					if(opc == "6"){

					}
					if(opc == "7"){

					}
					if(opc == "8"){

					}
					if(opc == "9") break;
				}
			}

			if(Usuario.setEmail(email1) instanceof OperadorDeSistema){
				while(true){
					let opc = readline.question("****Olá Gerente "+ OperadorDeSistema.getNome() +"*****\n 1 – Cadastrar Produto\n 2 – Remover Produto\n 3 – Listar Produtos\n 4 – Listar Clientes\n 5 – Procurar Produto\n 6 – Procurar Cliente\n 7 – Sair\n Digite a opção:")
					if(opc == "1"){

					}
					if(opc == "2"){

					}
					if(opc == "3"){

					}
					if(opc == "4"){

					}
					if(opc == "5"){

					}
					if(opc == "6"){

					}
					if(opc == "7") break;
				}
			}
			if(Usuario.setEmail(email1) instanceof Cliente){
				while(true){
					let opc = readline.question("****Olá Gerente "+ Cliente.getNome() +"*****\n 1 – Listar Produtos da Loja\n 2 – Listar Meus Produtos\n 3 – Comprar Produto\n 4 – Play\n 5 – Sair\n Digite a opção:")
					if(opc == "1"){

					}
					if(opc == "2"){

					}
					if(opc == "3"){

					}
					if(opc == "4"){

					}
					if(opc == "5") break;
				}
			}
		}
		let senha1 = readline.quetions("Digite sua senha: ");
		Usuario.setSenha(senha1);
	}
}