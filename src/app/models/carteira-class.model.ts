export class CarteiraClass {
  id: number;
  conta_id: number;
  nome: string;
  saldo: number;
  divida: number;
  vencimento: string;

  constructor(
    id: number,
    conta_id: number,
    nome: string,
    saldo: number,
    divida: number,
    vencimento: string
  ) {
    this.id = id;
    this.conta_id = conta_id;
    this.nome = nome;
    this.saldo = saldo;
    this.divida = divida;
    this.vencimento = vencimento;
  }
}
