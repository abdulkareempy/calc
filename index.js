var btns = document.getElementsByTagName("button");
var equationDisplay = document.getElementsByTagName("input")[0];

let equation = "";

for(let btn of btns){
    btn.addEventListener("click",(e)=>{
        let buttonText = e.target.innerText;

        // input.setAttribute("value",buttonText)
        if(buttonText === "RESET"){
           equation = "";
           equationDisplay.value = equation;

        }
        else if(buttonText === "="){
            equationDisplay.value = eval(equation);
            equation = eval(equation);
        }
        else if(buttonText === "x"){
            buttonText = "*";
            equation += buttonText
            equationDisplay.value = equation;
        }
        else if(buttonText === "DEL"){
            equation = equation.slice(0,equation.length-1)
            equationDisplay.value = equation;
        }

        else{
            equation += buttonText
            equationDisplay.value = equation;
        }
    })
}