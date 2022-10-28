export default function createContent(){
    const container = document.getElementById('content')
    const nav = document.createElement('nav')
    const navs = document.createElement('div')
    const reviews = document.createElement('div')
    const reviewHeader = document.createElement('h1')
    const workHours = document.createElement('div')
    const workHoursHeader = document.createElement('h1')
    const location = document.createElement('div')
    const locationHeader = document.createElement('h1')
    const footer = document.createElement('footer')
        
    reviews.id = 'reviews'
    workHours.id = 'work-hours-container'
    location.id = 'location'

    let pValueArray = [`<a onclick="console.log('aaaaa')">Home</a>`, 
    `<a onclick="console.log('bbbb')">Our Menu</a>`, `<a onclick="console.log('c')">About</a>`]
    let p = 0
    let authorArray = [`<a href='https://www.youtube.com/watch?v=uW6nkqUmnYU' target="_blank" rel="noopener noreferrer">Gordon Ramsay</a>`, 
    `<a href='https://www.youtube.com/watch?v=VGd6bqTpEAk' target="_blank" rel="noopener noreferrer">Obi-Wan Kenobi</a>`, 
    `<a href='https://library-of-ruina.fandom.com/wiki/Hod' target="_blank" rel="noopener noreferrer">Hod</a>`, 
    `<a href='https://github.com/Angry3vilbot' target="_blank" rel="noopener noreferrer">Angry3vilbot</a>`]
    let a = 0
    let reviewArray = ['"Quite splendidly done, however there is not enough LAMB SAUCE!"', `"May the 4th be with this fine 
    restaurant."`, '"Tasty food and a friendly atmosphere!"', '"I created this, so it must be fantastic."']
    let r = 0
    let dayOfWeekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dow = 0
    let timeArray = ["10 AM - 7 PM", "9 AM - 7 PM", "9 AM - 7 PM", "9 AM - 7 PM", "8 AM - 8 PM", "8 AM - 9 PM"]
    let time = 0
    let footerArray = ["Copyright Restaurant©", "Made by Angry3vilbot"]
    let f = 0

    navs.append(document.createElement('p'), document.createElement('p'), document.createElement('p'))
    navs.childNodes.forEach(
        function(child){
            child.innerHTML = pValueArray[p]
            p++
        }
    )
    nav.append(document.createElement('h2'), navs)
    nav.firstChild.innerHTML = 'Restaurant'
    document.body.prepend(nav)
    container.append(document.createElement('h1'), document.createElement('img'), document.createElement('p'))
    container.querySelector('img').setAttribute('src', 'logo.png')
    container.querySelector('h1').innerHTML = 'An Amazing Restaurant'
    container.querySelector('p').innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi doloremque 
    porro aspernatur autem corporis accusantium odit sed, temporibus exercitationem quidem vero fuga a. 
    Adipisci neque consectetur dolorem corporis nesciunt quisquam?`
    reviews.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'))
    reviews.querySelectorAll('div').forEach(function(item){
        item.innerHTML = '<h2></h2><p></p>'
        item.classList.add('review')
    })
    reviews.querySelectorAll('h2').forEach(function(child){
        child.innerHTML = authorArray[a]
        a++
    })
    reviews.querySelectorAll('p').forEach(function(child){
        child.innerHTML = reviewArray[r]
        r++
    })
    reviewHeader.innerHTML = 'Reviews'
    reviewHeader.setAttribute('style', 'width: 100%; text-align: center; font-size:48px;')
    workHours.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), 
    document.createElement('div'), document.createElement('div'), document.createElement('div'))
    workHours.querySelectorAll('div').forEach(function(item){
        item.innerHTML = '<h2></h2><p></p>'
        item.classList.add('work-hours')
    })
    workHours.querySelectorAll('h2').forEach(function(child){
        child.innerHTML = dayOfWeekArray[dow]
        dow++
    })
    workHours.querySelectorAll('p').forEach(function(child){
        child.innerHTML = timeArray[time]
        time++
    })
    workHoursHeader.innerHTML = 'Our Work Hours'
    workHoursHeader.setAttribute('style', 'width: 100%; text-align: center; font-size:48px;')
    location.append(document.createElement('div'))
    location.querySelectorAll('div').forEach(function(item){
        item.innerHTML = `123 Red Street, Blue Town, Green. There was originally supposed to be a Google Maps map here, however 
        I need to make a Google API key for that, and I do not want to, not yet at least.`
    })
    locationHeader.innerHTML = 'Our Location'
    locationHeader.setAttribute('style', 'width: 100%; text-align: center; font-size:48px;')
    footer.append(document.createElement('p'), document.createElement('p'))
    footer.querySelectorAll('p').forEach(function(item){
        item.innerHTML = footerArray[f]
        f++
    })
    document.body.append(reviewHeader, reviews, workHoursHeader, workHours, locationHeader, location, footer)
    return console.log('succ')
}