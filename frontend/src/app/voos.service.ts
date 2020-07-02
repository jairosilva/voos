import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Viagem } from './model/Viagem.model';
import { Aeroporto } from './model/Aeroportos.model';
import { environment } from 'src/environments/environment';
import {
  AsyncSubject,
  Subscription,
  Observable,
  BehaviorSubject,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoosService {
  public routerInfo: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public processamentoConcluido = new Subject();
  public dataViagem = '';
  public dataViagemYyyymmdd = '';
  public processando = false;

  constructor(private http: HttpClient) {
    this.calculaDataViagem();
  }

  private calculaDataViagem() {
    var result = new Date();

    function pad(s) {
      return s < 10 ? '0' + s : s;
    }

    result.setDate(result.getDate() + 40);

    var d = new Date(result);
    this.dataViagem = [
      pad(d.getDate()),
      pad(d.getMonth() + 1),
      d.getFullYear(),
    ].join('/');

    const partesData = this.dataViagem.split('/');

    this.dataViagemYyyymmdd =
      partesData[2] + '-' + partesData[1] + '-' + partesData[0];
  }

  buscaVoos() {
    let params = new HttpParams();
    params = params.append('dataViagem', this.dataViagemYyyymmdd);

    return this.http.get<Viagem[]>(
      environment.urlBase + '/api/busca_voos.php',
      { params: params }
    );
  }

  buscaEstadoComMaisAeroportos() {
    return this.http.get<{ uf: string; qtd: number }>(
      environment.urlBase + '/api/busca_estado_com_mais_aeroportos.php'
    );
  }

  buscaDistanciasEntreAeroportos() {
    return this.http.get<Aeroporto>(
      environment.urlBase + '/api/busca_distancias_entre_aeroportos.php'
    );
  }

  atualizaDados() {
    let params = new HttpParams();
    params = params.append('dataViagem', this.dataViagemYyyymmdd);

    this.http
      .get<any>(environment.urlBase + '/api/le.php', { params: params })
      .subscribe(
        (data) => {
          this.routerInfo.next(true);

          if (data.processando) {
            this.atualizaDados();
          } else {
            this.processamentoConcluido.next();
            this.processando = false;
          }
        },
        (error) => {
          this.processando = false;
          console.error('Erro ao buscar os dados.', error);
        }
      );
  }

  apagaDados() {
    let params = new HttpParams();
    params = params.append('dataViagem', this.dataViagemYyyymmdd);

    this.http
      .get<any>(environment.urlBase + '/api/apaga.php', { params: params })
      .subscribe((data) => {
        this.routerInfo.next(true);
      });
  }
}
