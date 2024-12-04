import { Component, OnInit } from '@angular/core';
import {Aulas} from "../../app-core/model/aulas";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Aula_Service} from "../../app-core/servicos/aula.service";
import * as bootstrap from "bootstrap";

declare var $: any;

@Component({
  selector: 'app-minhas-aulas',
  templateUrl: './minhas-aulas.component.html',
  styleUrls: ['./minhas-aulas.component.css']
})
export class MinhasAulasComponent implements OnInit {

  i: number =0;
  aulas: Aulas [] =[];
  form: FormGroup;
  constructor(private Aula_Service: Aula_Service,
              private fb: FormBuilder) {
    this.aulas = Aula_Service.tabelaDeAulas();

    this.form = this.fb.group({
      nome: ['', Validators.required, Validators.minLength(5)],
      dataAula: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFim: ['', Validators.required],
      statusTarefa: ['', Validators.required]});
  }


  openModal(){
    $('#nova-aula').modal('show');
  }
  closeModal(){
    $('#nova-aula').modal('hide');
  }
  ngOnInit(): void {
  }

  salvarFormAula() {
    console.log("DADOS DA AULA NOVA: ", this.form.value);
  }
}
