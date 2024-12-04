import {Injectable} from "@angular/core";
import {Avaliacao} from "../model/avaliacao";
import {Status} from "../model/status";
import {Aulas} from "../model/aulas";

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private provas: string[] = [];
  private provasArray: Avaliacao[] = [];

  constructor() {
  }

  tabelaDeProvas() : Avaliacao[] {
    let presenca: Status = new Status(0, 'Presença');
    let falta: Status = new Status(1, 'Falta');
    let prova1: Avaliacao = new Avaliacao(1, 'Seminários de Formação', '24/11/24');
    let prova2: Avaliacao = new Avaliacao(2, 'Programaçao para Web', '21/11/24');
    let prova3: Avaliacao = new Avaliacao(3, 'Banco de Dados', 'Não sabo');
    const provas: Avaliacao[] = [];
    provas.push(prova1, prova2, prova3);

    return provas;
  }
}
