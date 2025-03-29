/* HTML elements id's  */
let number = document.getElementById("number");
let btn = document.getElementById("btn");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

btn.addEventListener("click", function() {
    /* User's iputvalue */
    let inputValue = Number(number.value); 
    
    /* Conversion calculations */
    let meterToFeet = inputValue * 3.280840;
    let feetToMeeter = inputValue / 3.280840;
    let literToGallon = inputValue * 0.264172;
    let gallonToLiter = inputValue / 0.264172;
    let kiloToPound = inputValue * 2.204623;
    let poundToKilo = inputValue / 2.204623; 

    /* Length (Meter/Feet) */
    length.innerHTML = `${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeeter.toFixed(3)}`

    /* Volume (Liters/Gallons) */
    volume.innerHTML = `${inputValue} liters = ${literToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)} liters`
    
    /* Mass (Kilograms/Pounds) */
    mass.innerHTML = `${inputValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilo.toFixed(3)} kilos`
});

