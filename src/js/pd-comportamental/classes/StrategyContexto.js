export class StrategyContexto {
  constructor (fromCurrency, fromValue, toCurrency, toValue) {
    this.fromCurrency = fromCurrency;
    this.fromValue = fromValue;
    this.toCurrency = toCurrency;
    this.toValue = toValue;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  setTexto(infoTexto) {
    this.infoTexto = infoTexto;
  }
 
  buscarTextoDoParConverter() {
    const resultParConverter = this.strategy.infoTexto(
      this.fromCurrency, this.fromValue
    );
    return this.infoTexto.innerText = resultParConverter;
  }

  buscarTextoDoParConvertido() {
    const resultParConvertido = this.strategy.infoTexto(
      this.toCurrency, this.toValue
    );
    return this.infoTexto.innerText = resultParConvertido;
  }
}