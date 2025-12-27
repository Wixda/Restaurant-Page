import "./styles/styles.css"
import homeSection from "./home";
import menuSection from "./menu";
import contactSection from "./contact";

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

const content = document.querySelector('#content');
content.appendChild(contactSection);

homeButton.addEventListener('click', ()=> {
    content.removeChild(content.lastElementChild);
    content.appendChild(homeSection);
})

menuButton.addEventListener('click', ()=> {
    content.removeChild(content.lastElementChild);
    content.appendChild(menuSection);
})

contactButton.addEventListener('click', ()=> {
    content.removeChild(content.lastElementChild);
    content.appendChild(contactSection);
})
