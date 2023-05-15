let cartItems = JSON.parse(localStorage.getItem('cart'))||[];

let cartCount = document.querySelector('#cartCount');
cartCount.textContent= 'Total Items  : '+ cartItems.length;


 let cartTotal = document.querySelector('#cartTotal');

 findTotal(cartItems);

 function findTotal(data){
    let TotalCart = 0;
    data.map((ele)=>{
        TotalCart +=  ele.price*ele.qty
     })
     
     cartTotal.textContent = 'Total Cart Amount : $' + TotalCart;
    //  displayCart(cartItems)
 }
 
 let promoInput = document.querySelector('#promoInput');
     let promoButton = document.querySelector('#promoApply')
     promoButton.addEventListener('click', function(){
        if(promoInput.value == 'masai30'){
            
            let TotalCart = 0;
            cartItems.map((ele)=>{
                TotalCart +=  ele.price*ele.qty
            })
            
            TotalCart = TotalCart*(30/100);
            alert(' Congratulations! coupine applied ')
            cartTotal.textContent = 'Total Cart Amount : $' + TotalCart;
        }
        else{
            alert(' Ooops! Better Luck Next Time')
        }
     })

displayCart(cartItems);

function displayCart(data){
    document.querySelector('#parent').innerHTML="";
    data.map((ele,ind)=>{
        let div = document.createElement('div');

        let img= document.createElement('img');
        img.setAttribute('src', ele.image_url);

        let h5 = document.createElement('h5');
        h5.textContent = ele.name;

        let price = document.createElement('h5');
        price.textContent ='$'+" "+ ele.price; 

        // let incDiv= document.createElement('div');
        let incP = document.createElement('span');
        incP.textContent = ele.qty;
        incP.style.margin='0 5px 0 5px'

        let increment = document.createElement('button');
        increment.textContent="   +   ";
        increment.addEventListener('click', function(){
            ele.qty++;
            localStorage.setItem('cart', JSON.stringify(cartItems));
            cartItems = JSON.parse(localStorage.getItem('cart'));
            findTotal(cartItems);
            displayCart(cartItems)
        })
        let decrement = document.createElement('button');
        decrement.textContent="   -    ";


        decrement.addEventListener('click',function(){
            if(ele.qty>1){
                ele.qty--;
            }
           
            localStorage.setItem('cart', JSON.stringify(cartItems));
            cartItems = JSON.parse(localStorage.getItem('cart'));
            findTotal(cartItems);
            displayCart(cartItems)
        })



        let button = document.createElement('button');
        button.textContent="Remove from Cart";
        button.addEventListener('click',function(){
            cartItems.splice(ind,1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            findTotal(cartItems);
            displayCart(cartItems);
        })


        let qtyDiv = document.createElement('div');
        qtyDiv.setAttribute('id', 'qtyDiv')
        div.append(increment, incP, decrement)
        div.append(img,name,price,qtyDiv, button);
        document.querySelector('#parent').append(div);
    })
}