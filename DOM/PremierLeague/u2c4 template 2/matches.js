// write js code here corresponding to matches.html

let tbody = document.querySelector('tbody');
let matchData = JSON.parse(localStorage.getItem('schedule')) || [];

displayData(matchData);

function displayData(data){
    tbody.innerHTML = '';
    data.map((ele)=>{
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
           let index =  favourites.findIndex(item=>item.number == ele.number);
           console.log('index', index)
           if(index == -1){
                favourites.push(ele);
                localStorage.setItem('favourites', JSON.stringify(favourites));
           }
        })

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    })
}


let duplicate = [...matchData]
let filterVenue = document.querySelector('#filterVenue');
filterVenue.addEventListener('change', function(){
    let selected = filterVenue.value;
    console.log('selected', selected)
   let filter =  matchData.filter((ele)=>{
        return ele.venue == selected;
    })
    if(selected == 'none'){
        displayData(duplicate)
    }else{
        displayData(filter)
    }
    
})