
var moviesArray = [
    {imgUrl: 'https://nofilmschool.com/sites/default/files/styles/facebook/public/halloween_hbo.jpeg?itok=raVhgVKB', name: 'Thriller', rating: '9',releaseDate:'22/01/2023'},


    {imgUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/11/jbareham_190421_0890_mcu_ranked_final.0.jpg', name: 'Marval Movies', rating: '10' ,releaseDate:'31/01/2023'},


    {imgUrl: 'http://1.bp.blogspot.com/-p-3tBMLj7r0/TafyX744nhI/AAAAAAAAAOY/JBT_-bf5g0g/s1600/8ugadr7ere.jpg', name: 'Cindrella', rating: '9' ,releaseDate:'20/02/2023'},


    {imgUrl: 'https://www.hdwallpapers.in/download/vijay_in_sarkar_movie_4k-HD.jpg', name: 'Sarakaar', rating: '8' ,releaseDate:'18/01/2023'},


    {imgUrl: 'https://mrityunjaypalash.files.wordpress.com/2015/12/tamasha-movie.jpg', name: 'Tamaasha', rating: '7' ,releaseDate:'02/02/2023'},

    {imgUrl:'http://www.moviehdwallpapers.com/wp-content/uploads/2013/12/I-Frankenstein-HD-Wallpapers.jpg', name:'Frankenstein', rating:'6' ,releaseDate:'02/03/2023'},

    {imgUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ved-et00343245-1672121623.jpg', name:'Ved', rating:'6' ,releaseDate:'12/03/2023'},

    {imgUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/varisu-hindi-et00349618-1673267192.jpg', name:'Vaarisu', rating:'8' ,releaseDate:'15/02/2023'},

    {imgUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kuttey-et00314129-1673013013.jpg', name:'Kuttey', rating:'7' ,releaseDate:'28/01/2023'}
]

let movies = [...moviesArray]
    let slideshow = document.querySelector('#slideshow');

    let i=0;

    let id = setInterval(function(){
        if(i==movies.length){
            i=0;
        }
        // console.log(i)
        slideshow.innerHTML=null;
        let img = document.createElement('img');
        img.setAttribute('src',movies[i].imgUrl);
        slideshow.append(img);
        i++;
        
    },1000)


    let moviesDiv = document.querySelector('#movies')
    displayMovies(moviesArray);

    function displayMovies(movies){
        moviesDiv.innerHTML=null;
        movies.map((ele)=>{
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = ele.imgUrl;

            let name = document.createElement('h5');
            name.textContent= ele.name;

            let rating = document.createElement('h4');
            rating.textContent = ele.rating;

            let release = document.createElement('h4');
            release.textContent = ele.releaseDate;

            div.append(img, name, rating,release);
            moviesDiv.append(div);
        })

    }

    let duplicate = [...moviesArray]
    let button_LH = document.querySelector('#sort-lh');
    button_LH.addEventListener('click', function(){
        let sorted = duplicate.sort(function(a,b){
            return a.rating-b.rating;
        }) 
        console.log('sorted',sorted)
        displayMovies(sorted)
    })

    let button_HL = document.querySelector('#sort-hl');
    button_HL.addEventListener('click', function(){
        let sorted = duplicate.sort(function(a,b){
            return b.rating- a.rating;
        })
        displayMovies(sorted);
    })
    