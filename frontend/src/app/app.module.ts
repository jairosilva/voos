import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaViagensLongasComponent } from './lista-viagens-longas/lista-viagens-longas.component';

import { HttpClientModule } from '@angular/common/http';
import { EstadoComMaisAeroportosComponent } from './estado-com-mais-aeroportos/estado-com-mais-aeroportos.component';
import { AeroportosMaisProximosMaisDistantesComponent } from './aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaViagensLongasComponent,
    EstadoComMaisAeroportosComponent,
    AeroportosMaisProximosMaisDistantesComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
