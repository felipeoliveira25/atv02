function executar(fn, num1, num2) {
  if (typeof fn === 'function') {
    return fn(num1, num2);
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 'Não é possível dividir por zero';
  }
}

function calcular() {
  const operacao = prompt('Escolha uma operação: (+, -, *, /)');
  
  if (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
    console.log('Operação inválida');
    return;
  }

  const num1 = parseFloat(prompt('Digite o primeiro número:'));
  const num2 = parseFloat(prompt('Digite o segundo número:'));

  let resultado;

  switch (operacao) {
    case '+':
      resultado = executar(somar, num1, num2);
      break;
    case '-':
      resultado = executar(subtrair, num1, num2);
      break;
    case '*':
      resultado = executar(multiplicar, num1, num2);
      break;
    case '/':
      resultado = executar(dividir, num1, num2);
      break;
  }

  document.write('Resultado:', resultado);
}

calcular();
