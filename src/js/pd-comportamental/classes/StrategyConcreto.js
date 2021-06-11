export class StrategyConcreto {
  constructor() {
    this.pares = [{ par: "BTC"}, { par: "BRL"}];
  }

  infoTexto(name, valor) {
    let resultName = this.pares.find((elemento) => {
      return elemento.par === `${name}`;
    });

    if (resultName.par === 'BTC'){
      return `
        (${name} V) - Valor Inserido: ${valor}

        A sigla BTC representa a criptomoeda Bitcoin, que é uma criptomoeda descentralizada, sendo um dinheiro eletrônico para transações ponto-a-ponto. O primeiro artigo descrevendo uma implementação do Bitcoin foi apresentado em 2007 na lista de discussão The Cryptography Mailing por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto
      `;
    }

    if (resultName.par === 'BRL'){
      return `
        (${name} V) - Valor Inserido: ${valor}

        A sigla BRL representa a moeda brasileira Real, que é a moeda corrente oficial da República Federativa do Brasil. Após sucessivas trocas monetárias, o Brasil adotou o real em 1 de julho de 1994, que, aliado à drástica queda das taxas de inflação, constituiu uma moeda estável para o país.
      `;
    }
  }
}