const hideMenu = document.querySelector('.hide-menu')
const openMenu = document.querySelector('.open-menu')
const nav = document.querySelector('.nav')
const blurScreen = document.querySelector('.blur')

// console.log(hideMenu, openMenu); 


hideMenu.onclick = (e) => {
    e.preventDefault()
    nav.style.display = "none"
    blurScreen.style.display = "none"

    // console.log(1);

}

openMenu.onclick = (e) => {
    e.preventDefault()
    nav.style.display = "flex"
    blurScreen.style.display = "flex"

    // console.log(2)
}
