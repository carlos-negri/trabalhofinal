import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MinhasAulasComponent } from './componentes/minhas-aulas/minhas-aulas.component';
import { MinhasProvasComponent } from './componentes/minhas-provas/minhas-provas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
    RodapeComponent,
    MinhasAulasComponent,
    MinhasProvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
