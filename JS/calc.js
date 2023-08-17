const num = document.querySelectorAll(".btn");
const opButtons = document.querySelectorAll(".btn-op");
const display = document.querySelector(".display");
const deleteValues = document.querySelector(".delete-values");

const nameInput = document.querySelector("#added-name");
const saveName = document.querySelector("#save-name");

const onButton = document.querySelector("#btn-on")

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/", "%", ".", "=", "C", "CE", "DEL"];

let btnNumStr = "";
let opButtonsStr= "";
let nameStr = "";

saveName.addEventListener("click", () => {
    nameStr = nameInput.value
    console.log(nameStr)
    nameInput.value = "";
}),

onButton.addEventListener("click", () => {
    if(!nameStr) {
        alert('Please add yor name!')
    } else {
        display.innerHTML = `<p class="welcome-text">Welcome <strong><em>${nameStr}</em></strong>!</p>`
        nameStr = "";
    }
})

num.forEach( (e) => { 
    e.addEventListener('click', () => {
        if(numbers.includes(e.innerText)) {
            
            btnNumStr += (e.innerText);
            console.log(btnNumStr);
           
            display.innerText = btnNumStr;

        }else if(e.innerText === "C") {
            
            btnNumStr = "";
            console.log(e.innerText)
            display.innerText = btnNumStr;

        }else if(e.innerText === "DEL") {
            
            btnNumStr = btnNumStr.slice(0, -1);
            console.log(e.innerText)
            display.innerText = btnNumStr;

        }       
    })    
})
