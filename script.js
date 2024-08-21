const hideMenu = document.querySelector('.hide-menu')
const openMenu = document.querySelector('.open-menu')
const nav = document.querySelector('.nav')

// console.log(hideMenu, openMenu); 


hideMenu.onclick = () => {
    nav.style.display = "none"
    console.log("none")
}

openMenu.onclick = () => {
    nav.style.display = "flex"
    console.log("flex")

}
