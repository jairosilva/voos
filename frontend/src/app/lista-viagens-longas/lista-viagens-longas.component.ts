import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Viagem } from '../model/Viagem.model';
import { VoosService } from '../voos.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-lista-viagens-longas',
  templateUrl: './lista-viagens-longas.component.html',
  styleUrls: ['./lista-viagens-longas.component.css'],
})
export class ListaViagensLongasComponent implements OnInit {
  dataSource: Viagem[] = [];
  displayedColumns: string[] = [
    'linha',
    'origem',
    'destino',
    'distancia',
    'duracao',
    'aeronave',
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
    this.voosService.buscaVoos().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.log('Erro ao buscar os dados.');
      }
    );
  }
}
