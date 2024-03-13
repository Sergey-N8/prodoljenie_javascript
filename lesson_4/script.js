document.addEventListener('DOMContentLoaded', function () {
    // Повторить то, что было на семинаре, либо решить следщие задачи
    // Выполнить все задачи в теге script.Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

    // 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input тег span также должен меняться.

    const fromEl = document.querySelector("input#from");
    const spanEl = document.querySelector("span");
    fromEl.addEventListener('keypress', function (e) {
        spanEl.innerHTML += e.key;
    });

    // 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
    // - добавить два класса: animate_animated и animate_fadeInLeftBig
    // - поставить данному элементу стиль visibility в значение 'visible'.

    const btnEl = document.querySelector("button.messageBtn");
    const messageEl = document.querySelector(".message");
    messageEl.style.visibility = 'hidden'; // этого не было в задании
    btnEl.addEventListener('click', function (e) {
        messageEl.classList.add("animate_animated");
        messageEl.classList.add("animate_fadeInLeftBig");
        messageEl.style.visibility = 'visible';
    });

    // 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
    // - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
    // - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

    const formEls = document.querySelectorAll('.form-control');
    const formBtn = document.querySelector("button.form-btn");
    formBtn.addEventListener('click', function (e) {
        e.preventDefault();
        formEls.forEach(el => {
            if (el.value === "") {
                el.classList.add("error");
            } else {
                el.classList.remove("error");
                return;
            }
        });
    });
});