import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { VoosService } from './voos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataViagem = '';
  processando = false;
  textoBotao = 'Processar';

  constructor(private voosService: VoosService, private http: HttpClient) {}

  ngOnInit(): void {
    this.dataViagem = this.voosService.dataViagem;

    this.voosService.processamentoConcluido.subscribe((data) => {
      this.processando = false;
      this.textoBotao = 'Processar';
    });
  }

  processaVoos() {
    this.processando = true;
    this.textoBotao = 'Processando';

    this.voosService.atualizaDados();
  }

  apaga() {
    this.voosService.apagaDados();
  }
}
