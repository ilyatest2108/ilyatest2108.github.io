export default function action() {
    const cards = document.querySelectorAll(".goods .card");
    const discountCheckBox = document.querySelector("#discount-checkbox");
    const max = document.querySelector("#max");
    const min = document.querySelector("#min");
    cards.forEach((item) => {
        if (discountCheckBox.checked) {
            if (!item.querySelector(".card-sale")) { //если нет класса "акции"
                item.parentNode.style.display = "none"; //обращаемся к родителю
            }
        } else {
            item.parentNode.style.display = ""; //обращаемся к родителю
        }
    });
    discountCheckBox.addEventListener("click", action);
}