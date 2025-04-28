let api = "https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
let onmapi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
let mimg = "https://image.tmdb.org/t/p/w1280";


let input = document.querySelector("#input");
let movie_box = document.querySelector(".movie-box"); 

const showmovie =(data)=>{
    movie_box.innerHTML = ""; 
    data.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("box");

        div.innerHTML = ` <img src="${mimg+element.backdrop_path }" alt="" height="100%" width="100%">
                    <div class="overview">
                        <div class="d-flex justify-content-around" >
                            <span class="fw-semibold">${element.title}</span> 
                            <span class="text-warning"> ${element.vote_average} </span>
                        </div>  
                        <div class="text-center size mt-2"> ${element.overview}</div>
                    </div>` ; 
        movie_box.append(div);  
    }); 
} 

const getmovie = async(apis)=>{ 
    let movie = await fetch(apis)
    let data = await movie.json();  
    showmovie(data.results); 
    
}


input.addEventListener(
    "keyup", 
   async function(event){  
    if(event.target.value !== ""){
        getmovie(onmapi+event.target.value);  
    } else{

        getmovie(api); 
    }
    } 
)

getmovie(api); 



// let movie = event.target.value;
//         console.log(movie);
//         let onlineMovie = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movie}`);
//         let online = await onlineMovie.json();  
//         showmovie(online.results);  