import {Produto} from '../produto'
import {Audio} from './audio'

export class Musica extends Audio {
    private album : string;

    public constructor(codigo : string, nome : string, genero : string, preco : number,
                        autor : string, duracao : number, album : string){
        super(codigo, nome, genero, preco, autor, duracao)
        this.album = album;
    }

    public executar() : void {
        console.log("Executando: ");
    }

    public getAlbum() : string {
        return this.album;
    }

    public setAlbum(album : string) : void {
        this.album = album;
    }


}