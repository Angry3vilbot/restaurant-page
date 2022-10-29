/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutPage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nfunction createAboutPage(){\r\n    const container = document.getElementById('content')\r\n    const nav = document.createElement('nav')\r\n    const navs = document.createElement('div')\r\n    const footer = document.createElement('footer')\r\n\r\n    let pValueArray = [`<a>Home</a>`, \r\n    `<a onclick=\"console.log('bbbb')\">Our Menu</a>`, `<a onclick=\"console.log('c')\">About</a>`]\r\n    let p = 0\r\n    let footerArray = [\"Copyright Restaurant©\", \"Made by Angry3vilbot\"]\r\n    let f = 0\r\n    let eve = 0\r\n    let eventListeners = [_index_js__WEBPACK_IMPORTED_MODULE_0__.loadMainPage, _index_js__WEBPACK_IMPORTED_MODULE_0__.loadMenuPage, _index_js__WEBPACK_IMPORTED_MODULE_0__.loadAboutPage]\r\n\r\n    navs.append(document.createElement('p'), document.createElement('p'), document.createElement('p'))\r\n    navs.childNodes.forEach(\r\n        function(child){\r\n            child.innerHTML = pValueArray[p]\r\n            child.addEventListener('click', eventListeners[eve])\r\n            eve++\r\n            p++\r\n        }\r\n    )\r\n    footer.append(document.createElement('p'), document.createElement('p'))\r\n    footer.querySelectorAll('p').forEach(function(item){\r\n        item.innerHTML = footerArray[f]\r\n        f++\r\n    })\r\n    container.append(document.createElement('h1'), document.createElement('div'))\r\n    container.querySelector('h1').innerHTML = 'About'\r\n    container.querySelector('h1').id = 'about-header'\r\n    container.querySelector('div').id = 'about-container'\r\n    container.querySelector('div').append(document.createElement('p'))\r\n    container.querySelector('p').innerHTML = `This is an example of a website, which is dynamically generated from different\r\n    JavaScript files using Webpack. Made during the course of learning JS using The Odin Project course`\r\n    nav.append(document.createElement('h2'), navs)\r\n    nav.firstChild.innerHTML = 'Restaurant'\r\n    document.body.prepend(nav)\r\n    document.body.append(footer)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAboutPage\": () => (/* binding */ loadAboutPage),\n/* harmony export */   \"loadMainPage\": () => (/* binding */ loadMainPage),\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _ourMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourMenu.js */ \"./src/ourMenu.js\");\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage.js */ \"./src/aboutPage.js\");\n\r\n\r\n\r\nlet eve = 0\r\nlet eventListeners = [loadMainPage, loadMenuPage, loadAboutPage]\r\n;(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nfunction loadMainPage(){\r\n    var mainContainer=document.getElementById(\"content\");\r\n    //remove it from DOM\r\n    mainContainer.parentNode.removeChild(mainContainer);\r\n    //remove all items inside\r\n    mainContainer.innerHTML = \"\";\r\n    //clear the body\r\n    document.body.innerHTML = \"\";\r\n    //append it back\r\n    document.body.appendChild(mainContainer);\r\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    let navbar = document.querySelector('nav')\r\n    navbar.querySelectorAll('p').forEach(function(item){\r\n    item.addEventListener('click', eventListeners[eve])\r\n    eve++\r\n})\r\n}\r\nfunction loadMenuPage(){\r\n    var mainContainer=document.getElementById(\"content\");\r\n    //remove it from DOM\r\n    mainContainer.parentNode.removeChild(mainContainer);\r\n    //remove all items inside\r\n    mainContainer.innerHTML = \"\";\r\n    //clear the body\r\n    document.body.innerHTML = \"\";\r\n    //append it back\r\n    document.body.appendChild(mainContainer);\r\n    (0,_ourMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\nfunction loadAboutPage(){\r\n    var mainContainer=document.getElementById(\"content\");\r\n    //remove it from DOM\r\n    mainContainer.parentNode.removeChild(mainContainer);\r\n    //remove all items inside\r\n    mainContainer.innerHTML = \"\";\r\n    //clear the body\r\n    document.body.innerHTML = \"\";\r\n    //append it back\r\n    document.body.appendChild(mainContainer);\r\n    (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n}\r\nlet navbar = document.querySelector('nav')\r\nnavbar.querySelectorAll('p').forEach(function(item){\r\n    item.addEventListener('click', eventListeners[eve])\r\n    eve++\r\n})\r\n\r\nconsole.log('script is running')\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/ourMenu.js":
/*!************************!*\
  !*** ./src/ourMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nfunction createMenuPage(){\r\n    console.log('MENUUUu')\r\n    const container = document.getElementById('content')\r\n    const nav = document.createElement('nav')\r\n    const navs = document.createElement('div')\r\n    const menuContainer = document.createElement('div')\r\n    menuContainer.id = 'menu-items-container'\r\n    const footer = document.createElement('footer')\r\n\r\n    let pValueArray = [`<a>Home</a>`, \r\n    `<a onclick=\"console.log('bbbb')\">Our Menu</a>`, `<a onclick=\"console.log('c')\">About</a>`]\r\n    let p = 0\r\n    let foodNameArray = ['Kebab', 'Shashlik', 'Steak \"Good Russian\"', 'Khinkali', 'Khachapuri']\r\n    let f = 0\r\n    let foodImageArray = ['kebab.jpg', 'shashlik.jpg', 'steak.jpg', 'khinkali.jpg', 'khachapuri.jpeg']\r\n    let foodDescArray = [`Kebab is a dish, made out of cubes of meat (such as lamb or beef) marinated and cooked,\r\n     sometimes with vegetables, usually on a skewer`, `Shashlik is a hugely popular picnic food across Central Asia,\r\n    the Caucasus, and Eastern Europe. Alternatively known as shish kebab, it simply consists of marinated meat, \r\n    grilled over hot coals, and has been part of Central Asian food culture for thousands of years, with variations\r\n     of this dish being popular even with the Romans!`, `A steak is a thick cut of meat generally sliced across the \r\n     muscle fibers, sometimes including a bone. It is normally grilled or fried.`, `Khinkali is a very popular Georgian dumpling \r\n     made of twisted knobs of dough, stuffed with meat and spices.Once fully cooked, the meaty stuffing releases a rich \r\n     broth into the center of the dumpling.`, `Khachapuri is a traditional Georgian dish of cheese-filled bread. \r\n     The bread is leavened and allowed to rise, molded into various shapes, and then filled in the center with \r\n     a mixture of cheese, eggs, and other ingredients. The bread crust is traditionally torn off and \r\n     dipped into the cheese.`]\r\n    let foodPriceArray = ['5.99$', '9.99$', '10.99$', '1.50$ per piece', '14.99$']\r\n    let footerArray = [\"Copyright Restaurant©\", \"Made by Angry3vilbot\"]\r\n    let foot = 0\r\n    let eve = 0\r\n    let eventListeners = [_index_js__WEBPACK_IMPORTED_MODULE_0__.loadMainPage, _index_js__WEBPACK_IMPORTED_MODULE_0__.loadMenuPage, _index_js__WEBPACK_IMPORTED_MODULE_0__.loadAboutPage]\r\n\r\n    navs.append(document.createElement('p'), document.createElement('p'), document.createElement('p'))\r\n    navs.childNodes.forEach(\r\n        function(child){\r\n            child.innerHTML = pValueArray[p]\r\n            child.addEventListener('click', eventListeners[eve])\r\n            eve++\r\n            p++\r\n        }\r\n    )\r\n    nav.append(document.createElement('h2'), navs)\r\n    nav.firstChild.innerHTML = 'Restaurant'\r\n    document.body.prepend(nav)\r\n    container.append(document.createElement('h1'))\r\n    container.querySelector('h1').innerHTML = 'Menu'\r\n    container.querySelector('h1').id = 'menu-header'\r\n    menuContainer.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), \r\n    document.createElement('div'), document.createElement('div'))\r\n    menuContainer.querySelectorAll('div').forEach(function(item){\r\n        item.classList.add('menu-items')\r\n        item.append(document.createElement('h3'), document.createElement('img'), document.createElement('h5'), document.createElement('p'))\r\n        item.querySelector('h3').innerHTML = foodNameArray[f]\r\n        item.querySelector('img').src = foodImageArray[f]\r\n        item.querySelector('h5').innerHTML = foodDescArray[f]\r\n        item.querySelector('p').innerHTML = foodPriceArray[f]\r\n        f++\r\n    })\r\n    footer.append(document.createElement('p'), document.createElement('p'))\r\n    footer.querySelectorAll('p').forEach(function(item){\r\n        item.innerHTML = footerArray[foot]\r\n        foot++\r\n    })\r\n    container.append(menuContainer)\r\n    document.body.append(footer)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/ourMenu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nfunction createContent(){\r\n    const container = document.getElementById('content')\r\n    const nav = document.createElement('nav')\r\n    const navs = document.createElement('div')\r\n    const reviews = document.createElement('div')\r\n    const reviewHeader = document.createElement('h1')\r\n    const workHours = document.createElement('div')\r\n    const workHoursHeader = document.createElement('h1')\r\n    const location = document.createElement('div')\r\n    const locationHeader = document.createElement('h1')\r\n    const footer = document.createElement('footer')\r\n        \r\n    reviews.id = 'reviews'\r\n    workHours.id = 'work-hours-container'\r\n    location.id = 'location'\r\n\r\n    let pValueArray = [`<a onclick=\"\">Home</a>`, \r\n    `<a onclick=\"\">Our Menu</a>`, `<a onclick=\"\">About</a>`]\r\n    let p = 0\r\n    let authorArray = [`<a href='https://www.youtube.com/watch?v=uW6nkqUmnYU' target=\"_blank\" rel=\"noopener noreferrer\">Gordon Ramsay</a>`, \r\n    `<a href='https://www.youtube.com/watch?v=VGd6bqTpEAk' target=\"_blank\" rel=\"noopener noreferrer\">Obi-Wan Kenobi</a>`, \r\n    `<a href='https://library-of-ruina.fandom.com/wiki/Hod' target=\"_blank\" rel=\"noopener noreferrer\">Hod</a>`, \r\n    `<a href='https://github.com/Angry3vilbot' target=\"_blank\" rel=\"noopener noreferrer\">Angry3vilbot</a>`]\r\n    let a = 0\r\n    let reviewArray = ['\"Quite splendidly done, however there is not enough LAMB SAUCE!\"', `\"May the 4th be with this fine \r\n    restaurant.\"`, '\"Tasty food and a friendly atmosphere!\"', '\"I created this, so it must be fantastic.\"']\r\n    let r = 0\r\n    let dayOfWeekArray = [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\r\n    let dow = 0\r\n    let timeArray = [\"10 AM - 7 PM\", \"9 AM - 7 PM\", \"9 AM - 7 PM\", \"9 AM - 7 PM\", \"8 AM - 8 PM\", \"8 AM - 9 PM\"]\r\n    let time = 0\r\n    let footerArray = [\"Copyright Restaurant©\", \"Made by Angry3vilbot\"]\r\n    let f = 0\r\n    let eve = 0\r\n    let eventListeners = [_index_js__WEBPACK_IMPORTED_MODULE_0__.loadMainPage, _index_js__WEBPACK_IMPORTED_MODULE_0__.loadMenuPage, _index_js__WEBPACK_IMPORTED_MODULE_0__.loadAboutPage]\r\n\r\n    navs.append(document.createElement('p'), document.createElement('p'), document.createElement('p'))\r\n    navs.childNodes.forEach(\r\n        function(child){\r\n            child.innerHTML = pValueArray[p]\r\n            child.addEventListener('click', eventListeners[eve])\r\n            eve++\r\n            p++\r\n        }\r\n    )\r\n    nav.append(document.createElement('h2'), navs)\r\n    nav.firstChild.innerHTML = 'Restaurant'\r\n    document.body.prepend(nav)\r\n    container.append(document.createElement('h1'), document.createElement('img'), document.createElement('p'))\r\n    container.querySelector('img').setAttribute('src', 'logo.png')\r\n    container.querySelector('h1').innerHTML = 'An Amazing Restaurant'\r\n    container.querySelector('p').innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi doloremque \r\n    porro aspernatur autem corporis accusantium odit sed, temporibus exercitationem quidem vero fuga a. \r\n    Adipisci neque consectetur dolorem corporis nesciunt quisquam?`\r\n    reviews.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'))\r\n    reviews.querySelectorAll('div').forEach(function(item){\r\n        item.innerHTML = '<h2></h2><p></p>'\r\n        item.classList.add('review')\r\n    })\r\n    reviews.querySelectorAll('h2').forEach(function(child){\r\n        child.innerHTML = authorArray[a]\r\n        a++\r\n    })\r\n    reviews.querySelectorAll('p').forEach(function(child){\r\n        child.innerHTML = reviewArray[r]\r\n        r++\r\n    })\r\n    reviewHeader.innerHTML = 'Reviews'\r\n    reviewHeader.setAttribute('style', 'width: 100%; text-align: center; font-size:48px;')\r\n    workHours.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), \r\n    document.createElement('div'), document.createElement('div'), document.createElement('div'))\r\n    workHours.querySelectorAll('div').forEach(function(item){\r\n        item.innerHTML = '<h2></h2><p></p>'\r\n        item.classList.add('work-hours')\r\n    })\r\n    workHours.querySelectorAll('h2').forEach(function(child){\r\n        child.innerHTML = dayOfWeekArray[dow]\r\n        dow++\r\n    })\r\n    workHours.querySelectorAll('p').forEach(function(child){\r\n        child.innerHTML = timeArray[time]\r\n        time++\r\n    })\r\n    workHoursHeader.innerHTML = 'Our Work Hours'\r\n    workHoursHeader.setAttribute('style', 'width: 100%; text-align: center; font-size:48px;')\r\n    location.append(document.createElement('div'))\r\n    location.querySelectorAll('div').forEach(function(item){\r\n        item.innerHTML = `123 Red Street, Blue Town, Green. There was originally supposed to be a Google Maps map here, however \r\n        I need to make a Google API key for that, and I do not want to, not yet at least.`\r\n    })\r\n    locationHeader.innerHTML = 'Our Location'\r\n    locationHeader.setAttribute('style', 'width: 100%; text-align: center; font-size:48px;')\r\n    footer.append(document.createElement('p'), document.createElement('p'))\r\n    footer.querySelectorAll('p').forEach(function(item){\r\n        item.innerHTML = footerArray[f]\r\n        f++\r\n    })\r\n    document.title = \"Restaurant | Main Page\"\r\n    document.body.append(reviewHeader, reviews, workHoursHeader, workHours, locationHeader, location, footer)\r\n    return console.log('succ')\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;