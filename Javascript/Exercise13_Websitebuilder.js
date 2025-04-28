function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    

    let viewsNumber
    if (views < 1000) {
        viewsNumber = views;
    }
    else if (views > 1000000) {
        viewsNumber = views / 1000000 + "M";
    }
    else {
        viewsNumber = views / 1000 + "k";
    }


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2> ${title}</h2>
                <p> ${cName} . ${viewsNumber} views . ${monthsOld} months ago</p>
            </div>
        </div>`


    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html


}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-5fa9cd79a6367f8446a5208e4540a493_screen.jpg?ts=1699135222")