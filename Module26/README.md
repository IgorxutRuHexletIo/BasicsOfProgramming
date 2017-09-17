# Окружение

Функции <code>lessThan</code>, <code>greaterThan</code> и <code>isEqual</code> в модуле <code>comparers</code> сравнивают две строки и возвращают <code>true</code> или <code>false</code>. Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

<hr/>

Допишите необходимые части функций для того, чтобы заработали функции <code>lessThan</code>, <code>greaterThan</code> и <code>isEqual</code>.

Функция compare, принимающая две строки <code>first</code> и <code>second</code>, работает по следующему алгоритму:

 - Если первая строка больше второй, то возвращается <code>1</code>.
 - Если вторая строка больше первой, то возвращается <code>-1</code>.
 - Иначе возвращается <code>0</code>.

## Подсказки

Функция <code>bigLettersCount</code> должна принимать на вход строку <code>str</code> и высчитывает количество заглавных символов в ней.

Вычисление длины строки: <code>length(str)</code>.

Перевод строки в верхний регистр: <code>toUpperCase(str)</code>.

Проверка на то, что символ в верхнем регистре: <code>toUpperCase(char) === char</code>;

## Примеры

```javascript
greaterThan('AD', 'ad sd');  // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd');  // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D');  // true, сравнение на < (меньше)
isEqual('liSp', 'lisP');  // true
```
