const num = document.querySelectorAll(".btn")
const display = document.querySelector(".display");

let btnNumStr = "";

num.forEach( (e) => {
    e.addEventListener('click', () => {

        btnNumStr += (e.innerText);
        console.log(btnNumStr);
        
        // const displayText = document.createElement('div');
        display.innerText = btnNumStr;
        
        // display.appendChild(displayText);
        
    })
    
})