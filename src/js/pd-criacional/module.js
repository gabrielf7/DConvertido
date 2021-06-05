export class Builder {
  constructor(props) {
    this.value = props.value;
    this.toValue = props.toValue;
    this.fromCurrency = props.fromCurrency;
    this.toCurrency = props.toCurrency;
  }

  convert() {
    errorMessage.style.display = 'none';
    fetch(`https://free.currconv.com/api/v7/convert?apiKey=d4cf3228112bfb5a29f5&q=${this.fromCurrency.value}_${this.toCurrency.value}&compact=y`)
      .then((response) => response.json())
      .then((rate) => { 
        this.toValue.value = (
          this.value * rate[`${this.fromCurrency.value}_${this.toCurrency.value}`].val
        ).toFixed(8) 
      })
      .catch((e) => console.log(e));
  }
}