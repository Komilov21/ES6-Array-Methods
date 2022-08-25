
const getImages = async () =>{
    let books

    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/books")
        books = await res.json()

        books.map(book => {
            let container = document.querySelectorAll(".row")[0]
            let newElem = document.createElement("div")
            // let img = document.createElement('img')
            // img.setAttribute('src', book.img)
            // newElem.className = "col-md-4 "
            img.innerHTML=`<div class="card">
                           <img src=${books.img} class="card-img-top" alt="${books.title}">
                         <div class="card-body">
                          <p class="card-text">${books.category}.</p>
                          </div>
                          </div>`
            newElem.appendChild(img)
            
    
            // console.log(container)
            container.appendChild(newElem)
        }) 
        

    } catch (error) {
        console.log(error)
    };
    // const container = document.querySelectorAll(".row")
 
}
getImages()
window.onload = ()=>{}

// const response = await fetch("https://striveschool-api.herokuapp.com/books")
// const books =await response.json()
// console.log(books)
// const container = document.getElementsByClassName("row")
// const newElem =document.createElement("div")
// newElem.classList.add("col")
// books.map(book) => {
