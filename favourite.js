var favList = document.getElementById('fav-list');
favourite();

function favourite() {
    var fav = localStorage.getItem('hero');
    var favs = JSON.parse(fav);
    favList.innerHTML = '';
    if (favs.length === 0)
        favList.innerHTML =
        '<div style="margin: 10%; text-align: center; color: white;font-size:2rem"> Favourites List Empty.Add your favourite Superhero<div>';

    favs.forEach((id) => {
        fetch('https://superheroapi.com/api.php/2645388492343736/' + id + '')
            .then((res) => res.json())
            .then((data) => createTask(data))
            .catch((err) => console.log(err));
    });
}

function createTask(data) {
    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('onclick', 'remove(' + data.id + ')');
    btn.innerHTML = 'Unlike';

    var anchor = document.createElement('a');
    anchor.setAttribute('onclick', 'herodetail(' + data.id + ')');
    anchor.innerHTML = data.name;
    var divBtn = document.createElement('div');
    divBtn.setAttribute('class', 'hero-name');

    var divName = document.createElement('div');
    divName.setAttribute('class', 'name');

    var divImg = document.createElement('div');
    divImg.setAttribute('class', 'image');
    var img = document.createElement('img');
    img.setAttribute('src', data.image.url);
    divImg.appendChild(img);

    divBtn.appendChild(anchor);

    divName.appendChild(divBtn);
    divName.appendChild(divImg);
    divName.appendChild(btn);
    favList.appendChild(divName);
}

function remove(id) {
    let task = localStorage.getItem('hero');
    tasks = JSON.parse(task);
    let index = tasks.indexOf(id);
    tasks.splice(index, 1);
    localStorage.setItem('hero', JSON.stringify(tasks));
    favourite();
}

function herodetail(id) {
    window.open('herodetail.html?id=' + id, '_self');
}