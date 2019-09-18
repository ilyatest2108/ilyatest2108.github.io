export default function actionPage() {
    const cards = document.querySelectorAll(".goods .card");
    const discountCheckBox = document.querySelector("#discount-checkbox");
    const max = document.querySelector("#max");
    const min = document.querySelector("#min");
    const search = document.querySelector(".search-wrapper_input");
    const searchBtn = document.querySelector(".search-btn");

    searchBtn.addEventListener("click", () => { //клик и вывод текста поиска
        const searchText = new RegExp(search.value.trim(), "i"); //регулярные выражения
        //флаг "i" уберает регистр поиска
        cards.forEach((item) => {
            const title = item.querySelector(".card-title"); //текст в карточках
            if (!searchText.test(title.textContent)) { //проверка, есть ли в тайтле наш поисковый текст
                item.parentNode.style.display = "none";
            } else {
                item.parentNode.style.display = "";
            }
        });
        search.value = "";
    });


   

    function filterPrice() {
        cards.forEach((item) => {
            const cardPrice = item.querySelector(".card-price");
            const price = parseFloat(cardPrice.textContent); //парсим цену в карточке

            if (price >= min.value && !max.value) {
                item.parentNode.style.display = "";
            } else if (price >= min.value && price <= max.value) {
                item.parentNode.style.display = ""; //обращаемся к родителю
            } else if (!min.value && !max.value) {
                item.parentNode.style.display = ""; //обращаемся к родителю
            } else {
                item.parentNode.style.display = "none"; //обращаемся к родителю
            }
        });
    }


    min.addEventListener("change", filterPrice);
    max.addEventListener("change", filterPrice);
}