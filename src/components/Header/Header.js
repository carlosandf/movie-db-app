import styles from './Header.module.css';
import { Icon } from '../icon.js';
const $ = document;

const title = $.createElement('h1');
title.className = styles['main-title'];
const link = $.createElement('a');
link.textContent = 'MovieApp';
title.appendChild(
  link
);

const form = $.createElement('form');
form.className = styles.search;

const input = $.createElement('input');
input.placeholder = 'Buscar...';

const button = $.createElement('button');
button.innerHTML = Icon({ fill: '#1762ee', width: '1.7rem' });

form.append(
  input,
  button
);

export const Header = $.createElement('header');
Header.className = styles.header;

Header.append(
  title,
  form
);

let dark = false;
form.onsubmit = (e) => {
  e.preventDefault();
  dark = !dark;
  document.body.style.backgroundColor = dark ? '#000' : '#fff';
};

/*
<header >
  <h1 class="main-title">
    <a href="/">MovieApp</a>
  </h1>
  <form class="search">
    <input placeholder="Buscar..." type="text" />
    <button>🔍</button>
  </form>
</header>
*/
