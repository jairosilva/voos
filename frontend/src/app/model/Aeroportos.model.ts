export class Aeroporto {
  constructor(public origem: string,
              public destino: string,
              public maior_distancia: number,
              public menor_distancia: number,
              public duracao: number,
              public aeronave: string) {}
}
