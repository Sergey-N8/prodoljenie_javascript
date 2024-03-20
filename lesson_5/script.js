// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.


// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).


const parseData = JSON.parse(data);
const container = document.querySelector("div.container");

parseData.forEach(element => {
    const titleH2 = document.createElement("h2");
    titleH2.classList.add("title_H2");
    titleH2.textContent = element.activity;
    container.appendChild(titleH2);

    const article = document.createElement("p");
    article.classList.add("article");
    article.textContent = "артикул: " + element.key;
    article.style.fontSize = element.key_size + "px";
    article.style.color = "red";
    container.appendChild(article);

    const textP = document.createElement("p");
    textP.classList.add("text_p");
    textP.textContent = element.text;
    container.appendChild(textP);

    const parce = document.createElement("p");
    parce.classList.add("price");
    parce.textContent = "Цена: " + element.price + " рублей";
    container.appendChild(parce);

    const link = document.createElement("a");
    link.classList.add("link");
    link.textContent = "Подробнее ===>"
    link.href = element.link;
    container.appendChild(link);
});