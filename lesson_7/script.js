const parseData = JSON.parse(data);
const container = document.querySelector("section.products");

// parseData.forEach(element => {
//     const productArticle = document.createElement("article");
//     productArticle.classList.add("products__article");
//     container.appendChild(productArticle);

//     const productPicture = document.createElement("a");
//     productPicture.classList.add("products__picture");
//     productPicture.href = element.products__picture;
//     productArticle.appendChild(productPicture);

//     const productImg = document.createElement("img");
//     productImg.classList.add("products__img");
//     productImg.src = element.products__img;
//     productImg.alt = element.products__img.alt;
//     productPicture.appendChild(productImg);

//     const productZatemnenie = document.createElement("span");
//     productZatemnenie.classList.add("products__zatemnenie");
//     productPicture.appendChild(productZatemnenie);

//     const productZatemnenieButton = document.createElement("img");
//     productZatemnenieButton.src = element.zatemnenieButton;
//     productZatemnenieButton.alt = element.zatemnenieButton.alt;
//     productZatemnenie.appendChild(productZatemnenieButton);

//     const productTextBox = document.createElement("div");
//     productTextBox.classList.add("products__text");
//     productArticle.appendChild(productTextBox);

//     const productH5 = document.createElement("h5");
//     productH5.classList.add("products__h5");
//     productH5.textContent = element.products__h5;
//     productTextBox.appendChild(productH5);

//     const productTextP = document.createElement("p");
//     productTextP.classList.add("products__p");
//     productTextP.textContent = element.products__p;
//     productTextBox.appendChild(productTextP);

//     const productPrace = document.createElement("p");
//     productPrace.classList.add("products__prace");
//     productPrace.textContent = element.products__prace;
//     productTextBox.appendChild(productPrace);
// });



const template = new_template.content;

parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector(".products__article").setAttribute('Keyy', element.products__picture);
    newTemplate.querySelector(".products__picture").href = element.products__picture;
    newTemplate.querySelector(".products__img").src = element.products__img;
    newTemplate.querySelector(".products__img").alt = element.products__img.alt;
    newTemplate.querySelector("span.products__zatemnenie > img").src = element.zatemnenieButton;
    newTemplate.querySelector("span.products__zatemnenie > img").alt = element.zatemnenieButton.alt;
    newTemplate.querySelector(".products__h5").innerHTML = element.products__h5;
    newTemplate.querySelector(".products__p").innerHTML = element.products__p;
    newTemplate.querySelector(".products__prace").innerHTML = "$" + element.products__prace;
    container.appendChild(newTemplate);
});

const containerBasket = document.querySelector("div.basket__left");

const basketTemplate = basket_template.content;

const arrBasketProd = [];

let clickEl = document.querySelectorAll(".products__article");
clickEl.forEach(productsEL => {
    productsEL.addEventListener('click', function () {
        const clickDiv = document.querySelector('div.basket__left');
        clickDiv.setAttribute('style', 'padding-top: 30px; padding-bottom: 30px')
        if (!arrBasketProd.find((e) => e === productsEL.getAttribute('Keyy'))) {
            parseData.forEach(el => {
                if (el.products__picture === productsEL.getAttribute('Keyy')) {
                    const newBasketTemplate = basketTemplate.cloneNode(true);
                    newBasketTemplate.querySelector(".basket__product").setAttribute('Keyy', el.products__picture);
                    newBasketTemplate.querySelector(".basket__img").src = el.products__img;
                    newBasketTemplate.querySelector(".basket__p_prace").innerHTML = el.products__prace;
                    newBasketTemplate.querySelector(".basket__close").setAttribute('Keyy', el.products__picture);
                    containerBasket.appendChild(newBasketTemplate);
                    arrBasketProd.push(productsEL.getAttribute('Keyy'));
                    console.log(productsEL)
                };
            });
        } else {
            basketQuantityAll = document.querySelectorAll(".basket__product");
            basketQuantityAll.forEach(basketProEl => {
                if (basketProEl.getAttribute('Keyy') === productsEL.getAttribute('Keyy')) {
                    let addQ = basketProEl.querySelector("input.basket__quantity_input");
                    addQ.value = parseInt(addQ.value) + 1;
                };
            });
        };
    });

});

window.addEventListener('click', function () {
    closeArrBtn = document.querySelectorAll(".basket__close");
    closeArrBtn.forEach(el => {
        el.addEventListener('click', function () {
            for (let i = 0; i < arrBasketProd.length; i++) {
                if (arrBasketProd[i] === el.name) {
                    delete arrBasketProd[i];
                };
            }
            el.parentElement.parentElement.parentElement.remove();
        });
    });
});