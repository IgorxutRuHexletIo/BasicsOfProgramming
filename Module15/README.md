# Ошибки и отладка

Ошибки в программах это то что делает их не работоспособными и в обычной ситуации мы их избегаем и стараемся исправить. Данное упражнение делает наоборот, мы хотим чтобы ваша программа привела к ошибке, таким образом вы лучше поймете как возникают ошибки и вам станет легче при отладке в будущем.

<code>reference.js</code>:

Экспортируйте функцию по умолчанию, вызов которой, приводит к ошибке типа <code>ReferenceError</code>.

<code>type.js</code>:

Экспортируйте функцию по умолчанию, вызов которой, приводит к ошибке типа <code>TypeError</code>.

## Подсказки

<code>ReferenceError</code> возникает в случае обращения к несуществующему идентификатору. Например можно попытаться вернуть из функции что то, что не определено или написать выражение внутри которого фигурирует имя не определенного идентификатора.

<code>TypeError</code> возникает в случае неправильного использования типа, например мы пытаемся вызвать константу, которая является числом, как функцию.