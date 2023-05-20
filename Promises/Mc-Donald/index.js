let foodArray=[
    { imgUrl:'https://media.istockphoto.com/id/1157515115/photo/cheeseburger-isolated-on-white.jpg?s=612x612&w=is&k=20&c=RLYiHDVxcdE9uhuVGjLTr2-E_TICUnwiOhVolTWx_rI=',name:'Cheeseburger',price:'150'},

    {imgUrl:'https://media.istockphoto.com/id/1345623444/photo/super-chocolatey-cake.webp?s=612x612&w=is&k=20&c=ax4nMgT21fnJDUHgQzFobm8Cybps094JxOdvb4Sf5I0=',name:'Dark Belgian Chocolate',price:'100'},

    {imgUrl:'https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=1024x1024&w=is&k=20&c=L8h3NUxinbmrBkSc7ETJHHxlEn6qYX4xzqIahI1Nh10=',name:'Pizza with melted Cheese',price:'500'},

    {imgUrl:'https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204_960_720.jpg',name:'Muffins',price:'150'},

    {imgUrl:'https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_960_720.jpg',name:'Coffee-Bread',price:'100'},

    {imgUrl:'https://tse3.mm.bing.net/th?id=OIP.SQSw9t2iNJxzPyOEtKVdjQHaE_&pid=Api&P=0',name:'Samosa',price:'50'},

    {imgUrl:'https://wallpapercave.com/wp/wp3724319.jpg',name:'Veg-Thali',price:'250'},

    {imgUrl:'http://im.rediff.com/getahead/2017/mar/28foodies5.jpg',name:'Pani-puri',price:'50'},

    {imgUrl:'https://www.businessinsider.in/photo/81591603/is-a-vegan-diet-practical-or-sustainable-for-those-living-in-india.jpg?imgsize=692913',name:'Idli-Sambar',price:'120'},
    
    {imgUrl:'https://qph.fs.quoracdn.net/main-qimg-103ba7805ee974249fbcf927ab9e860e-c',name:'Momos',price:'200'},
];

displayMenu(foodArray);

function displayMenu(items){
    let form = document.querySelector('form');
    items.map((ele)=>{
        let span = document.createElement('div');

        let input = document.createElement('input');
        input.type = 'checkbox';
        input.name = ele.name;
        input.id = ele.imgUrl;

        let label= document.createElement('label');
        label.textContent = ele.name;

        span.append(input,label)

        form.append(span);
    })
}

let display = document.querySelector('#display')

let button = document.querySelector('#order');
button.addEventListener('click', function(){
    let selectedItems = document.querySelectorAll('input:checked');
    console.log(selectedItems)

    if(selectedItems.length<=0){
        alert('Please Selecte alteast 1 item')
    }
    else{
        alert('Your Order is being processed! Request your patience')
    }

    let promise = new Promise(function(reslove, reject){

        let random =Math.floor(Math.random()*5)+1;

        setTimeout(function(){
            reslove('Your Order is Ready!')  // V. V. important step
        }, random*1000)
        console.log(random);
    })

    promise.then(function(res){
        document.querySelector('form').reset();
        alert(res);
        console.log(selectedItems)
        let id = (Math.round(Math.random()*6)+1)*10000;
        console.log(id)
        let orderID = document.querySelector('#order_ID');
        orderID.textContent = 'Order Id : AD'+id;
        document.querySelector('#display').innerHTML=null;
        for(let i=0; i<selectedItems.length; i++){
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = selectedItems[i].id;

            let name = document.createElement('h4');
            name.innerText = selectedItems[i].name;

            div.append(img,name)
            document.querySelector('#display').append(div);
        }
    })


})