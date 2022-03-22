let botao_pop = document.getElementById("popup_form");
botao_pop.addEventListener("click", function () {
    document.querySelector("#bg_modal").style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
});
let botao_close = document.getElementById('content-close');
botao_close.addEventListener("click", function () {
    document.querySelector('#bg_modal').style.display = "none";
    document.querySelector('body').style.overflow = "visible";
})