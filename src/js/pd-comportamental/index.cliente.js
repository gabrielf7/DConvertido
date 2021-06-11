import { StrategyContexto } from "./classes/StrategyContexto.js";
import { StrategyConcreto } from "./classes/StrategyConcreto.js";

function StrategyCliente(
  fromCurrency, fromValue, toCurrency, toValue, 
  infoTexto01, infoTexto02
) {
  const contexto = new StrategyContexto(
    fromCurrency, fromValue, toCurrency, toValue
  );
  contexto.setStrategy(new StrategyConcreto());

  contexto.setTexto(infoTexto01);
  contexto.buscarTextoDoParConverter();

  contexto.setTexto(infoTexto02);
  contexto.buscarTextoDoParConvertido();
}

export function executarStrategyCliente(
  fromCurrency, fromValue, toCurrency, toValue, 
  infoTexto01, infoTexto02
) {
  return StrategyCliente(
    fromCurrency, fromValue, toCurrency, toValue, 
    infoTexto01, infoTexto02
  );
}