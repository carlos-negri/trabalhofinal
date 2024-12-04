import {Status} from "./status";


export class Aulas {
  id: number;
  nome: string;
  dataAula: string;
  horaInicio: string;
  horaFim: string;
  status: Status;


  constructor(id: number, nome:string, dataAula: string, horaInicio: string, horaFim: string, status: Status, ) {
    this.id = id;
    this.nome = nome;
    this.dataAula = dataAula;
    this.horaInicio = horaInicio;
    this.horaFim = horaFim;
    this.status = status;

  }
}
