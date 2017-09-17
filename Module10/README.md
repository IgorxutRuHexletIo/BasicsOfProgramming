# Выражения

Реализуйте функцию <code>square</code>, которая возвращает квадрат числа.

Реализуйте функцию <code>sumOfSquares</code>, которая возвращает сумму квадратов двух чисел.

Реализуйте функцию <code>squareSumOfSquares</code>, которая возвращает квадрат суммы квадратов двух чисел.

Обратите внимание на то, что самостоятельно вызывать их не надо. Это делает проверяющая система в файле <code>__tests__/squares.tests.js</code>

## Примеры

```javascript
square(5); // 25
square(10); // 100
sumOfSquares(5, 10); // 125
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4
squareSumOfSquares(2, 3); // 169
```

## Подсказки

Функция <code>square</code> может быть использована внутри <code>sumOfSquares</code>

Функция <code>sumOfSquares</code> может быть использована внутри <code>squareSumOfSquares</code>
