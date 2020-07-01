import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viagem } from './model/Viagem.model';
import { Aeroporto } from './model/Aeroportos.model';

@Injectable({
  providedIn: 'root'
})
export class VoosService {

  constructor(private http: HttpClient) { }

  buscaVoos() {
    return this.http.get<Viagem[]>(
      'http://localhost:8000/api/busca_voos.php'
    );
  }

  buscaEstadoComMaisAeroportos() {
    return this.http.get<{uf: string, qtd: number}>(
      'http://localhost:8000/api/busca_estado_com_mais_aeroportos.php'
    );
  }

  buscaDistanciasEntreAeroportos() {
    return this.http.get<Aeroporto>(
      'http://localhost:8000/api/busca_distancias_entre_aeroportos.php'
    );
  }

}
