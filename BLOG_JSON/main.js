// import navbar from "./components/navbar";
// console.log(navbar)
// let nav = document.querySelector('#navbar');
// nav.append(navbar());

function fetchData(){
    fetch(`http://localhost:3000/blogs`)
    .then((res)=>res.json())
    .then((data)=>{
       console.log(data)
       displayData(data);
    })
}
fetchData();

function displayData(data){
   data.map((ele, ind)=>{
       let row = document.createElement('tr');

       let td1 = document.createElement('td');
       td1.textContent= ind+1;

       let td2 = document.createElement('td');
       td2.textContent = ele.title;

       let td3 = document.createElement('td');
       td3.textContent = ele.author;

       let td4 = document.createElement('td');
       td4.textContent = ele.body;

       let td5 = document.createElement('td');
       td5.textContent = ele.category;

       let td6 = document.createElement('td');
       td6.textContent = ele.created_date;

       let td7 = document.createElement('td');
       td7.textContent = ele.tags;

       let td8 = document.createElement('td');
        let button = document.createElement('button');
        button.textContent = 'VIEW';
        td8.append(button)
        button.addEventListener('click', function(){
            localStorage.setItem('id', ele.id);
            location.href = './view.html'
        })


        let td9 = document.createElement('td');
        let Dbutton = document.createElement('button');
        Dbutton.textContent='DELETE'
        td9.appendChild(Dbutton);
        Dbutton.addEventListener('click', function(){
            deleteRow(ele.id)
        })

        let td10 = document.createElement('td');
        let edit = document.createElement('button');
        edit.textContent='EDIT'
        td10.appendChild(edit);
        edit.addEventListener('click', function(){
            localStorage.setItem('id', ele.id);
            location.href = "edit.html"
        })

       row.append(td1, td2, td3, td4, td5, td6, td7, td8,td10, td9);
       document.querySelector('tbody').append(row);
   })
}

function deleteRow(id){
    fetch('http://localhost:3000/blogs/'+id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data',data)
        fetchData();
    })
}