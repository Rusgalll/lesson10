
const body = document.body;
body.style.backgroundImage = "url('image/you-dont-know-js.jpg')"; // изменил фон

const book = document.querySelectorAll('.book');
const books = document.querySelectorAll('.books');

books[0].append(book[2]);
books[0].prepend(book[1]);
book[3].before(book[4]); // поменял порядок книг

const adv = document.querySelector('.adv');
adv.remove(); // удалил рекламу

const book3 = document.querySelectorAll('a');
book3[2].textContent = 'Книга 3. this и Прототипы Объектов'; // изменил заголовок 3 книги

const ulElements = document.querySelectorAll('ul');
const liElements = ulElements[1].querySelectorAll('li');

liElements[10].before(liElements[2]);
liElements[3].after(liElements[6]);
liElements[6].after(liElements[8]); // изменил оглавление 2 книги

const liElements2 = ulElements[4].querySelectorAll('li');

liElements2[1].after(liElements2[9]);
liElements2[9].after(liElements2[3]);
liElements2[3].after(liElements2[4]);
liElements2[2].after(liElements2[6]);
liElements2[6].after(liElements2[7]); // изменил оглавние книги 5

const chapterBook6 = document.createElement('li');
ulElements[5].append(chapterBook6);
chapterBook6.textContent = 'Глава 8: За пределами ES6';

const liElements3 = ulElements[5].querySelectorAll('li');
liElements3[8].after(liElements3[10]); // добавил главу 8 в 6 книгу









