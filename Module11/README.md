# Модули

В файле <code>myMathModule.js</code>:

1. Создайте функцию <code>getTriangleArea</code>, которая принимает два аргумента <code>h</code> и <code>b</code> и вычисляет площадь треугольника по формуле <code>A&nbsp;=&nbsp;1&nbsp;/&nbsp;2&nbsp;⋅&nbsp;h&nbsp;⋅&nbsp;b</code>, где <code>h</code> — высота, а <code>b</code> — основание треугольника.

2. Экспортируйте функцию.

<hr/>

В файле <code>solution.js</code>:

1. Импортируйте <code>getTriangleArea</code> из модуля <code>myMathModule</code>.

2. Создайте функцию, которая принимает аргумент <code>n</code> и возвращает площадь треугольника высотой <code>n</code> и основанием <code>n<sup>2</sup>&nbsp;/&nbsp;2</code>. Используйте функцию <code>square</code>.

3. Экспортируйте созданную функцию по умолчанию.

## Примеры

```javascript
getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;
```
