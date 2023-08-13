// import { API_KEY } from './utils/constants.js';
import '../style.css';
import { Header } from './components/Header/Header.js';
import styles from '../styles.module.css';

const $ = document;

const title = $.createElement('h1');
title.textContent = 'Hola Mundo';

title.classList.add(styles.title);

console.log(Header);
$.querySelector('#app').append(Header);
