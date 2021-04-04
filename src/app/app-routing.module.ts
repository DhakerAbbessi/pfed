import { SignUpComponent } from './sign-up/sign-up.component';
import { SomocerComponent } from './somocer/somocer.component';
import { ReglementComponent } from './reglement/reglement.component';
import { ActiviteComponent } from './activite/activite.component';
import { CommandeComponent } from './commande/commande.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SomocerComponent },
  { path: 'activite', component: ActiviteComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'reglement', component: ReglementComponent },
  { path:'sign',component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }