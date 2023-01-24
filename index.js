// DOM
let conversion = document.querySelector('input')
let convertBtn = document.getElementById("convert-btn")
        
// Sections
let lengthEl = document.getElementById("length-output")
let volumeEl = document.getElementById("volume-output")
let massEl = document.getElementById("mass-output")



     
//StringLiterals
function renderVal() {
    let length = ""
    let Feetresult = parseInt(conversion.value) * 3.28084
    let Meterresult = parseInt(conversion.value) * 0.3048
    
     length += `
        <h4>
            Length (Meter/Feet)
        </h4>
        <h6>
            ${conversion.value} meters = ${Feetresult.toFixed(3)} feet | ${conversion.value} feet = ${Meterresult.toFixed(3)} meters
        </h6> 
    `   
    lengthEl.innerHTML = length
    
    let volume = ""
    let Gallonsresult = parseInt(conversion.value) * 0.264 
    let Volumeresult = parseInt(conversion.value) * 3.78541
    
    volume += `
        <h4>
            Volume (Liters/Gallons)
        </h4>
        <h6>
            ${conversion.value} liters = ${Gallonsresult.toFixed(3)} gallons | ${conversion.value} gallons = ${Volumeresult.toFixed(3)} liters 
        </h6>
        `
    volumeEl.innerHTML = volume
        
        
        let mass = ""
        let Poundsresult = parseInt(conversion.value) * 2.204 
        let Kilogramsresult = parseInt(conversion.value) * 0.453592
        mass += `
        <h4>
            Mass (Kilograms/Pounds)
        </h4>
        <h6> 
            ${conversion.value} kilos = ${Poundsresult.toFixed(3)} pounds | ${conversion.value} pounds = ${Kilogramsresult.toFixed(3)} kilos
        </h6>
    `
        massEl.innerHTML = mass
        
document.body.innerHTML
}

//Render

convertBtn.addEventListener("click", function(){  
    renderVal()
})