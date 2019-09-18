export default function getData() {
    const goodsWrapper = document.querySelector(".goods");
    return fetch('../db/db.json')
        .then((response) => { //обработчик после ыполнения
            if (response.ok) {
                return response.json(); //возвращаем данные в json-формате
            } else {
                throw new Error("Данные не были полученны: " + response.status);
            }
        })
        .then((data) => { //!!!!!!!!!!
            return data; //обрабатываем json-файл (функция создается ниже)

        })
        .catch((err) => { //обработчик ошибки
            console.warn(err);
            goodsWrapper.innerHTML = '<div style="color:red; font-size:40px">Упс что-то пошло не так!</div>'
        });
}