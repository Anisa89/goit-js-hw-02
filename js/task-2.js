/*Напиши скрипт подсчета стоимости гравировки украшений.
Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова,
и возвращающую цену гравировки всех слов в строке.*/

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ").length;
  const totalPrice = words * pricePerWord;
  return totalPrice;
  // твой код
};

console.log(`Price for work is: ${calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)}`); // 80

console.log(`Price for work is: ${calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)}`); // 160

console.log(`Price for work is: ${calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)}`); // 240

console.log(`Price for work is: ${calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)}`); // 120
