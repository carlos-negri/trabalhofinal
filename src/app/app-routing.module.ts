import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {MinhasAulasComponent} from "./componentes/minhas-aulas/minhas-aulas.component";
import {MinhasProvasComponent} from "./componentes/minhas-provas/minhas-provas.component";


const routes: Routes = [
  { path: "", redirectTo: "pagina-inicial", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  {path: "minhas-aulas", component: MinhasAulasComponent}, //redireciona para a pagina "minhas aulas"
  {path: "minhas-provas", component: MinhasProvasComponent}, //redireciona para a pagina "minhas provas"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
