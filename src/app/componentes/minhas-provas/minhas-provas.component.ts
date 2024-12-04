import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Avaliacao} from "../../app-core/model/avaliacao";
import {AvaliacaoService} from "../../app-core/servicos/avaliacao_.service";

declare var $: any;

@Component({
  selector: 'app-minhas-provas',
  templateUrl: './minhas-provas.component.html',
  styleUrls: ['./minhas-provas.component.css']
})
export class MinhasProvasComponent implements OnInit {
  i: number = 0;
  provas: Avaliacao[] =[];
  form: FormGroup;
  constructor(AvaliacaoService: AvaliacaoService,
              private fb: FormBuilder) {
    this.provas = AvaliacaoService.tabelaDeProvas();

    this.form = this.fb.group({
      nomeDisciplina: ['', Validators.required, Validators.minLength(5)],
      dataAvaliacao: ['', Validators.required],
      statusProva:['', Validators.required]
});
  }

  openModal(){
    $('#nova-prova').modal('show');
  }
  closeModal(){
    $('#nova-prova').modal('hide');
  }
  ngOnInit(): void {
  }

  salvarFormProva() {
    console.log("DADOS DA PROVA: ", this.form.value);
  }
}
