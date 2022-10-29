import { loadMainPage, loadMenuPage, loadAboutPage } from "./index.js"
export default function createAboutPage(){
    const container = document.getElementById('content')
    const nav = document.createElement('nav')
    const navs = document.createElement('div')
    const footer = document.createElement('footer')

    let pValueArray = [`<a>Home</a>`, 
    `<a onclick="console.log('bbbb')">Our Menu</a>`, `<a onclick="console.log('c')">About</a>`]
    let p = 0
    let footerArray = ["Copyright Restaurant©", "Made by Angry3vilbot"]
    let f = 0
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
    footer.append(document.createElement('p'), document.createElement('p'))
    footer.querySelectorAll('p').forEach(function(item){
        item.innerHTML = footerArray[f]
        f++
    })
    container.append(document.createElement('h1'), document.createElement('div'))
    container.querySelector('h1').innerHTML = 'About'
    container.querySelector('h1').id = 'about-header'
    container.querySelector('div').id = 'about-container'
    container.querySelector('div').append(document.createElement('p'))
    container.querySelector('p').innerHTML = `This is an example of a website, which is dynamically generated from different
    JavaScript files using Webpack. Made during the course of learning JS using The Odin Project course`
    nav.append(document.createElement('h2'), navs)
    nav.firstChild.innerHTML = 'Restaurant'
    document.body.prepend(nav)
    document.body.append(footer)
}