/* ================ SHOW MENU ================ */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener ('click', () => {

        // ? We add the show-menu class to the div tag with the nav-menu class
        nav.classList.toggle('show-menu')
    })
    }
}
showMenu('nav-toggle','nav-menu')

/* ================ REMOVE MENU MOBILE ================ */
function linkAction () {
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// /*=========create for loop logic ===============*/ 
const searchUniversty=(data , name)=>{
    return data.filter(ele=>{
        console.log(ele,79856444444444444444444)
        return ele.name.includes(name)  
    })
}