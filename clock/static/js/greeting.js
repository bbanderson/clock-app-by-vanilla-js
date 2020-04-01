const GREET_BODY = document.querySelector("body");
const HEADER = GREET_BODY.querySelector("header");

const GREET_FORM = document.querySelector('.js-greetForm');
const GREET_CONTAINER = document.querySelector('.js-greetContainer');
const GREET = document.querySelector('.js-greet');
const INPUT = GREET_FORM.querySelector(".greetInput");
const CHANGE_NAME_BTN = GREET_CONTAINER.querySelector(".js-changeName");
const TODO_TITLE = document.querySelector(".js-todoTitle");

const USER_NAME_STORAGE = "username";
const SHOWING_CLASS_NAME = "showing";

// function handleChangeButton() {
//     // event.preventDefault();
//     // if (GREET_CONTAINER.childNodes !== null) {
//         localStorage.removeItem(TODO_STORAGE);
//         localStorage.removeItem(USER_NAME_STORAGE);
//         GREET_BODY.removeChild(HEADER);
//         // localStorage.setItem(USER_NAME_STORAGE,"");
//         // GREET_CONTAINER.removeChild(GREET);
//         // CHANGE_NAME_BTN.classList.remove(SHOWING_CLASS_NAME);
//         window.location.reload();
//         setUserInfo();
//     // } 
// }

function save(text) {
    localStorage.setItem(USER_NAME_STORAGE, text);
    loadUserInfo(text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = INPUT.value;
    save(currentValue);
}

function setUserInfo() {
    GREET_FORM.classList.add(SHOWING_CLASS_NAME);
    GREET_CONTAINER.classList.remove(SHOWING_CLASS_NAME);
    TODO_TITLE.classList.remove(SHOWING_CLASS_NAME);
    GREET_FORM.addEventListener("submit", handleSubmit);
}

function loadUserInfo(string) {
    // print user name on screen
    GREET_FORM.classList.remove(SHOWING_CLASS_NAME);
    GREET_CONTAINER.classList.add(SHOWING_CLASS_NAME);
    // CHANGE_NAME_BTN.classList.add(SHOWING_CLASS_NAME);
    TODO_TITLE.classList.add(SHOWING_CLASS_NAME);
    
    GREET.innerHTML = `Hello! ${string}!`;

}

function loadUser() {
    const USER_INFO = localStorage.getItem(USER_NAME_STORAGE);
    if (USER_INFO === null) {
        // BODY.removeChild("header");
        TODO_TITLE.classList.remove(SHOWING_CLASS_NAME);

        // setInfo
        setUserInfo();
    } else {
        // loadInfo
        loadUserInfo(USER_INFO);
        // CHANGE_NAME_BTN.addEventListener("click", handleChangeButton);
    }
}

function init() {
    loadUser();
}

init();