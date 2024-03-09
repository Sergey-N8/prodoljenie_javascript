// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов

const elAll = document.querySelectorAll(".dropdown-item");
elAll.forEach(el => {
    el.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnAll = document.querySelectorAll(".btn");
btnAll.forEach(el => {
    if (el.classList.contains("btn-secondary")) {
        el.classList.remove("btn-secondary");
    } else {
        el.classList.add("btn-secondary");
    }
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div с классом "dropdown" следующую разметку: <a href="#">link</a>

const dropdownEl = document.querySelector("div.dropdown");
dropdownEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

idEl = document.querySelector("#dropdownMenuButton");
idEl.setAttribute("id", "superDropdown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const findEl = document.querySelector("[aria-labelledby='dropdownMenuButton']");
//console.log(findEl);
findEl.dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const typeEl = document.querySelector(".dropdown-toggle");
typeEl.removeAttribute("type");