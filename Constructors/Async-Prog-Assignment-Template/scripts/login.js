
let userdetails = JSON.parse(localStorage.getItem('userInfo'))||{};

function LoginDetails(email,password){
    this.email = email;
    this.password = password;
}
let form = document.querySelector('form');
form.addEventListener('submit', function(){
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let login = new LoginDetails(email,password);

    if(login.email == userdetails.email && login.password == userdetails.password){
        alert('Login Successfull');
        window.open('./index.html')
    }
    else{
        alert("Invalid Credentials")
    }
})
