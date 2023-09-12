const CATAX = .1075;
const BCTAX = .12;
var CADTOUSD = 0.7364;

const fxrateInput = document.getElementById("fxrate");
const itemInCADInput = document.getElementById("itemInCADInput");
const itemInCADConverted = document.getElementById("itemInCADConverted");
const itemInUSDInput = document.getElementById("itemInUSDInput");
const itemInUSDAfterTax = document.getElementById("itemInUSDAfterTax");

fxrateInput.addEventListener("change", (event) => {
    CADTOUSD = fxrateInput.value
})

itemInCADInput.addEventListener("change", (event) => {
    let USDprice = ((itemInCADInput.value * (1+BCTAX))*CADTOUSD).toFixed(2);
    itemInCADConverted.innerHTML = `Paying ${itemInCADInput.value} CAD after taxes is worth ${USDprice} USD`
})

itemInUSDInput.addEventListener("change", (event) => {
    let USDAfterTax = (itemInUSDInput.value * (1+CATAX)).toFixed(2);
    itemInUSDAfterTax.innerHTML = `Paying ${itemInUSDInput.value} USD after taxes is worth ${USDAfterTax} USD`
})
