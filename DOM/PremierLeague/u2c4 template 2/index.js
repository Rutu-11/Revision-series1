// write js code here corresponding to index.html
// You should add submit event on the form


let matchData = JSON.parse(localStorage.getItem('schedule')) || [];
let form = document.querySelector('form').addEventListener('submit', submitData);

function submitData(e){
    e.preventDefault();
    let num = document.querySelector('#matchNum');
    let teamA = document.querySelector('#teamA');
    let teamB = document.querySelector('#teamB');
    let date = document.querySelector('#date');
    let venue = document.querySelector('#venue');

    let obj ={
        number : num.value,
        teamA : teamA.value,
        teamB : teamB.value,
        date : date.value,
        venue : venue.value
    }
    if(obj.number == "" || obj.teamA == '' || obj.teamB == '' || obj.date == '' || obj.venue == ''){
        alert('All feilds are mandatory')
    }
    else{
        matchData.push(obj);
        localStorage.setItem('schedule', JSON.stringify(matchData));
        num.value="",
        teamA.value="",
        teamB.value="",
        date.value="",
        venue.value=""
    }
}