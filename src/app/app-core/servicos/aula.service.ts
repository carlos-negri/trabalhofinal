import { Injectable } from '@angular/core';
import {Aulas} from "../model/aulas";
import {Status} from "../model/status";

@Injectable({
  providedIn: 'root'
})
export class Aula_Service {

  private aulas: string[] = [];
  private aulasArray: Aulas[] =[];
  constructor() {
  }

  addAula(aula: string){
    this.aulas.push(aula);
    console.log('AULAS AGENDADAS: ', this.aulas);
  }

  tabelaDeAulas() : Aulas[] {
    let presenca: Status= new Status(0, 'Presença');
    let falta: Status= new Status(1, 'Falta');
    let aula1: Aulas = new Aulas(1,'Seminários de Formação','21/11/24','19:00','21:00',presenca);
    let aula2: Aulas = new Aulas(2,'Programaçao para Web','19/11/24','19:00','23:00',presenca);
    let aula3: Aulas = new Aulas(3,'Banco de Dados','22/11/24','19:00','23:00',falta);

    const aulas: Aulas[] = [];

    aulas.push(aula1, aula2, aula3);

    return aulas;
  }
}
