import { loadMainPage, loadMenuPage, loadAboutPage } from "./index.js"
export default function createMenuPage(){
    console.log('MENUUUu')
    const container = document.getElementById('content')
    const nav = document.createElement('nav')
    const navs = document.createElement('div')
    const menuContainer = document.createElement('div')
    menuContainer.id = 'menu-items-container'
    const footer = document.createElement('footer')

    let pValueArray = [`<a>Home</a>`, 
    `<a onclick="console.log('bbbb')">Our Menu</a>`, `<a onclick="console.log('c')">About</a>`]
    let p = 0
    let foodNameArray = ['Kebab', 'Shashlik', 'Steak "Good Russian"', 'Khinkali', 'Khachapuri']
    let f = 0
    let foodImageArray = ['kebab.jpg', 'shashlik.jpg', 'steak.jpg', 'khinkali.jpg', 'khachapuri.jpeg']
    let foodDescArray = [`Kebab is a dish, made out of cubes of meat (such as lamb or beef) marinated and cooked,
     sometimes with vegetables, usually on a skewer`, `Shashlik is a hugely popular picnic food across Central Asia,
    the Caucasus, and Eastern Europe. Alternatively known as shish kebab, it simply consists of marinated meat, 
    grilled over hot coals, and has been part of Central Asian food culture for thousands of years, with variations
     of this dish being popular even with the Romans!`, `A steak is a thick cut of meat generally sliced across the 
     muscle fibers, sometimes including a bone. It is normally grilled or fried.`, `Khinkali is a very popular Georgian dumpling 
     made of twisted knobs of dough, stuffed with meat and spices.Once fully cooked, the meaty stuffing releases a rich 
     broth into the center of the dumpling.`, `Khachapuri is a traditional Georgian dish of cheese-filled bread. 
     The bread is leavened and allowed to rise, molded into various shapes, and then filled in the center with 
     a mixture of cheese, eggs, and other ingredients. The bread crust is traditionally torn off and 
     dipped into the cheese.`]
    let foodPriceArray = ['5.99$', '9.99$', '10.99$', '1.50$ per piece', '14.99$']
    let footerArray = ["Copyright Restaurant©", "Made by Angry3vilbot"]
    let foot = 0
    let eve = 0
    let eventListeners = [loadMainPage, loadMenuPage, loadAboutPage]

    navs.append(document.createElement('p'), document.createElement('p'), document.createElement('p'))
    navs.childNodes.forEach(
        function(child){
            child.innerHTML = pValueArray[p]
            child.addEventListener('click', eventListeners[eve])
            eve++
            p++
        }
    )
    nav.append(document.createElement('h2'), navs)
    nav.firstChild.innerHTML = 'Restaurant'
    document.body.prepend(nav)
    container.append(document.createElement('h1'))
    container.querySelector('h1').innerHTML = 'Menu'
    container.querySelector('h1').id = 'menu-header'
    menuContainer.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), 
    document.createElement('div'), document.createElement('div'))
    menuContainer.querySelectorAll('div').forEach(function(item){
        item.classList.add('menu-items')
        item.append(document.createElement('h3'), document.createElement('img'), document.createElement('h5'), document.createElement('p'))
        item.querySelector('h3').innerHTML = foodNameArray[f]
        item.querySelector('img').src = foodImageArray[f]
        item.querySelector('h5').innerHTML = foodDescArray[f]
        item.querySelector('p').innerHTML = foodPriceArray[f]
        f++
    })
    footer.append(document.createElement('p'), document.createElement('p'))
    footer.querySelectorAll('p').forEach(function(item){
        item.innerHTML = footerArray[foot]
        foot++
    })
    container.append(menuContainer)
    document.body.append(footer)
}