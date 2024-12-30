
function createcard(title, cName, views, monthsold, duration, thumbnail) {
    let viewStr
    if (views < 1000000) {
        viewStr = views / 1000 + "K"

    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views / 1000 + "K"
    }
    let html = ` <div class="card">
<div class="image">
<img src="${thumbnail}" alt="">
 <div class="capsule">${duration}</div>
        </div>

<div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${viewStr} views . ${monthsold} months ago</p>
</div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createcard("introduction to backend", "code with harry", 560000, 3, "31.22")
createcard("introduction to backend", "code with harry", 5600000, 3, "31.82")
