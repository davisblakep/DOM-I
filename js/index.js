const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Nav Bar DOM
let navBar = document.getElementsByTagName('a');
navTextItems = Array.from(navBar);

navBar[0].textContent = `${siteContent["nav"]["nav-item-1"]}`;
navBar[1].textContent = `${siteContent["nav"]["nav-item-2"]}`;
navBar[2].textContent = `${siteContent["nav"]["nav-item-3"]}`;
navBar[3].textContent = `${siteContent["nav"]["nav-item-4"]}`;
navBar[4].textContent = `${siteContent["nav"]["nav-item-5"]}`;
navBar[5].textContent = `${siteContent["nav"]["nav-item-6"]}`;


// Task 3 Add New Content

let homeElement = document.createElement('a');
homeElement.textContent = "Home";

let feedbackElement = document.createElement('a');
feedbackElement.textContent = "Feedback";

let navClass = document.querySelector('nav');

navClass.prepend(homeElement);
navClass.appendChild(feedbackElement);




navTextItems.forEach(x => x.style.color = "green");
homeElement.style.color = "green";
feedbackElement.style.color = "green";



// *****CTA Section*****

// H1 Text
let h1Text = document.getElementsByTagName('h1');
// Array.from(h1Text);

h1Text[0].textContent = `${siteContent["cta"]["h1"]}`;

// CTA Button
let button = document.getElementsByTagName('button');
// Array.from(button);

button[0].textContent = `${siteContent["cta"]["button"]}`;

// CTA Image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


// ***** Top Content Section *****

let topContent = document.querySelector(".top-content");
let topContentChildren = Array.from(topContent.children);


let features = topContentChildren[0].children;
features[0].textContent = siteContent["main-content"]["features-h4"];
features[1].textContent = siteContent["main-content"]["features-content"];

let about = topContentChildren[1].children;
about[0].textContent = siteContent["main-content"]["about-h4"];
about[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


// ***** Bottom Content Section *****

let bottomContent = document.querySelector(".bottom-content");
let bottomContentChildren = Array.from(bottomContent.children);


let services = bottomContentChildren[0].children;
services[0].textContent = siteContent["main-content"]["services-h4"];
services[1].textContent = siteContent["main-content"]["services-content"];

let product = bottomContentChildren[1].children;
product[0].textContent = siteContent["main-content"]["product-h4"];
product[1].textContent = siteContent["main-content"]["product-content"];

let vision = bottomContentChildren[2].children;
vision[0].textContent = siteContent["main-content"]["vision-h4"];
vision[1].textContent = siteContent["main-content"]["vision-content"];


// ***** Contact Section *****

let contact = document.querySelector(".contact");
let contactChildren = Array.from(contact.children);

contactChildren[0].textContent = siteContent["contact"]["contact-h4"];
contactChildren[1].textContent = siteContent["contact"]["address"];
contactChildren[2].textContent = siteContent["contact"]["phone"];
contactChildren[3].textContent = siteContent["contact"]["email"];


// ***** Footer Section *****

let footer = document.getElementsByTagName("footer");
// Array.from(footer);

footer[0].textContent = siteContent["footer"]["copyright"];

