const arrows =document.querySelectorAll(".arrow");
const music_lists=document.querySelectorAll(".music-list");

arrows.forEach((arrow,i)=>{
    const item_number= music_lists[i].querySelectorAll("img").length;
    let click_counter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth / 335) ;
        click_counter++;
        if(item_number-(4 + click_counter) + (4 - ratio) >= 0){
            music_lists[i].style.transform=`translateX(${music_lists[i].computedStyleMap().get("transform")[0].x.value-365}px)`;
        } else {
            music_lists[i].style.transform="translateX(0)";
            click_counter=0;
        }
         
    });
    console.log(Math.floor(window.innerWidth / 335));
}); 



//toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.music-list-title,.navbar-container,.sidebar,.left-menu-icons,.toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})