const startConverter = () => {
  const selectors = document.querySelectorAll('.currencySelector');
  const nameInfoTexto01 = document.querySelector('#nameInfoTexto01');
  const nameInfoTexto02 = document.querySelector('#nameInfoTexto02');
  const infoTexto01 = document.querySelector('#infoTexto01');
  const infoTexto02 = document.querySelector('#infoTexto02');
  const toName = document.querySelector('#toName');
  const fromName = document.querySelector('#fromName');
  const toCurrency = document.querySelector('#toCurrency');
  const fromCurrency = document.querySelector('#fromCurrency');
  const fromValue = document.querySelector('#fromValue');
  const toValue = document.querySelector('#toValue');
  const errorMessage = document.querySelector('#errorMessage');
  const swapButton = document.querySelector('#swapButton');

  const setCurrencies = () => {
    fromName.innerText = fromCurrency.options[fromCurrency.selectedIndex].dataset.name;
    toName.innerText = toCurrency.options[toCurrency.selectedIndex].dataset.name;
  }

  const updateAll = () => {
    setCurrencies();
  }

  const convert = (value) => {
    errorMessage.style.display = 'none';
    import('./pd-criacional/index.cliente.js')
      .then(module => {
        module.executarBuilderCliente(
          value, toValue, fromCurrency, toCurrency
        );
      })
      .catch(err => console.log("Erro: " + err.message));
  }

  const strategyComponent = () => {
    setTimeout( function() {
      nameInfoTexto01.innerText = fromCurrency.value;
      nameInfoTexto02.innerText = toCurrency.value;
      import('./pd-comportamental/index.cliente.js')
      .then(module => {
        module.executarStrategyCliente(
          fromCurrency.value,
          fromValue.value,
          toCurrency.value,
          toValue.value,
          infoTexto01,
          infoTexto02
        );
      })
      .catch(err => console.log("Erro: " + err.message));
    }, 1700);
  }

  const convertHandleChange = () => {
    !isNaN(fromValue.value) ? convert(fromValue.value) : errorMessage.style.display = 'block';
    !isNaN(fromValue.value) ? strategyComponent() : null;
  }

  const swapCurrencies = () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    updateAll();
    convertHandleChange();
  }

  toCurrency.onchange = updateAll;
  fromCurrency.onchange = updateAll;
  convertButton.onclick = convertHandleChange;
  swapButton.onclick = swapCurrencies;

  fetch('https://free.currconv.com/api/v7/currencies?apiKey=3ccabbdf79b2847ab9fe')
    .then((response) => response.json())
    .then(({ results }) => {
      const frag = document.createDocumentFragment();
      const ordered = {};
      Object.keys(results).sort().forEach(function (key) {
        ordered[key] = results[key];
      });
      for (const cur in ordered) {
        if (results.hasOwnProperty(cur)) {
          const option = document.createElement('option');
          option.setAttribute('value', results[cur].id);
          option.dataset.name = results[cur].currencyName;
          option.innerText = results[cur].id;
          frag.append(option);
        }
      }
      return [frag, frag.cloneNode(true)];
    })
    .then((frags) => {
      selectors.forEach((selector, key) => {
        selector.appendChild(frags[key]);
      })
      setCurrencies();
    })
    .catch((e) => console.log(Error(e)));
}

window.addEventListener('load', startConverter);