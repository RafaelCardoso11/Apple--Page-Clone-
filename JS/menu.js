let showMenu = true;
let showSearch = true;

const menuClick = document.querySelector(".menu-mobile")
const showMenuClose = document.querySelector(".menu");
const showMenuMobile = document.querySelector(".menu-mobile-click");

const searchMenu = document.querySelector(".menu");
const searchClick = document.querySelector(".search");

const menuEnd = document.querySelector("footer .items-container ul h3");
const menuEndShow = document.querySelector("footer .items-container");

menuClick.addEventListener("click", ()=>{
        showMenuClose.classList.toggle("on", showMenu)
        showMenuMobile.classList.toggle("on", showMenu)
        showMenu = !showMenu;
})

searchclick.addEventListener("click", ()=>{
    searchMenu.classList.toggle("search", showSearch)
    let showSearch = !showSearch;
})

menuEnd.addEventListener("click"), ()=>{
    menuEndShow.classList.toggle("on", true)
}
