const includeTemplate = (selector, htmlContent) => {
    const targetElement = selector;

    if(!targetElement) return error(`Element with selector '${selector}' not found.`);
    if(targetElement) return targetElement.innerHTML += htmlContent;
};

HTMLElement.prototype.includeTemplate = function (htmlContent) {
    this.innerHTML = htmlContent;
}


function init() {
    loadHeader();
    loadFooter();
}

const username = 'KLAUS';
const email = 'klaus@klaus.com';
const password = 'lkjhvadsf81264lbv';

const USER = new User(username, email, password);
log(USER)