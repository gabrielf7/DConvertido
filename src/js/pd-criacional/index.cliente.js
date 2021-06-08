import { BuilderConcreto } from './classes/BuilderConcreto.js';
import { Diretor } from './classes/BuilderDiretor.js';

function BuilderCliente(diretor, value, toValue, fromCurrency, toCurrency) {
  var builder = new BuilderConcreto(value, toValue, fromCurrency, toCurrency);
  diretor.setBuilder(builder);

  diretor.buildConversao();
  builder.getProduto().ConverterValores();
}

export function executarBuilderCliente(
  value, toValue, fromCurrency, toCurrency
) {
  var diretor = new Diretor();
  return BuilderCliente(diretor, value, toValue, fromCurrency, toCurrency);
}
