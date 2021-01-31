mula = 2;
cavalo = 4;
tigre = 7;
const subtracao = (x, y) => x - y;
const dobroSoma = (x, y) => (x + y) * 2;

result = subtracao(subtracao(dobroSoma(tigre, cavalo), 1), 0.5);
console.log(result);

