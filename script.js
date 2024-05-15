let userValue = document.querySelectorAll(".text");
let userDiv = document.querySelectorAll(".div");
let btn = document.querySelectorAll(".add")
let cont = document.querySelectorAll(".cont")
let arr = [];

function addVal() {
    let realValue = userValue[0].value.trim(); 
    if (realValue === "") {
        alert("Please enter a valid value.");
        return;
    }
    arr.push(realValue);
    printAllTodos();
    userValue[0].value = "";
}

function printAllTodos() {
    userDiv[0].innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        userDiv[0].innerHTML += `<p id="todo-${i}">${arr[i]} <button onclick="editButn(${i})"> Edit </button><button onclick="deleteBtn(${i})"> Delete </button> </p>`;
    }
}

function editButn(index) {
    let input = document.createElement("input");
    input.type = "text";
    input.value = arr[index];
    input.className = "input2"
    
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.onclick = function() {
        let editedValue = input.value.trim(); 
        if (editedValue === "") {
            alert("Please enter a valid value.");
            return;
        }
        arr[index] = editedValue;
        printAllTodos();
    };

    let todoPara = document.querySelectorAll(`#todo-${index}`);
    todoPara[0].innerHTML = '';
    
    todoPara[0].appendChild(input);
    todoPara[0].appendChild(saveBtn);
}

function deleteBtn(index) {
    arr.splice(index, 1);
    printAllTodos();
}
