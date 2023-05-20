
function UserDetails(name,contact,email,password){
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.password = password
}
let form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let contact = document.querySelector('#contact').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if(name =='' || contact==''|| email==''||password==''){
        alert('Please fill all the fields');
    }
    else{

        let user = new UserDetails(name,contact,email,password)
        
        localStorage.setItem('userInfo', JSON.stringify(user));
        form.reset();
        window.location.href="./login.html"
    }
} )