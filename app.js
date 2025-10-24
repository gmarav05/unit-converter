const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

let resultType = "";

let unitOne = "";
let resultOne = 0;

let unitTwo = "";
let resultTwo = 0;

let toUnitOne = "";
let toUnitTwo = "";


convertBtn.addEventListener("click", function() {
   
    const num = inputEl.value;
    length(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo);
    volume(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo);
    mass(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo);

})


function length(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo) {
    // 1 meter = 3.281 feet

    unitOne = "meters"
    resultOne = (num * 3.28084).toFixed(3);
    toUnitOne = "feet"

    unitTwo = "feet"
    resultTwo = (num * 0.3048).toFixed(3);
    toUnitTwo = "meters"    

    resultType = document.getElementById("length-el");

    render(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, resultType);
    
}



function volume(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo) {
    // 1 liter = 0.264172 gallon

    unitOne = "liters"
    resultOne = (num * 0.264172).toFixed(3);
    toUnitOne = "gallons"

    // 1 gallon = 3.78541 liters

    unitTwo = "gallons"
    resultTwo = (num * 3.78541).toFixed(3);
    toUnitTwo = "liters"    

    resultType = document.getElementById("volume-el");

    render(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, resultType);
    
}


function mass(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo) {
    // 1 kilogram = 2.204 pound

    unitOne = "kilos"
    resultOne = (num * 2.20462).toFixed(3);
    toUnitOne = "pounds"

    // 1 pounds = 0.453592 kilo

    unitTwo = "pounds"
    resultTwo = (num * 0.453592).toFixed(3);
    toUnitTwo = "kilos"    

    resultType = document.getElementById("mass-el");

    render(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, resultType);
    
}


function render(num, unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, resultType) {

    console.log(resultOne)

    let finalResult = `${num} ${unitOne} = ${resultOne} ${toUnitOne} |
    ${num} ${unitTwo} = ${resultTwo} ${toUnitTwo}`

    resultType.textContent = finalResult;
    
    clean(unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, resultType);

}

function clean(unitOne, resultOne, toUnitOne, unitTwo, resultTwo, toUnitTwo, resultType) {

    unitOne = "";
    resultOne = 0;

    unitTwo = "";
    resultTwo = 0;
    
    toUnitOne = "";
    toUnitTwo = "";

    resultType = "";
}