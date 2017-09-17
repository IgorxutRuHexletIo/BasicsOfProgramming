# Switch

Функция <code>calc</code> представляет из себя простейший калькулятор, которому передается бинарная операция, а также два числа, а на выходе получается результат применения операции к этим числам.

Реализуйте и экспортируйте по умолчанию функцию <code>calc</code>, аргументами которой являются:

 - Операция в виде строки. Поддерживаются <code>+</code>, <code>-</code>, <code>/</code>, <code>*</code>.
 - Первый операнд.
 - Второй операнд.

Если передается операция, которая не поддерживается, то функция должна вернуть <code>NaN</code>.

## Примеры

```javascript
calc('+', 3, 10);  // 13
calc('-', -8, 6);  // -14
calc('$', 0, 9);  // NaN
```