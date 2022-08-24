window.onload = ()=>{
const getImages = async () =>{
    const response = await fetch("https://striveschool-api.herokuapp.com/books")
    const books =await response.json()
    console.log(books)
}
}