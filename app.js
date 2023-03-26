randomAutors = []
function fetchRandomQuote(){
randomAutors = []

    let random = Math.floor(Math.random()*1000);
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let random = Math.floor(Math.random()*data.length);
    document.getElementById('random-qoute').innerHTML = (data[random].text);
    randomAutors.push((data[random].author))
    randomAutors.push((data[random-3].author))
    randomAutors.push((data[random-6].author))

//render authors value
let authorContainer = document.getElementById('author-container');
authorContainer.innerHTML = ''
randomAutors.map((x)=>{
  if(x!=null){
    let author = document.createElement('div');
    author.classList.add('author');
    author.innerHTML = x;
    authorContainer.appendChild(author)
  }
})

    console.log(randomAutors)
  });
}
fetchRandomQuote()