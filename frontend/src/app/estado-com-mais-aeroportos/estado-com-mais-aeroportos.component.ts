import { Component, OnInit } from '@angular/core';
import { VoosService } from '../voos.service';

@Component({
  selector: 'app-estado-com-mais-aeroportos',
  templateUrl: './estado-com-mais-aeroportos.component.html',
  styleUrls: ['./estado-com-mais-aeroportos.component.css']
})
export class EstadoComMaisAeroportosComponent implements OnInit {

  siglaUf = '';
  quantidadeAeroportos = 0;

  constructor(private voosService: VoosService) { }

  ngOnInit(): void {
    this.voosService.buscaEstadoComMaisAeroportos().subscribe(
      data => {
        this.siglaUf = data[0].uf;
        this.quantidadeAeroportos = data[0].qtd;
      },
      error => {
        console.log('Erro ao buscar os estagiários.');
      }
    );
  }

}
