const num = document.querySelectorAll(".btn");
const opButtons = document.querySelectorAll(".btn-op");
const display = document.querySelector(".display");
const deleteValues = document.querySelector(".delete-values")

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/", "%", ".", "=", "C", "CE", "DEL"];

let btnNumStr = "";
let opButtonsStr= "";



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
