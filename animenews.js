// const apiKey1 = '2a1d88b214f64048be52cfdd39b330ca';
const query1 = "anime"; // replace with your query
const language1 = 'en'; // add the language parameter
// const page = (Math.floor(Math.random()*10)).toString()
const page1 = 1
const r11 = Math.floor(Math.random() * 10);
const r12 = Math.floor(Math.random() * 10);

let randomquery = ["headlines", "anime", "manga","crunchyroll", "new anime", "youtube", "google"]
const randomIndex = Math.floor(Math.random() * randomquery.length); // Generate a random index
const randomElement = randomquery[randomIndex]; // Get the element at the random index
const randomString = randomElement.toString();
console.log(randomString)
const apiUrl1 = `https://gnews.io/api/v4/search?q=${randomString}&lang=en&apikey=${API_KEY}`;

fetch(apiUrl1)
    .then(response => response.json())
    .then(data => {
        console.log("the laoded is"+data)
        console.log(data)
        ran = Math.floor(Math.random() * 10)
        let img1 = data["articles"][r11]["image"]
        console.log(img1)
        let img2 = data["articles"][r12]["image"]

        document.getElementById("animg1").setAttribute("src", img1)
        document.getElementById("animg2").setAttribute("src", img2)
        document.getElementById("ht1").innerHTML = data["articles"][r11]["title"]
        document.getElementById("ht2").innerHTML = data["articles"][r12]["title"]
        document.getElementById("dp1").innerHTML = data["articles"][r11]["description"]
        document.getElementById("dp2").innerHTML = data["articles"][r12]["description"]


        const publishedAt = new Date(data["articles"][r11]["publishedAt"]);
        const date = publishedAt.toLocaleDateString();
        const time = publishedAt.toLocaleTimeString();
        document.getElementById("pd1").innerHTML = `<small class="text-body-secondary">Published on ${date} at ${time}</small>`
        const publishedAt1 = new Date(data["articles"][r11]["publishedAt"]);
        const publishedAt2 = new Date(data["articles"][r12]["publishedAt"]);
        const date1 = publishedAt1.toLocaleDateString();
        const time1 = publishedAt1.toLocaleTimeString();
        document.getElementById("pd2").innerHTML = `<small class="text-body-secondary">Published on ${date1} at ${time1}</small>`
        const date2 = publishedAt2.toLocaleDateString();
        const time2 = publishedAt2.toLocaleTimeString();
        let lnk = data["articles"][r11]["url"]
        let lnk2 = data["articles"][r12]["url"]
        document.getElementById("link1").setAttribute("href", lnk)
        document.getElementById("link2").setAttribute("href", lnk2)

     
 function addDivs() {

            let randomquery = ["headlines", "anime", "manga", "crunchyroll", "youtube", "google"]
            const randomIndex = Math.floor(Math.random() * randomquery.length); // Generate a random index
            const randomElement = randomquery[randomIndex]; // Get the element at the random index
            const randomString = randomElement.toString();
            const apiUrl1 = `https://gnews.io/api/v4/search?q=${randomString}&lang=en&apikey=${API_KEY}`;

            fetch(apiUrl1)
                .then(response => response.json())
                .then(data => {

                    for (let i = 0; i < 10; i++) {
                        let newsnumber =i
                        const div = document.createElement("div");
                        const publishedAt3 = new Date(data["articles"][newsnumber]["publishedAt"]);
                        const date = publishedAt3.toLocaleDateString();
                        const time = publishedAt3.toLocaleTimeString();
                        let lnk = data["articles"][newsnumber]["url"]
                        div.innerHTML += '<div class="col">' +
                            '<div class="card">' +
                            `<img src="${data["articles"][newsnumber]["image"]}" class="card-img-top" height=300px alt="..." onerror="this.onerror=null; this.src='error.jpg';">` +
                            '<div class="card-body">' +
                            `<h5 class="card-title">${data["articles"][newsnumber]["title"]}</h5>` +
                            `<p class="card-text">${data["articles"][newsnumber]["description"]}</p>` +
                            `<p class="card-text"><small class="text-body-secondary">Published on ${date} at ${time}</small></p>` +
                            `<div class="card text-center ml-5 mr-5"><a href=${lnk} class="btn btn-primary"  target="_blank" >Read more</a></div>` +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        document.getElementById("childnews").appendChild(div)
                    }
                })
        }
        const button = document.querySelector("#loadmore");
        button.addEventListener("click", addDivs);





    })
































// this is function to load more news
