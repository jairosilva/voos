import { Component, OnInit } from '@angular/core';
import { VoosService } from '../voos.service';
import { Aeroporto } from '../model/Aeroportos.model';

@Component({
  selector: 'app-aeroportos-mais-proximos-mais-distantes',
  templateUrl: './aeroportos-mais-proximos-mais-distantes.component.html',
  styleUrls: ['./aeroportos-mais-proximos-mais-distantes.component.css']
})
export class AeroportosMaisProximosMaisDistantesComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['linha', 'sigla', 'aeroporto_mais_proximo', 'menor_distancia', 'aeroporto_mais_distante', 'maior_distancia'];

  constructor(private voosService: VoosService) { }

  ngOnInit(): void {
    this.voosService.buscaDistanciasEntreAeroportos().subscribe(
      data => {
        // console.log(data);
        this.dataSource = data;
        console.log(this.dataSource);
      },
      error => {
        console.log('Erro ao buscar os estagiários.');
      }
    );
  }
}
