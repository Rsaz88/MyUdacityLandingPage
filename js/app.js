/**
 * Define Global Variables
 * 
*/

const fragment = document.createDocumentFragment();
const navbar = document.querySelector('nav');
const navbarList = document.querySelector('ul');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function init () {
    this.createNavItem();
     this.intiNavBar ("navbar__menu");
     this.activeSection();
   }

   
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


function createNavItem(id, nav) {
    const navItem = `<a class="menu__link" href="#${id}"> ${nav}</a>`;
    return navItem;
}

function intiNavbar() {
    for (let i = 0; i < sections.length; i++) {
        const newItem = document.createElement('li');
        newItem.classList.add('navbar__menu_item')
        const sectionName = sections[i].getAttribute('data-nav');
        const sectionId = sections[i].getAttribute('id')
        newItem.innerHTML = createNavItem(sectionId, sectionName);
        fragment.appendChild(newItem);
    }
    navbarList.appendChild(fragment);
}

intiNavbar();


// Add class 'active' to section when near top of viewport


// In viewport detection
function isElementOnScreen(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top <= 1 &&
        bounding.bottom >= 1
    );
};

// Active section when near top of viewport

const subMenuItems = document.querySelectorAll('.navbar__menu_item');

function activeSection() {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('avtive__section', isElementOnScreen(sections[i]));
        subMenuItems[i].classList.toggle('link__active', isElementOnScreen(sections[i]));
    };
};

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function() {
    activeSection();
});

document.addEventListener('scroll', function() {
    for (let i = 0; i < sections.length; i++) {
        if (isElementOnScreen(sections[i])) {
            document.querySelector('.container');
        };
    };
});


/* Nav-bar for Mobiel */

const menubarIcon = document.querySelector('.nav__icon');


// Dropdown menu on click
menubarIcon.addEventListener('click', function() {
    if (window.innerWidth <= 971) {
        navbar.classList.toggle('navVisible');
        menubarIcon.classList.toggle('nav__icon_rotate');
    }
});

// Hide Dropdown menu when scrolling or clicking on a dropdown menu item
document.addEventListener('scroll', function() {
    if (navbar.classList.contains('navVisible') && window.innerWidth <= 971) {
        navbar.classList.toggle('navVisible');
        menubarIcon.classList.toggle('nav__icon_rotate');
    };
});