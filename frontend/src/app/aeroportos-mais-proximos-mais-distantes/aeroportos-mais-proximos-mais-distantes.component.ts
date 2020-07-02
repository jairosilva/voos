import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VoosService } from '../voos.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-aeroportos-mais-proximos-mais-distantes',
  templateUrl: './aeroportos-mais-proximos-mais-distantes.component.html',
  styleUrls: ['./aeroportos-mais-proximos-mais-distantes.component.css'],
})
export class AeroportosMaisProximosMaisDistantesComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = [
    'linha',
    'sigla',
    'aeroporto_mais_proximo',
    'menor_distancia',
    'aeroporto_mais_distante',
    'maior_distancia',
  ];

  constructor(private voosService: VoosService) {}

  ngOnInit(): void {
    this.atualizaTabela();

    this.voosService.routerInfo.subscribe(
      (data) => {
        this.atualizaTabela();
      },
      (error) => {
        console.log('Erro ao buscar os dados.!!!!!');
      }
    );
  }

  private atualizaTabela(): void {
    this.voosService.buscaDistanciasEntreAeroportos().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.log('Erro ao buscar os dados.');
      }
    );
  }
}
