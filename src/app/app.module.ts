
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReglementComponent } from './reglement/reglement.component';
import { ActiviteComponent } from './activite/activite.component';
import { CommandeComponent } from './commande/commande.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SomocerComponent } from './somocer/somocer.component';
import { NosProduitsComponent } from './nos-produits/nos-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglementComponent,
    ActiviteComponent,
    CommandeComponent,
    NavComponent,
    FooterComponent,
    SignUpComponent,
    SomocerComponent,
    NosProduitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
