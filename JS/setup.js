import { User } from '/JS/user.class.js';

const log = console.log;

const error = console.error;

const trace = console.trace;

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const includeTemplate = (selector, htmlContent) => {
    const targetElement = selector;

    if(!targetElement) return error(`Element with selector '${selector}' not found.`);
    if(targetElement) return targetElement.innerHTML += htmlContent;
};

const username = 'KLAUS';
const email = 'klaus@klaus.com';
const password = 'lkjhvadsf81264lbv';

const USER = new User(username, email, password);