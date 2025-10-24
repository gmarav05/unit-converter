const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

let unitOne = ""
let resultOne = 0;

let unitTwo = ""
let resultTwo = 0;

let toUnitOne = ""
let toUnitTwo = ""


convertBtn.addEventListener("click", function() {
   
    const num = inputEl.value;
    length(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo)
    // console.log(unitOne + " " + resultOne)
   

})


function length(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo) {
    // 1 meter = 3.281 feet

    unitOne = "meters"
    resultOne = (num * 3.28084).toFixed(3);
    toUnitOne = "feet"

    unitTwo = "feet"
    resultTwo = (num * 0.3048).toFixed(3);
    toUnitTwo = "meters"    

    let lengthUnit = document.getElementById("length-el");

    render(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, lengthUnit);
    
}


function render(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, lengthUnit) {

    console.log(resultOne)

    let finalResult = `${num} ${unitOne} = ${resultOne} ${toUnitOne} |
    ${num} ${unitTwo} = ${resultTwo} ${toUnitTwo}`

    lengthUnit.textContent += finalResult;

}