// entry
import { Test } from './Test.js';

const elem = document.createElement('div');
elem.innerHTML = 'main.js!';
document.body.appendChild(elem);

new Test();
