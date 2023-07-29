//access html id

const params = new URLSearchParams(window.location.search);
var id = params.get('id');
// var id =localStorage.getItem("nameId");
var image = document.getElementById('hero-img');
var nameHero = document.getElementById('h1');

//initialize http request
var xhrRequest = new XMLHttpRequest();

//api request for image of superhero
xhrRequest.onload = function() {
    var responseJson = JSON.parse(xhrRequest.response);
    var imgUrl = responseJson.url;
    var img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    image.appendChild(img);
}

xhrRequest.open("GET", "https://superheroapi.com/api.php/2645388492343736/" + id + "/image");
xhrRequest.send();


//api request for name of superhero
var xhrName = new XMLHttpRequest();
xhrName.onload = function() {
    var responseName = JSON.parse(xhrName.response);
    var nameUrl = responseName.name;
    nameHero.innerHTML = nameUrl;

}

xhrName.open("GET", "https://superheroapi.com/api.php/2645388492343736/" + id);
xhrName.send();


//api request for bio of superhero

var xhrBio = new XMLHttpRequest();
xhrBio.onload = function() {
    let responseBio = JSON.parse(xhrBio.response);
    let div1 = document.createElement("div");
    div1.innerHTML = responseBio.biography["full-name"];

    let div2 = document.createElement("div");
    div2.innerHTML = responseBio.biography["alter-egos"];

    let div3 = document.createElement("div");
    div3.innerHTML = responseBio.biography.aliases;

    let div4 = document.createElement("div");
    div4.innerHTML = responseBio.biography["place-of-birth"];

    let div5 = document.createElement("div");
    div5.innerHTML = responseBio.biography["first-appearance"];

    let div6 = document.createElement("div");
    div6.innerHTML = responseBio.biography.publisher;

    let div7 = document.createElement("div");
    div7.innerHTML = responseBio.biography.alignment;
    document.getElementById("full-name").appendChild(div1);
    document.getElementById("alter-egos").appendChild(div2);
    document.getElementById("aliases").appendChild(div3);
    document.getElementById("birth").appendChild(div4);
    document.getElementById("appearance").appendChild(div5);
    document.getElementById("publisher").appendChild(div6);
    document.getElementById("alignment").appendChild(div7);

}

xhrBio.open("GET", "https://superheroapi.com/api.php/2645388492343736/" + id);
xhrBio.send();


//api request for power stats of superhero

let xhrpowerstat = new XMLHttpRequest();
xhrpowerstat.onload = function() {
    let xhrPwr = JSON.parse(xhrpowerstat.response);
    let div1 = document.createElement("div");
    div1.innerHTML = xhrPwr.intelligence;
    let div2 = document.createElement("div");
    div2.innerHTML = xhrPwr.strength;
    let div3 = document.createElement("div");
    div3.innerHTML = xhrPwr.speed;
    let div4 = document.createElement("div");
    div4.innerHTML = xhrPwr.durability;
    let div5 = document.createElement("div");
    div5.innerHTML = xhrPwr.power;
    let div6 = document.createElement("div");
    div6.innerHTML = xhrPwr.combat;
    document.getElementById("intelligence").appendChild(div1);
    document.getElementById("strength").appendChild(div2);
    document.getElementById("speed").appendChild(div3);
    document.getElementById("durability").appendChild(div4);
    document.getElementById("power").appendChild(div5);
    document.getElementById("combat").appendChild(div6);
}

//initialize request 

xhrpowerstat.open("GET", "https://superheroapi.com/api.php/2645388492343736/" + id + "/powerstats");

// send request

xhrpowerstat.send();

localStorage.removeItem("heroId");