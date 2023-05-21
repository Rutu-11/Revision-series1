let id = localStorage.getItem('id')||0;
let BlogObj = {};
async function getBlog(){
try{
    let res = await fetch('http://localhost:3000/blogs/'+id)
    let BlogObj = await res.json();
        console.log(BlogObj)
        document.querySelector('#title').value = BlogObj.title
     document.querySelector('#author').value = BlogObj.author
    document.querySelector('#content').value = BlogObj.body
    document.querySelector('#category').value = BlogObj.category
   document.querySelector('#tags').value = BlogObj.tags
        
}
catch(e){
    console.log(e)
}
}
getBlog();
function CreateBlog(title, author,body,category,tags){
    this.title = title;
    this.author = author;
    this.body = body;
    this.category = category;
    this.tags = tags;
}

let button = document.querySelector('#edit');
button.addEventListener('click', addBlog);


function addBlog(){
  let title =  document.querySelector('#title').value;
  let author =  document.querySelector('#author').value;
  let body = document.querySelector('#content').value;
  let category = document.querySelector('#category').value;
  let tags = document.querySelector('#tags').value;

    let blog = new CreateBlog(title, author, body, category, tags);
console.log('blog',blog)
    postBlog(blog);
}

async function postBlog(obj){
    fetch('http://localhost:3000/blogs/'+id,{
        method: 'PATCH',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        // console.log('data',data);
        location.href='main.html'
    })
    .then((e)=>{
        console.log(e)
    })
}