import { generateLoremIpsum } from './lorem-ipsum.js';

const container  = document.querySelector('.container');
const nav = document.querySelector('.nav');

const icons = [["home", "person", "email"], ["close", "menu"]];
const navInfo = ["Home","About","Contact"];

function circleContainer(){
  const circleContainer = document.createElement('div');
  circleContainer.classList.add("circle-container");
  container.appendChild(circleContainer);
  
  const circle = document.createElement('div');
  circle.classList.add("circle");
  circleContainer.appendChild(circle);

  for (let i = 0; i <= 1; i++) {
    const button = document.createElement("button");
    button.id = i === 1 ? "open" : "close";
    circle.appendChild(button);

    const span = document.createElement('span');
    span.classList.add("material-icons");
    span.textContent = `${icons[1][i]}`;
    button.appendChild(span);
  };

  const close = document.getElementById("close");
  close.addEventListener('click', () => container.classList.remove('show-nav'));

  const open = document.getElementById("open");
  open.addEventListener('click', () => container.classList.add('show-nav'))

}

function content(){
  const content = document.createElement('div');
  content.classList.add('content');
  container.appendChild(content);

  const h1 = document.createElement('h1');
  h1.textContent = "Amazing Article";
  content.appendChild(h1);

  const small = document.createElement( 'small' );
  small.textContent = "Florin Pop";
  content.appendChild(small);

  const loremParagraph = generateLoremIpsum(150);

  const p = document.createElement('p');
  p.textContent = loremParagraph;
  content.appendChild(p);

  const h3 = document.createElement('h3');
  h3.textContent = "My Dog";
  content.appendChild(h3);

  const img = document.createElement('img');
  img.src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
  
  img.alt="doggy";
  content.appendChild(img);

  const loremParagraph2 = generateLoremIpsum(100);
  const p2 = document.createElement('p');
  p2.textContent = loremParagraph2;
  content.appendChild(p2);
}

function navContent(){
  const  navUl = document.createElement('ul');
  nav.appendChild(navUl);

  for(let i = 0; i < 3;i++){
    const li = document.createElement('li') ;
    const span = document.createElement('span');
    const a =  document.createElement('a');
    
    span.classList.add("material-icons");
    span.textContent= `${icons[0][i]}`;
    li.appendChild(span);

    a.setAttribute("href","#");
    a.textContent = `${navInfo[i]}`;
    li.appendChild(a);

    navUl.appendChild(li)
  }

  nav.appendChild(navUl);

}

circleContainer();
content();
navContent();
