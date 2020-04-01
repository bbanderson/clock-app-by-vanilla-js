const TODO_FORM = document.querySelector(".js-todoForm");
const TODO_INPUT = TODO_FORM.querySelector(".todoInput");
const UL = document.querySelector("ul");
const COLOR = "listColor";

const TODO_STORAGE = "todoData";
let todoArray = [];

function save(arr) {
    localStorage.setItem(TODO_STORAGE, JSON.stringify(arr));
}

function deleteTodoList(event) {
    const DELETE_TARGET = event.target.parentNode;
    UL.removeChild(DELETE_TARGET);
    const FILTERED_ITEMS = todoArray.filter(function(todo) {
        return todo.id !== parseInt(DELETE_TARGET.id);
    });
    todoArray = FILTERED_ITEMS;
    // 이거 1시간동안 생각 못함.
    save(todoArray);
}

function printTodoList(parsedString) {
    // ul에 뿌려주기
    const LI = document.createElement("li");
    const SPAN = document.createElement("span");
    SPAN.classList.add(COLOR);
    SPAN.innerText = parsedString;
    const DEL_BTN = document.createElement("button");
    DEL_BTN.innerText = "DELETE";
    DEL_BTN.addEventListener("click", deleteTodoList);
    let itemIndex = todoArray.length + 1;
    const TODO_OBJ = {
        text: parsedString,//input.value
        id: itemIndex,
    };
    
    LI.id = itemIndex; // 이거 빼먹었었음.
    todoArray.push(TODO_OBJ);
    LI.appendChild(SPAN);
    LI.appendChild(DEL_BTN);
    UL.appendChild(LI);
    save(todoArray);
}

function handleInput(event) {
    event.preventDefault();
    const INPUT_VALUE = TODO_INPUT.value;
    printTodoList(INPUT_VALUE);
    TODO_INPUT.value = "";
}

function loadTodoList() {
    const TODO_LOCAL_DATA = localStorage.getItem(TODO_STORAGE);

    if (USER_NAME_STORAGE !== null) {

        if (TODO_LOCAL_DATA !== null) {
            // String Type -> Object Type
            const PARSED = JSON.parse(TODO_LOCAL_DATA);
            PARSED.forEach(function (todos) {
                printTodoList(todos.text);
            })
        }
    }
}

function init(){
    loadTodoList();
    TODO_FORM.addEventListener("submit", handleInput);
}

init();