import createMenuPage from './ourMenu.js';
import createContent from './pageLoad.js';
import createAboutPage from './aboutPage.js';
let eve = 0
let eventListeners = [loadMainPage, loadMenuPage, loadAboutPage]
createContent()
function loadMainPage(){
    var mainContainer=document.getElementById("content");
    //remove it from DOM
    mainContainer.parentNode.removeChild(mainContainer);
    //remove all items inside
    mainContainer.innerHTML = "";
    //clear the body
    document.body.innerHTML = "";
    //append it back
    document.body.appendChild(mainContainer);
    createContent()
    let navbar = document.querySelector('nav')
    navbar.querySelectorAll('p').forEach(function(item){
    item.addEventListener('click', eventListeners[eve])
    eve++
})
}
function loadMenuPage(){
    var mainContainer=document.getElementById("content");
    //remove it from DOM
    mainContainer.parentNode.removeChild(mainContainer);
    //remove all items inside
    mainContainer.innerHTML = "";
    //clear the body
    document.body.innerHTML = "";
    //append it back
    document.body.appendChild(mainContainer);
    createMenuPage()
}
function loadAboutPage(){
    var mainContainer=document.getElementById("content");
    //remove it from DOM
    mainContainer.parentNode.removeChild(mainContainer);
    //remove all items inside
    mainContainer.innerHTML = "";
    //clear the body
    document.body.innerHTML = "";
    //append it back
    document.body.appendChild(mainContainer);
    createAboutPage()
}
let navbar = document.querySelector('nav')
navbar.querySelectorAll('p').forEach(function(item){
    item.addEventListener('click', eventListeners[eve])
    eve++
})
export {loadMainPage, loadAboutPage, loadMenuPage}
console.log('script is running')