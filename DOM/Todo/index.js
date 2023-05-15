
let todoList = JSON.parse(localStorage.getItem('todos')) || [];
// console.log('todoList',todoList);
let form = document.querySelector('form');
 console.log(form)
// let task = document.getElementById('task');
// let priority = document.getElementById('priority');
// let priorityValue ;
// priority.addEventListener('change',function(e){
//     priorityValue = e.target.value;
// })


form.addEventListener('submit',function(e){
    submitData(e)
})

function submitData(e){
    e.preventDefault();
    let task = document.querySelector('#task');
let priority = document.querySelector('#priority');

    let obj={
        task:task.value,
        priority:priority.value
    }
    console.log('obj',obj)
    todoList.push(obj);
    // console.log(todoList)
    localStorage.setItem( 'todos' ,JSON.stringify(todoList))
    displayTodos(todoList);
    document.querySelector('#task').value="";
    document.querySelector('#priority').value=""
}



displayTodos(todoList);

function displayTodos(data){
    document.querySelector('tbody').innerHTML="";
data.map((ele, ind)=>{
    console.log('ele',ele)
    let row = document.createElement('tr');

    let task = document.createElement('td');
    task.innerText = ele.task;

    let priority = document.createElement('td');
    priority.textContent = ele.priority;

    if(ele.priority== 'High'){
        priority.style.backgroundColor="red";
    }
    else{
        priority.style.backgroundColor="green";

    }

    let deleteBTN = document.createElement('button');
    deleteBTN.textContent = 'DELETE';
    deleteBTN.addEventListener('click',function(e){
        // todoList = JSON.stringify(localStorage.getItem('todos'));
        todoList.splice(ind,1);
        localStorage.setItem('todos', JSON.stringify(todoList))
        displayTodos(todoList);
    })

    
    row.append(task,priority,deleteBTN);
    document.querySelector('tbody').append(row);
})

}
