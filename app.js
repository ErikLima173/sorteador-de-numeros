function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (de >= ate) {
    mostrarModal('“O número inicial precisa ser menor que o final. Verifique!”');
    return;
  }

  let sorteados = [];
  let numero;

  if (quantidade > (ate - de + 1)) {
    mostrarModal('Quantidade maior que o intervalo entre ‘Do número’ e ‘Até o número’. Verifique!');
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  alterarStatusBtn();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBtn() {
  let btn = document.getElementById('btn-reiniciar');

  if (btn.classList.contains('container__botao-desabilitado')) {
    btn.classList.remove('container__botao-desabilitado');
    btn.classList.add('container__botao');
  } else {
    btn.classList.add('container__botao-desabilitado');
    btn.classList.remove('container__botao');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
  alterarStatusBtn();
}

function mostrarModal(mensagem) {
  const modal = document.getElementById('modal-alert');
  const msg = document.getElementById('modal-message');
  const btnFechar = document.getElementById('modal-close-btn');

  msg.textContent = mensagem;
  modal.style.display = 'flex';

  btnFechar.onclick = () => {
    modal.style.display = 'none';
  };

  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
