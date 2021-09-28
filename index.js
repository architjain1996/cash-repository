
function getNoOfNotes() 
{
    debugger;
    var availableNotes = [2000, 500, 100, 20, 10, 5, 1];
    var billAmount = document.getElementById("inputBillId");
    var cashGiven = document.getElementById("inputCashId");
    var checkButton = document.getElementById("buttonId");
    var noOfNotes = document.getElementsByClassName("denominationNo");
    if (parseInt(billAmount.value) > 0) 
    {    
        if (parseInt(cashGiven.value) >= parseInt(billAmount.value))
        {            
            var amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value); 
            for (let i = 0; i < availableNotes.length; i++) 
            {
                var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
                amountToBeReturned = amountToBeReturned % availableNotes[i];
                noOfNotes[i].innerText = numberOfNotes;
            }
        }
        else
        {
            alert("Sorry !!.");
        }
    }
    else 
    {
        alert("Invalid Bill Amount");
    }
}