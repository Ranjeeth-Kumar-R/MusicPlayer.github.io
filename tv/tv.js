const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.music-list-title,.navbar-container,.sidebar,.left-menu-icons,.toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})