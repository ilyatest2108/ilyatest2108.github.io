export default function toggleCheckbox() {
    const checkbox = document.querySelectorAll("#discount-checkbox");

    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("change", function () {
            if (this.checked) {
                this.nextElementSibling.classList.add("checked");
            } else {
                this.nextElementSibling.classList.remove("checked");
            }
        });
    }

    checkbox.forEach((element, i) => {
        element.addEventListener("change", function () {
            if (this.checked) {
                this.nextElementSibling.classList.add("checked");
            } else {
                this.nextElementSibling.classList.remove("checked");
            }
        });
    });
}