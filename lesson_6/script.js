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
console.log(template);

parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    console.log(newTemplate.querySelector(".products__picture"));
    newTemplate.querySelector(".products__picture").href = element.products__picture;
    newTemplate.querySelector(".products__img").src = element.products__img;
    newTemplate.querySelector(".products__img").alt = element.products__img.alt;
    newTemplate.querySelector("span.products__zatemnenie > img").src = element.zatemnenieButton;
    newTemplate.querySelector("span.products__zatemnenie > img").alt = element.zatemnenieButton.alt;
    newTemplate.querySelector(".products__h5").innerHTML = element.products__h5;
    newTemplate.querySelector(".products__p").innerHTML = element.products__p;
    newTemplate.querySelector(".products__prace").innerHTML = element.products__prace;
    container.appendChild(newTemplate);
    console.log(element.products__picture);
});