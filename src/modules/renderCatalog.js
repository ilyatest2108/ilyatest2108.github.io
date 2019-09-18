
export default function renderCatalog() { //добавляем каталог
    const cards = document.querySelectorAll(".goods .card");
    const catalogBtn = document.querySelector(".catalog-button");
    const catalogList = document.querySelector(".catalog-list"); //будущий список лишек
    const catalogWrapper = document.querySelector(".catalog");
    const category = new Set(); //коллекции
    cards.forEach(item => {
        category.add(item.dataset.category) //добавляем категорию(элементов) в коллекцию
    });
    category.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        catalogList.appendChild(li);
    });


    const allli = catalogList.querySelectorAll("li");


    catalogBtn.addEventListener("click", (event) => { //фильтр по саталог-атрибуту
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = "";
        } else {
            catalogWrapper.style.display = "block";
        }

        if (event.target.tagName === "LI") {
            cards.forEach(item => {
                if (item.dataset.category === event.target.textContent) {
                    item.parentNode.style.display = "";
                } else {
                    item.parentNode.style.display = "none";
                }
            });
            allli.forEach((item) => {
                if(item === event.target){
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
    });
}