let amount = document.getElementById('Amount');
let guest = document.getElementById('Guest');
let quality = document.getElementById('quality');
let tipAmount = document.getElementById('tipAmount');
calculate = ()=>{
let tip = ((amount.value*quality.value)/(guest.value)).toFixed(2);
amount.value = "";
guest.value = "";
quality.value = "";
if(tip == 'NaN'){
    tipAmount.innerHTML = 'tip #0 each';
    showTipAmount();
}
else{
    tipAmount.innerHTML = `tip # ${tip} each`
    showTipAmount();
}
}
function showTipAmount(){
    let s = tipAmount;
    s.className = 'show';
    setTimeout(function(){
        s.className = s.className.replace('show', '');
    }, 3000);
}