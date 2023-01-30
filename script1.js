const input= document.getElementById("searchbar")
const cards= document.getElementById("card")
const form= document.getElementById("form").addEventListener('submit' , (e)=>{
    e.preventDefault()
})

const searchselect=document.getElementById("category")
let selectvalue = searchselect.value

const moviedropdown= document.getElementById("movie")
const seriesdropdown= document.getElementById("tv")


searchselect.addEventListener('change',(ele)=>{
    selectvalue= searchselect.value 
    if(selectvalue =='movie'){
       moviedropdown.addEventListener('change',findmovie(selectvalue)) 
    }
    else if(selectvalue =='tv'){
       seriesdropdown.addEventListener('change',findtv(selectvalue)) 
    }
   

})

function movies(){
        if(selectvalue=='movie'){
            findmovie(selectvalue)
        }
       else{
        findtv(selectvalue)
       }
    
}




async function  findmovie(selectvalue){
    cards.innerHTML=""
    let inputvalue=input.value
    const res= await fetch(`https://api.themoviedb.org/3/search/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${inputvalue}`)

    const data= await res.json()
    data.results.map((ele)=>{
    card.innerHTML += `
    <div class="card">
    <div class="circle">${(ele.vote_average*10).toFixed(1)}<span>%</span></div>
    <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" alt="">
    <div><h2>${ele.title}</h2>
    <p>Sci-fi || romantic</p>
    <h3>${ele.release_date}</h3></div>
    </div>
</div>
      `;
     })

}


async function  findtv(selectvalue){
    cards.innerHTML=""
    let inputvalue=input.value
    const res= await fetch(`https://api.themoviedb.org/3/search/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${inputvalue}`)

    const data= await res.json()
    data.results.map((ele)=>{
        cards.innerHTML +=` 
        <div class="card">
    <div class="circle">${(ele.vote_average*10).toFixed(1)}<span>%</span></div>
    <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" alt="">
    <div><h2>${ele.name}</h2>
    <p>Sci-fi || romantic</p>
    <h3>${ele.first_air_date}</h3></div>
    </div>
</div>`
    

       

     })

}