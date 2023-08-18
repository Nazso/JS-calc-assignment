const num = document.querySelectorAll(".btn");
const opButtons = document.querySelectorAll(".btn-op");
const display = document.querySelector(".display");
const deleteValues = document.querySelector(".delete-values");

const nameInput = document.querySelector("#added-name");
const saveName = document.querySelector("#save-name");

const onButton = document.querySelector("#btn-on")

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/", "%", ".", "=", "C", "CE", "DEL"];

let btnNumStrOne = "";
let btnNumStrTwo = "";
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
            
            btnNumStrOne += (e.innerText);
            console.log(btnNumStrOne);
           
            display.innerText = btnNumStrOne;

        }else if(e.innerText === "C") {
            
            btnNumStrOne = "";
            console.log(e.innerText)
            display.innerText = btnNumStrOne;

        }else if(e.innerText === "DEL") {
            
            btnNumStrOne = btnNumStrOne.slice(0, -1);
            console.log(e.innerText)
            display.innerText = btnNumStrOne;

        }       
    })    
})
