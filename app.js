let api = "https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
let onmapi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
let mimg = "https://image.tmdb.org/t/p/w1280";
let notimg = "https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/200w.gif?cid=6c09b952i3pbmt0t1tdyaewj0kdk294kotp7muojlobdbe4a&ep=v1_gifs_search&rid=200w.gif&ct=g";

let input = document.querySelector("#input");
let movie_box = document.querySelector(".movie-box"); 

const showmovie =(data)=>{
    
    if(data.length !== 0){
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
    } else{
        movie_box.innerHTML = `  <div class="not_img m-auto">
                    <h1> movie not Found !</h1>
                    <img src="${notimg}" alt="Img not found" class = "img-fluid  "> 
                </div>`;
    }

} 

const getmovie = async(apis)=>{ 
    let movie = await fetch(apis)
    let data = await movie.json();  
    // console.log(data); 
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