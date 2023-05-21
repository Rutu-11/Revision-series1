
function CreateBlog(title, author,content,category,tags){
    this.title = title;
    this.author = author;
    this.content = content;
    this.category = category;
    this.tags = tags;
}

let button = document.querySelector('#create');
button.addEventListener('click', addBlog);

function addBlog(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let content = document.querySelector('#content').value;
    let category = document.querySelector('#category').value;
    let tags = document.querySelector('#tags').value;

    let blog = new CreateBlog(title, author, content, category, tags);
console.log('blog',blog)
    postBlog(blog);
}

async function postBlog(obj){
    fetch('http://localhost:3000/blogs',{
        method: 'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        location.href='main.html'
    })
    .then((e)=>{
        console.log(e)
    })
}