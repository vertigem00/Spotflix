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
import {RepositorioDeProduto} from './usuario/RepositorioDeProduto'
import {Video} from './video/video'
import {Filme} from './video/filme'
import {Serie} from './video/serie'
import {CartaoDeCredito} from './usuario/cartaoDeCredito';
import {Audio} from './audio/audio';
import {Musica} from './audio/musica';
import {Podcast} from './audio/podcast';


let userLogado : Usuario | undefined = undefined;

let repositorioDeProdutos : RepositorioDeProduto = new RepositorioDeProduto();
let repositorioDeUsuario : RepositorioDeUsuario = new RepositorioDeUsuario();
let gerente : Gerente = new Gerente("0101",50000,"Alessandro","ale@mc", "ale123");

repositorioDeUsuario.usuarios.push(gerente);

while(true){/*bem vindo*/
	let op : string = readline.question("*** Bem Vindo ***\n 1- Logar\n 2- Cadastrar-se como cliente\n 3- Sair\n Digite uma opcao: ");
	console.log("");
	if(op=="3") break;
	if(op=="2"){
		let nome = readline.question("Digite seu nome: ");
        let email = readline.question("Digite seu email: ");
        let senha = readline.question("Digite sua senha: ");
        let matricula = readline.question("Digite sua matricula: ");
        let endereco = readline.question("Digite seu endereco: ");
        let datadeNascimento  : Data = readline.question("Digite sua data de nascimento: ");
        let listadeProdutos :  Array<Produto> = [];
        let numeroCartao = readline.question("Digite o numero do cartao de credito: ");
        let validadeCartao : Data = readline.question("Digite a validade do seu cartao: ");
        let codigoCCV = readline.question("Digite o codigo o codigo de seguranca(CCV): ");
        let limiteCartao = readline.question("Limite do seu cartão: ");
        let cartaoDeCredito : CartaoDeCredito = new CartaoDeCredito(numeroCartao, validadeCartao, codigoCCV, limiteCartao);
        let clienteUser : Cliente = new Cliente(endereco, datadeNascimento, listadeProdutos, cartaoDeCredito, nome, email, senha);
        repositorioDeUsuario.clientes.push(clienteUser);
        repositorioDeUsuario.usuarios.push(clienteUser);
	}

	if(op=="1"){
		console.log("****Faça seu Login****");
		let email = readline.question("Digite seu email: ");
        let senha = readline.question("Digite sua senha: ");

        let usuario = repositorioDeUsuario.usuarioLogin(email, senha);
        if(usuario instanceof Gerente){
            let flag : number = 0;

            while(flag == 0){
                let comandoGerente : Array<string>;
                console.log(" ");

                let operacoes : string = "1 - Cadastrar Operador \n 2 - Remover Operador \n 3 - Listar Produtos \n 4 - Listar Clientes \n 5 - Listar Operadores \n 6 - Procurar Produto \n 7 - Procurar Cliente \n 8 - Procurar Operador \n 9 - Sair \n";

                console.log(`***Olá gerente ${usuario.getNome()}***`);
                console.log(operacoes);
                comandoGerente = readline.question("Digite uma opcao: ").split(" ");

                if(comandoGerente[0] == "1"){
                    let nomeOperador = readline.question('Digite o nome do operador: ');
                    let operadorEmail = readline.question("Digite o email do operador: ");
                    let operadorSenha = readline.question("Digite a senha do operador: ");
                    let operadorMatricula = readline.question("Digite a matricula do operador: ");
                    let operadorSalario = readline.question("Digite o salario do operador: ");
                    
    
                    let operador : OperadorDeSistema = new OperadorDeSistema(operadorMatricula, operadorSalario, nomeOperador, operadorEmail, operadorSenha);
                    repositorioDeUsuario.usuarios.push(operador);
                    repositorioDeUsuario.operadores.push(operador);
                }
                else if(comandoGerente[0] == "2"){
                    console.log("Remover Operador");
                    let removeOperador = readline.question("Digite o email do operador: ");
                    repositorioDeUsuario.removerOperador(removeOperador);
                }

                else if(comandoGerente[0] == "3"){
                    console.log("Lista de Produtos: ");
                    console.log(repositorioDeProdutos.listarProdutos());

                }
                else if(comandoGerente[0] == "4"){
                    console.log("Lista de Clientes: \n");
                    console.log(repositorioDeUsuario.listarClientes());
                    
                }

                else if(comandoGerente[0] == "5"){
                    console.log("Lista de Operadores");
                    console.log(repositorioDeUsuario.listarOperadores());
                }

                else if(comandoGerente[0] == "6"){
                    let procurarProduto = readline.question("Digite o código do produto: ");
                    if(procurarProduto == repositorioDeProdutos.procurarProduto(procurarProduto)){
                        console.log("Produto: "+ repositorioDeProdutos.procurarProduto(procurarProduto));
                    }
                }
                else if(comandoGerente[0] == "7"){
                    let procuraCliente = readline.question("Digite o email do cliente: ");
                    if(procuraCliente == repositorioDeUsuario.procurarCliente(procuraCliente)){
                        console.log("Cliente: " + repositorioDeUsuario.procurarCliente(email));
                	}
                }
                else if(comandoGerente[0] == "8"){
                    let procurarOperador = readline.question("Digite o email do operador: ");
                    if(procurarOperador == repositorioDeUsuario.procurarCliente(procurarOperador)){
                        console.log("Operador de Sistema: " + repositorioDeUsuario.procurarOperador(email));
                    }else{
                    	console.log("Operador não encontrado!")
                    }

                }else if(comandoGerente[0] == "9"){
                    flag = 1;
                }
            }
        }
    
        else if(usuario instanceof OperadorDeSistema){
            let flag: number = 0;
            while(flag == 0){
                let comandoOperador : Array<string>;
                console.log(" ");
    
                let operacoes : string ="1 - Cadastrar Produto \n 2 - Remover Produto \n 3 - Listar Produtos \n 4 - Listar Clientes \n 5 - Procurar Produto \n 6 - Procurar Cliente \n 7 - Sair";
    
                console.log(`***Ola Operador ${usuario.getNome()}***`);
                console.log(operacoes);

                comandoOperador = readline.question("Digite uma opção: ").split(" ");
                if(comandoOperador[0] == "1"){

                    let listaProdutos : string =  "Voce poderá adicionar esses produtos: \n"+
                                                "1 - Vídeo \n" +
                                                "2 - Audio \n";
                
                    console.log(listaProdutos);

                    let prodtudoAdiconar = readline.question("Digite a opcao: ").split(" ");

                    if(prodtudoAdiconar[0] == "1"){
                        let comandoVideo = Array<string>();
                        let listaVideos : string = "Escolha o tipo de vídeo que deseja adicionar: \n 1 - Filmes \n 2 - Series";
                        console.log(listaVideos);
                        
                        comandoVideo = readline.question("Digite a opção desejada: ").split(" "); 


                        if (comandoVideo[0]== "1"){
                                
                            let codigoFilme = readline.question("Digite o codigo do filme: ");
                            let nomeFilme = readline.question("Digite o nome do filme: ");
                            let generoFilme = readline.question("Digite o genero do filme: ");
                            let precoFilme = readline.question("Digite o preco do filme: ");;
                            let anoLancamentoFilme = readline.question("Ano de lancamento do filme: ");
                            let faixaEtariaFilme = readline.question("Digite a faixa etaria do filme: ");
                            let duracaoFilme = readline.question("Qual a duracao do filme: ");

                            let vid : Video = new Filme(codigoFilme, nomeFilme, generoFilme, precoFilme, anoLancamentoFilme, faixaEtariaFilme,duracaoFilme);
                            repositorioDeProdutos.adicionarFilme(codigoFilme, nomeFilme, generoFilme, precoFilme, anoLancamentoFilme, faixaEtariaFilme,duracaoFilme);
                            console.log("Filme adicionado!");
                        }

                        if(comandoVideo[0] == "2"){
                            
                            let codigoSerie = readline.question("Digite o código da Serie: ");
                            let nomeSerie = readline.question("Digite o nome da Serie: ");
                            let generoSerie = readline.question("Digite o genero da Serie: ");
                            let precoSerie = readline.question("Digite o preco da Serie: ");;
                            let anoLancamentoSerie = readline.question("Ano de lancamento da Serie: ");
                            let faixaEtariaSerie = readline.question("Digite a faixa etaria da Serie: ");
                            let numeroDeEpisodios = readline.question("Digite a quantidade de episodios da serie: ");
                            let duracaoMediaDeEpisodios = readline.question("Qual a duracao da Serie: ");

                            let serie : Video = new Serie(codigoSerie,nomeSerie,generoSerie,precoSerie,anoLancamentoSerie,faixaEtariaSerie,numeroDeEpisodios,duracaoMediaDeEpisodios);
                            repositorioDeProdutos.adicionarSerie(codigoSerie,nomeSerie,generoSerie,precoSerie,anoLancamentoSerie,faixaEtariaSerie,numeroDeEpisodios,duracaoMediaDeEpisodios);
                        	console.log("Serie adicionada!");
                        }
                    }

                    if(prodtudoAdiconar[0] == "2"){
                    	let comandoAudio = Array<string>();
                        let listaVideos : string = "Escolha o tipo de audio que deseja adicionar: \n 1 - Musica \n 2 - Podcast";
                        console.log(listaVideos);
                        
                        comandoAudio = readline.question("Digite a opção desejada: ").split(" "); 


                        if (comandoAudio[0]== "1"){
                                
                            let codigoMusica = readline.question("Digite o codigo da musica: ");
                            let nomeMusica = readline.question("Digite o nome da musica: ");
                            let generoMusica = readline.question("Digite o genero da musica: ");
                            let precoMusica = readline.question("Digite o preco da musica: ");
                            let autorMusica = readline.question("Digite o autor da musica: ");
                            let duracaoMusica = readline.question("Digite a duracao da musica: ");
                            let albumMusica = readline.question("Digite o nome do album: ");

                            let aud : Audio = new Musica(codigoMusica, nomeMusica, generoMusica, precoMusica, autorMusica, duracaoMusica, albumMusica);
                            repositorioDeProdutos.adicionarMusica(codigoMusica, nomeMusica, generoMusica, precoMusica, autorMusica, duracaoMusica, albumMusica);
                            console.log("Musica adicionada!");
                        }

                        if(comandoAudio[0] == "2"){
                            
                            let codigoPodcast = readline.question("Digite o código do podcast: ");
                            let nomePodcast = readline.question("Digite o nome do podcast: ");
                            let generoPodcast = readline.question("Digite o genero do podcast: ");
                            let precoPodcast = readline.question("Digite o preco do podcast: ");;
                            let autorPodcast = readline.question("Digite o nome do autor: ");
                            let duracaoPodcast = readline.question("Digite a duracao do podcast: ");
                            let tematicaPodcast = readline.question("Digite a tematica do podcast: ");

                            let podcast : Audio = new Podcast(codigoPodcast,nomePodcast,generoPodcast,precoPodcast,autorPodcast,duracaoPodcast, tematicaPodcast);
                            repositorioDeProdutos.adicionarPodcast(codigoPodcast,nomePodcast,generoPodcast,precoPodcast,autorPodcast,duracaoPodcast, tematicaPodcast);
                        	console.log("Podcast adicionado!");
                        }
                        
                    }
                }
                else if(comandoOperador[0] == "2"){
                	console.log("Remover Produto");
                    let removeProduto = readline.question("Digite o codigo do produto: ");
                    repositorioDeProdutos.removerProduto(removeProduto);
                }

                else if(comandoOperador[0] == "3"){
                    console.log("Lista de Produtos: ");
                    console.log(repositorioDeProdutos.listarProdutos());
                }

                else if(comandoOperador[0] == "4"){
                    console.log("Lista de Clientes: \n");
                    console.log(repositorioDeUsuario.listarClientes());
                }

                else if(comandoOperador[0] == "5"){
                    let procurarProduto = readline.question("Digite o código do produto: ");
                    if(procurarProduto == repositorioDeProdutos.procurarProduto(procurarProduto)){
                        console.log("Produto: "+ repositorioDeProdutos.procurarProduto(procurarProduto));
                    }
                }
                else if(comandoOperador[0] == "6"){
                    let procuraCliente = readline.question("Digite o email do cliente: ");
                    if(procuraCliente == repositorioDeUsuario.procurarCliente(procuraCliente)){
                        console.log("Cliente: " + repositorioDeUsuario.procurarCliente(email));
                	}
                }
                else if(comandoOperador[0] == "7"){
                	flag = 1;
                }
            }
        }

        else if(usuario instanceof Cliente){
        	let flag = 0;
        	while(flag == 0){
            	let comandoCliente : Array<string>;
            	console.log(" ");
            	let operacoes : string ="1 -Listar produtos da loja \n 2 - Listar meus produtos \n 3 - Comprar produto \n 4 - Play \n 5 - Sair \n";
            	console.log(`***Ola cliente ${usuario.getNome()}***`);
            	console.log(operacoes);
            	comandoCliente = readline.question("Digite uma opcao: ").split(" ");

            	if(comandoCliente[0] == "1"){
            		console.log(repositorioDeProdutos);
            	}
            	if(comandoCliente[0] == "2"){
            		console.log(repositorioDeProdutos);
            	}
            	if(comandoCliente[0] == "3"){
            		console.log("Produto: \n");
            		console.log(repositorioDeProdutos.listarProdutos());
            		let codigo = readline.question("Escolha um produto: ");
            		if(codigo = repositorioDeProdutos.listarProdutos){
            			repositorioDeProdutos.removerProduto(codigo);
            			console.log(repositorioDeProdutos.listarProdutos()+"\n Produto comprado!");
            		}else{
            			console.log("Produto não encontrado!")
            		}
            		
            	}
            	if(comandoCliente[0] == "4"){
					let listaProdutos : string =  "Você poderá dar play nesses produtos: \n"+
            	                                    "1 - Vídeo \n" +
            	                                    "2 - Audio \n";
                
            	    console.log(listaProdutos);
            	    let comandoPlay = readline.question("Digite uma opção: ").split(" ");

            	    console.log(" ");
            	    //console.log("Não deu tempo terminar.");
            	    if(comandoPlay[0] == "1"){
            	    	console.log("Filmes: "+ repositorioDeProdutos.listarProdutos());
            	    	console.log("Séries: " + repositorioDeProdutos.listarProdutos());
           		     	let op = readline.question("Escolhe um vídeo: ");
            	    	if(op == repositorioDeProdutos.procurarProduto(op)){
            	    		console.log(op.executando());
            	    	}
            	    }
            	    if(comandoPlay[0] == "2"){
            	    	console.log("Musica: "+ repositorioDeProdutos.listarProdutos());
            	    	console.log("Podcast: " + repositorioDeProdutos.listarProdutos());
           		     	let op = readline.question("Escolha um audio pelo codigo: ");
            	    	if(op == repositorioDeProdutos.procurarProduto(op)){
            	    		console.log(op.executando());
            	    	}
            	    }
            	}
            
            	if(comandoCliente[0] == "5"){
            		flag = 1;
            	}
			}
		}else{
			console.log("Usuário não existe!");
		}
	}
}