

const API_KEY = 'e94ca32deabb9adcf5288b5cd65bcb1f'
// 'c11aebdd18cf8abc9718b37118deaea0'; //MAiN API KEY{brave browser gnews.io}

//Extra APIS - 1) 2a1d88b214f64048be52cfdd39b330ca - skfeat177
//Extra APIS - 2) 042752ddb89d4a8580e900e2d5ab0842 - bravebrowser1775
//Extra APIS - 3) b85895d11e12402abf32d7003b7d6079 - sassyrashmi


const query = "anime"; // replace with your query
const language = 'en'; // add the language parameter
// const page = (Math.floor(Math.random()*10)).toString()
const page = 1
const r1 = Math.floor(Math.random() * 10);
const r2 = Math.floor(Math.random() * 10);
const r3 = Math.floor(Math.random() * 10);


  
const apiUrl = `https://gnews.io/api/v4/search?q=anime&lang=en&apikey=${API_KEY}`
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const totalResults = data.totalResults;
    console.log(`There are ${totalResults} articles available for the query '${query}'.`);
    ran=Math.floor(Math.random()*100)
    let img1=data["articles"][r1]["image"]
    let img2=data["articles"][r2]["image"]
    let img3=data["articles"][r3]["image"]
    document.getElementById("img1").setAttribute("src",img1)
    document.getElementById("img1").setAttribute("width",1000)
    document.getElementById("img1").setAttribute("height",545)
    document.getElementById("img2").setAttribute("src",img2)
    document.getElementById("img2").setAttribute("width",1000)
    document.getElementById("img2").setAttribute("height",545)
    document.getElementById("img3").setAttribute("src",img3)
    document.getElementById("img3").setAttribute("width",1000)
    document.getElementById("img3").setAttribute("height",545)
    document.getElementById("head1").innerText=data["articles"][r1]["title"]
    document.getElementById("head2").innerText=data["articles"][r2]["title"]
    document.getElementById("head3").innerText=data["articles"][r3]["title"]
    document.getElementById("descrip1").innerText=data["articles"][r1]["description"]
    document.getElementById("descrip2").innerText=data["articles"][r2]["description"]
    document.getElementById("descrip3").innerText=data["articles"][r3]["description"]

   
    
  })
  window.addEventListener('load', () => {
    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'none';
  });

  