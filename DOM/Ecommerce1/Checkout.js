
let form = document.querySelector('form');
form.addEventListener('submit', validateData)
function validateData(e){
    e.preventDefault();
    let card = document.querySelector('#card');
    let cvv = document.querySelector('#cvv');
    let date = document.querySelector('#date');
    let name = document.querySelector('name');

    console.log(card)
    if(card.value == 6234567890123456 && cvv.value == 123 ){
        window.location.href= './opt.html'
    }
    else{
        alert('Something Went Wrong')
    }
}