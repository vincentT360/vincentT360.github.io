const CATAX = .1075;
const BCTAX = .12;
var CADTOUSD = 0.7364;
var USDTOCAD = 1.3574;
var fxrate;
var sourceCurrency;
var sourceTaxRate;
var targetCurrency;
var targetTaxRate;

const selection = document.getElementById("direction");
const fxrateLabel = document.getElementById("fxrateLabel");
const fxrateInput = document.getElementById("fxrate");
const sourceCurrencyLabel = document.getElementById("sourceCurrencyLabel");
const sourceCurrencyInput = document.getElementById("sourceCurrencyInput");
const targetCurrencyOutput = document.getElementById("targetCurrencyOutput");

selection.addEventListener("change", updateFields)

function updateFields(event) {
    
    if (selection.value === "CADtoUSD")
    {
        fxrate = fxrateInput.value ? fxrateInput.value != null : CADTOUSD;
        sourceCurrency = "CAD"
        targetCurrency = "USD"
        sourceTaxRate = BCTAX
        targetTaxRate = CATAX
        sourceCurrencyLabel.innerHTML = "Enter CAD Value"
        fxrateLabel.innerHTML = "Enter CAD->USD FX Rate"
        fxrateInput.setAttribute("placeholder", `${CADTOUSD}`)
    }
    else if (selection.value == "USDtoCAD")
    {
        fxrate = fxrateInput.value ? fxrateInput.value != null : CADTOUSD;
        sourceCurrency = "USD"
        targetCurrency = "CAD"
        sourceTaxRate = CATAX
        targetTaxRate = BCTAX
        sourceCurrencyLabel.innerHTML = "Enter USD Value"
        fxrateLabel.innerHTML = "Enter USD->CAD FX Rate"
        fxrateInput.setAttribute("placeholder", `${USDTOCAD}`)
    }
}

sourceCurrencyInput.addEventListener("change", (event) => {
    let sourceAfterTax = (sourceCurrencyInput.value * (1+sourceTaxRate)).toFixed(2);
    let targetValue = (sourceAfterTax * fxrate).toFixed(2);
    let targetPreTax = (targetValue/(1+targetTaxRate)).toFixed(2);
    targetCurrencyOutput.innerHTML = `${sourceCurrencyInput.value} ${sourceCurrency} after taxes (${sourceTaxRate*100}%) is ${sourceAfterTax} ${sourceCurrency}. <br> 
    This is equivalent to ${targetValue} ${targetCurrency} after accounting for ${sourceCurrency} taxes. <br>

    Therefore, for the item to be worth it, the price of the item after tax in ${targetCurrency} with its local tax rate (${targetTaxRate*100}%) must be equal to or less than ${targetValue} ${targetCurrency} <br>
    Or in other words, the item before local tax must be less than ${targetPreTax} ${targetCurrency}. <br>`
})

updateFields(null);