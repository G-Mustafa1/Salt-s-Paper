const body = document.querySelector("body");
let click = document.getElementById('click');
click.addEventListener('click', () => {
    body.classList.add("active")
    console.log(body)
})
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    body.classList.remove("active")
})