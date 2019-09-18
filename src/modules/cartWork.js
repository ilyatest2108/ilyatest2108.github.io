export default function cartWork() {
    const cards = document.querySelectorAll(".goods .card"); //корзина
    const cartWrapper = document.querySelector(".cart-wrapper"); //обертка корзины
    const cartText = document.querySelector("#cart-empty"); //текст в коржине
    const countGoods = document.querySelector(".counter"); //счетчик элементов в корзине

    cards.forEach(card => {
        const btn = card.querySelector("button");
        btn.addEventListener("click", () => {
            const cardClone = card.cloneNode(true); //копирует все элементы!!!!!!!!!!!!!!!
            cartWrapper.appendChild(cardClone);

            countCart();

            const removeBtn = cardClone.querySelector(".btn"); //переименуем кнопку
            removeBtn.textContent = "Удалить из корзины";
            removeBtn.addEventListener("click", (event) => {
                cardClone.remove();
                countCart();
            });
        });

        function countCart() {
            const cartCount = cartWrapper.querySelectorAll(".card"); //карточки в корзине
            countGoods.textContent = cartCount.length;
            const cardsPrice = cartWrapper.querySelectorAll(".card-price"); // подсчет стоимости
            const cartTotal = document.querySelector(".cart-total span"); //стоимость элементов в блоке спан
            let sum = 0;
            cardsPrice.forEach((cardPrice) => {
                sum += parseFloat(cardPrice.textContent);
            });
            cartTotal.textContent = sum; //добавляем число стоимость

            if (cartCount.length !== 0) {
                cartText.remove(); //запись пустая корзина удаляем
            } else {
                cartWrapper.appendChild(cartText); //возвращаем 
            }
        }
    });
}