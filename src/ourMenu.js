import { loadMainPage, loadMenuPage, loadAboutPage } from "./index.js"
export default function createMenuPage(){
    console.log('MENUUUu')
    const container = document.getElementById('content')
    const nav = document.createElement('nav')
    const navs = document.createElement('div')
    const footer = document.createElement('footer')

    let pValueArray = [`<a>Home</a>`, 
    `<a onclick="console.log('bbbb')">Our Menu</a>`, `<a onclick="console.log('c')">About</a>`]
    let p = 0
    let foodNameArray = ['Kebab', 'Shashlik', 'Steak "Good Russian"', 'Khinkali']
    let f = 0
    let foodImageArray = ['kebab.jpg', 'shashlik.jpg', 'steak.jpg', 'khinkali.jpg']
    let fi = 0
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
    container.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), 
    document.createElement('div'), document.createElement('div'))
    container.querySelectorAll('div').forEach(function(item){
        item.classList.add('menu-items')
        item.append(document.createElement('h3'), document.createElement('img'))
        item.querySelector('h3').innerHTML = foodNameArray[f]
        item.querySelector('img').src = foodImageArray[fi]
        f++
        fi++
    })
}