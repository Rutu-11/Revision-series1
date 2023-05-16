// write js code here corresponding to favourites.html

let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let tbody = document.querySelector('tbody');
displayFav(favourites);

function displayFav(data){
    tbody.innerHTML="";

    data.map((ele, ind)=>{
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = ele.number;

        let td2 = document.createElement('td');
        td2.textContent = ele.teamA;

        let td3 = document.createElement('td');
        td3.textContent = ele.teamB;

        let td4 = document.createElement('td');
        td4.textContent = ele.date;

        let td5 = document.createElement('td');
        td5.textContent = ele.venue;

        let td6 = document.createElement('td');
        td6.textContent = 'Favourite';
        td6.style.cursor='pointer';
        td6.addEventListener('click', function(){
            let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
            favourites.splice(ind, 1);
            localStorage.setItem('favourites', JSON.stringify(favourites));
            displayFav(favourites)
        })

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    })
}