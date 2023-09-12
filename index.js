const CATAX = .1075;
const BCTAX = .12;
var CADTOUSD = 0.7364;
var cadPriceEntered;
var usdPriceEntered;
var CADtoUSDAfterTax;
var USDAfterTax

const fxrateInput = document.getElementById("fxrate");
const itemInCADInput = document.getElementById("itemInCADInput");
const itemInCADConverted = document.getElementById("itemInCADConverted");
const itemInUSDInput = document.getElementById("itemInUSDInput");
const itemInUSDAfterTax = document.getElementById("itemInUSDAfterTax");
const summary = document.getElementById("summary");

fxrateInput.addEventListener("change", (event) => {
    CADTOUSD = fxrateInput.value
})

itemInCADInput.addEventListener("change", (event) => {
    CADtoUSDAfterTax = ((itemInCADInput.value * (1+BCTAX))*CADTOUSD).toFixed(2);
    itemInCADConverted.innerHTML = `Paying ${itemInCADInput.value} CAD after CAD taxes is worth ${CADtoUSDAfterTax} USD`;
    cadPriceEntered = true;
    updateSummary();
})

itemInUSDInput.addEventListener("change", (event) => {
    USDAfterTax = (itemInUSDInput.value * (1+CATAX)).toFixed(2);
    itemInUSDAfterTax.innerHTML = `Paying ${itemInUSDInput.value} USD after US taxes is worth ${USDAfterTax} USD`;
    usdPriceEntered = true;
    updateSummary();
})

function updateSummary(){
    if (usdPriceEntered == true && cadPriceEntered == true){
        difference = (CADtoUSDAfterTax - USDAfterTax).toFixed(2);
        if (difference >= 0){
            summary.innerHTML = `You spend ${difference} USD more buying it in Canada`
        }
        else{
            summary.innerHTML = `You save ${difference*-1} USD buying it in Canada`
        }
    }
}
