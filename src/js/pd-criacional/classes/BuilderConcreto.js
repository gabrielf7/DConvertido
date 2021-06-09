import { Produto } from './BuilderProduto.js';

export class BuilderConcreto {
  constructor(value, toValue, fromCurrency, toCurrency) {
    this.value = value;
    this.toValue = toValue;
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    this.reset();
  }

  reset() {
    this.produto = new Produto();
  };

  produzirCalc() {
    fetch(`https://free.currconv.com/api/v7/convert?apiKey=3ccabbdf79b2847ab9fe&q=${this.fromCurrency.value}_${this.toCurrency.value}&compact=y`)
    .then((response) => response.json())
    .then((rate) => { 
      this.toValue.value = (
        this.value * rate[`${this.fromCurrency.value}_${this.toCurrency.value}`].val
      ).toFixed(8)
    })
    .catch((e) => console.log(e));

    this.produto.parteProduto.push(this.toValue.value);
  };

  getProduto() {
    var resultadoProduto = this.produto;
    this.reset();
    return resultadoProduto;
  };
}
