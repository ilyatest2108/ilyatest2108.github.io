export default function toggleCart() {
    const btnCart = document.querySelector("#cart");
    const modalCart = document.querySelector(".cart");
    const btnClose = document.querySelector(".cart-close");
    const countGoods = document.querySelector(".counter");

    btnCart.addEventListener("click", () => {
        modalCart.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    btnClose.addEventListener("click", () => {
        modalCart.style.display = "none";
        document.body.style.overflow = "";
    });
}