
// external service cost calculation by button
// ---------------------------------------------------------------------
function memoryButton(expenseId, isAdd, amount) {

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


    const promoInput = document.getElementById('promo-input');
    const salesValue = document.getElementById('sales-value');
    const promoValue = document.getElementById('promo-value');


    const totalAmount = parseFloat(memoryPuschaseAmount) + parseFloat(storagePurchaseAmount) + parseFloat(deliveryCost) + parseFloat(bestPrice);
    salesValue.innerText = totalAmount;


    //condition of promocode "stevekaku" none case sensetive
    // --------------------------------------------------------------
    if (promoInput.value == 'stevekaku') {
        const discount = totalAmount * .2;
        promoValue.innerText = totalAmount - discount;

        // clear input Field
        promoInput.value = '';
    }
    else {
        promoValue.innerText = totalAmount;
    }



}


// promo code calling button and calculation button called
// ------------------------------------------------------------------------

document.getElementById('apply-button').addEventListener('click', function () {
    calculation()

})