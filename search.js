
function searchvalue() {
    document.getElementById("searchednews").innerHTML=""
    
  var getquery = document.getElementById("searchpage").value;
  console.log(getquery)
  

const query2 = getquery // replace with your query
const apiUrl2 = `https://gnews.io/api/v4/search?q=${query2}&lang=en&apikey=${API_KEY}`;
// onerror="this.onerror=null; this.src='alternative-image.jpg';"

fetch(apiUrl2)
.then(response => response.json())
.then(searchdata => {

    function capitalizeWords(str) {
        let words = str.split(' ');
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
      }
      
      let str = getquery
      let capitalizedStr = capitalizeWords(str);
      

    document.getElementById("show").innerHTML=`<hr><center>Search Result:<font color=blue> 10 </font> Articles found for your query <font color=green>${capitalizedStr} </font></center>`
console.log(searchdata["articles"][0]["title"])

console.log(searchdata.totalResults)

for (let i = 0; i < 10 ; i++) {
    const div = document.createElement("div");
    const publishedAt3 = new Date(searchdata["articles"][i]["publishedAt"]);
    const date = publishedAt3.toLocaleDateString();
    const time = publishedAt3.toLocaleTimeString();
    let lnk = searchdata["articles"][i]["url"]
    div.innerHTML += '<div class="col">' +
        '<div class="card">' +
        `<img src="${searchdata["articles"][i]["image"]}" class="card-img-top" height=300px alt="..." onerror="this.onerror=null; this.src='error.jpg';">` +
        '<div class="card-body">' +
        `<h5 class="card-title">${searchdata["articles"][i]["title"]}</h5>` +
        `<p class="card-text">${searchdata["articles"][i]["description"]}</p>` +
        `<p class="card-text"><small class="text-body-secondary">Published on ${date} at ${time}</small></p>` +
        `<div class="card text-center ml-5 mr-5"><a href=${lnk} class="btn btn-primary"  target="_blank" >Read more</a></div>` +
        '</div>' +
        '</div>' +
        '</div>';
        document.getElementById("searchednews").appendChild(div);  

}



})}

const button = document.querySelector("#searchbtn");
button.addEventListener("click", searchvalue);

function reset(){
    document.getElementById("searchednews").innerHTML=""
    document.getElementById("show").innerHTML=""
    // document.getElementById("searchpage").value=""
}

function clear(){
  
    document.getElementById("searchednews").innerHTML=""
    document.getElementById("show").innerHTML=""
}

const button1 = document.querySelector("#reset");
button1.addEventListener("click", reset);




