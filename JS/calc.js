const num = document.querySelectorAll(".btn");
const opButtons = document.querySelectorAll(".btn-op");
const btnOff = document.querySelector('#btn-off');
const display = document.querySelector(".display");
const deleteValues = document.querySelector(".delete-values");

const nameInput = document.querySelector("#added-name");
const saveName = document.querySelector("#save-name");

const onButton = document.querySelector("#btn-on")
const equalBtn = document.querySelector(".equal-btn")

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
       
        setTimeout(() => {
            display.innerHTML = '0';
        }, 2000)

        num.forEach((e) => {
            e.disabled = false;
        })
    }
})

function disabledBtns() {
    num.forEach((e) => {
        e.disabled = true;
    })
    display.innerText = "";
}

// num.forEach( (e) => { 
//     e.addEventListener('click', () => {

//         if(numbers.includes(e.innerText)) {
            
//             btnNumStrOne += (e.innerText);
//             console.log(btnNumStrOne);
           
//             display.innerText = btnNumStrOne;

//         }else if(e.innerText === "C") {
            
//             btnNumStrOne = "";
//             console.log(e.innerText)
//             display.innerText = btnNumStrOne;

//         }else 
//         if(e.innerText === "DEL") {
            
//             btnNumStrOne = btnNumStrOne.slice(0, -1);
//             console.log(e.innerText)
//             display.innerText = btnNumStrOne;

//         }       
//     })    
// })



// solving coverd by YT (ger)

function addNumbers(op) {
    if(display.innerHTML === "0" || display.innerHTML === " " ) {
        display.innerHTML = "";
        display.innerHTML += op;
    }else {
        display.innerHTML += op;
    }
}

function equalNumbers() {
    if (display.innerHTML.includes('%')) {
        let char = display.innerHTML.indexOf("%")
        let first = display.innerHTML.slice(0, char)
        let last = display.innerHTML.slice(char + 1)

        let result = parseFloat(first) / 100 * parseFloat(last);
        display.innerHTML = result;

        // console.log(char)
        // console.log(first)
        // console.log(last)
        // console.log(result)
    } else {

        let result = eval(display.innerHTML);
        console.log(result);
        display.innerHTML = result;
    }

}

function addOperations(addOp) {

    if(addOp === "C") {
            
        btnNumStrOne = "";
        console.log(addOp)
        display.innerText = btnNumStrOne;
        
    }else if(addOp === "DEL") {
                    
        btnNumStrOne = display.innerHTML.slice(0, -1);
        console.log(addOp)
        display.innerText = btnNumStrOne;
        
    }       
}
