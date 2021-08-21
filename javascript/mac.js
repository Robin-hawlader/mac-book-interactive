
// external service cost calculation by button
// ---------------------------------------------------------------------
function priceVerifi(expenseId, isAdd, amount) {

    const costOfAmount = document.getElementById(expenseId);
    let externalProductCost = '0';
    if (isAdd == true) {
        externalProductCost = externalProductCost + amount;
    }
    else if (isAdd == false) {
        externalProductCost = externalProductCost + amount;
    }
    costOfAmount.innerText = parseFloat(externalProductCost);

    calculation()
}




// calculation of total amount and promo code total less discount
// ----------------------------------------------------------------------------------- 

function calculation() {
    const memoryPuschaseAmount = document.getElementById('memory-cost').innerText;
    const storagePurchaseAmount = document.getElementById('storage-cost').innerText
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = document.getElementById('best-price').innerText;


    const salesValue = document.getElementById('sales-value');

    const totalAmount = parseFloat(memoryPuschaseAmount) + parseFloat(storagePurchaseAmount) + parseFloat(deliveryCost) + parseFloat(bestPrice);
    salesValue.innerText = totalAmount;


    //condition of promocode "stevekaku" is add case-sensitive .toLowerCase
    // --------------------------------------------------------------
    const promoCodeInputField = document.getElementById('promo-input');
    const promoAmount = document.getElementById('promo-value');

    const promoCode = 'stevekaku';
    const promoCodeCase = promoCode.toLowerCase();
    if (promoCodeInputField.value.toLowerCase() == promoCodeCase) {
        const discount = totalAmount * .2;
        promoAmount.innerText = totalAmount - discount;

        // clear input Field
        promoCodeInputField.value = '';
    }
    else {
        promoAmount.innerText = totalAmount;
    }



}


// promo code calling button and calculation button called
// ------------------------------------------------------------------------

document.getElementById('apply-button').addEventListener('click', function () {
    calculation()

})