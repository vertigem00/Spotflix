import {Produto} from '../produto'
import {Audio} from './audio'

export class Musica extends Audio {
    album : string;

    executar() : void
}