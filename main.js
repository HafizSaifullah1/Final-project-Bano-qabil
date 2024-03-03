let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    menu.classList.remove('active');
    

}

let menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=()=>{
    menu.classList.toggle('active');
    search.classList.remove('active');
    

}
let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0)
})

//hide menu and navbar on scroll
window.onscroll = () =>{
    menu.classList.remove('active');
    search.classList.remove('active');
    
}

// timer

let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown =()=>{

    let futureDate = new Date("30 march 2024")
    let currentdate = new Date();
    let mydate = futureDate - currentdate;

    let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
    let min = Math.floor(mydate / 1000 / 60 ) %60;
    let sec = Math.floor(mydate / 1000 ) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

}

countDown()
setInterval(countDown, 1000)
