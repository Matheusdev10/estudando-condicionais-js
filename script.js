// -------------------------IF/ELSE--------------------------

// let temperature = 36.9
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature) {
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

// -------------------------SWITCH CASE--------------------------

// let expression = '';

// switch (
//   expression // puxa a expressão para o switch
// ) {
//   case 'a': // confere se o valor da expressão é o correto
//     console.log('a');
//     break; // para a execução do switch apenas se verdadeiro
//   case 'b':
//     console.log('b');
//     break;
//   default: // caso nenhum valor seja o correto, realizará a
//     //instrução dentro de si.
//     console.log('default');
//     break;
// }

// function calculate(number1, operator, number2) {
//   let result = 0;

//   switch (operator) {
//     case '+':
//       result = number1 + number2;
//       break;
//     case '-':
//       result = number1 - number2;
//       break;
//     case '*':
//       result = number1 * number2;
//       break;
//     case '/':
//       result = number1 / number2;
//       break;
//     default:
//       console.log('não implementado');
//       break;
//   }

//   return result;
// }

// console.log(calculate(3, '+', 5));

// -------------------------THROW/ TRY CATCH--------------------------
// throw significa lançar
// try - tentar
// catch vai capturar

const sayMyName = (name = '') => {
  if (name === '') {
    throw 'nome é necessário';
  }
};

try {
  sayMyName();
} catch (e) {
  console.log(e);
}
// se eu rodar a funçao sayMyName fora do catch
// vai dar um erro pois nao tem o catch pra capturar
// o erro
