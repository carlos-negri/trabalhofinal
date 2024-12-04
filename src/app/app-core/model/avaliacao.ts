export class Avaliacao {
  id: number;
  nomeDisciplina: string;
  dataAvaliacao: string;
  constructor(id: number, nomeDisciplina: string, dataAvaliacao: string) {
    this.id = id;
    this.nomeDisciplina = nomeDisciplina;
    this.dataAvaliacao = dataAvaliacao;
  }

}
