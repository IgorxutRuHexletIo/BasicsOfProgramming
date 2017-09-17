# Цикл while и переменные

Реализуйте и экспортируйте по умолчанию функцию <code>smallestDivisor</code>, используя итеративный процесс (императивно). Функция должна находить минимальный делитель переданного числа.

Для этого достаточно последовательно проверять делимость, начиная с двойки. Если делитель не найден, значит число простое, и делителем является само число.

Если переданное число меньше единицы, то функция должна вернуть <code>NaN</code>.

## Примеры

```javascript
smallestDivisor(15);  // 3
smallestDivisor(17);  // 17

smallestDivisor(0);  // NaN
smallestDivisor(-3);  // NaN
```