"use strict";
import  getData from "./modules/getData";
import  renderCards from "./modules/renderCards";
import  renderCatalog from "./modules/renderCatalog";
import  toggleCheckbox from "./modules/toggleCheckbox";
import  toggleCart from "./modules/toggleCart";
import  cartWork from "./modules/cartWork";
import  actionPage from "./modules/actionPage";
import action from "./modules/action";


getData().then((data) => { //порядок асинхронного выполнения функций
    renderCards(data);
    renderCatalog();
    toggleCheckbox();
    toggleCart();
    cartWork();
    actionPage();
    action();
});