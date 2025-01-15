//          API Key

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'



const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
console.log(search);

              //promise


// async function getMovies(url) {
//     let myPromise = new Promise(function(resolve, reject) {
//       fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data.resutls));
//     })
//     await myPromise;
// }




              // ASYNC AWAIT



async function getMovies (url)  {
  const result = await fetch(url);
  const data = await result.json();
  showMovies(data.results)
}
getMovies(API_URL);


// TODO : Create function that will draw movies on screen
// TODO : Create function that will render rating of the movie
// TODO : Navigate to the new page for single movie
// TODO : Create function that will search for movies


async function showMovies(movies) {
  (main.innerHTML = ""),
  console.log(movies);
  movies.forEach(movie => {
    const { 
      title,
      poster_path,
      vote_average, 
      release_date, 
      overview,
  
     } = movie;
    
    const movieEl = document.createElement("div")

    movieEl.innerHTML = `

  <div class="py-3 sm:max-w-xl sm:mx-auto cursor-pointer">
    <div class="bg-[#2563eb] shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
      <div class="h-48 overflow-visible w-1/2">
          <img class="rounded-3xl shadow-lg h-[300px] hover:translate-y-[-35px]" src="${IMG_PATH + poster_path}" alt="">
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">
          <h2 class="text-3xl font-bold text-white hover:text-[#ef4444]">${title}</h2>
          <div class="bg-yellow-400 w-[50px] text-center ${getClassByRate(vote_average)} font-bold rounded-xl p-2">${Math.round(vote_average)}</div>
        </div>
        <div>
          <div class="text-sm text-gray-200">Series</div>
          <div class="text-lg text-gray-300">${release_date}</div>
        </div>
          <p class=" text-gray-300 max-h-40 overflow-y-hidden">${overview.slice(0, 71)}</p>
        <div class="flex text-2xl font-bold text-gray-100 hover:text-[#ef4444]">$83.90</div>
      </div>
    </div>
  </div>`;
    main.appendChild(movieEl);
    
    });
}

function getClassByRate(vote){
  if (vote >= 8){
    return 'bg-green-500';
  }else if (vote >= 6){
    return 'bg-yellow-500';
  }else{
    return 'bg-red-500';
  }

}

form.addEventListener("submit",(e) => {
  e.preventDefault();
  const searchTerm = search.value;
 

  getMovies(SEARCH_API + searchTerm)
});


