function init() {
    var h2 = document.querySelector("h2"),
        img = document.querySelector("#logo img"),
        ul = document.querySelector("article ul"),
        clickCnt = 0;

    h2.addEventListener("click", function(event) {
        this.style.color = "red";
        console.dir(event);
    });

    img.addEventListener("mouseover", function() {
        img.style.width = "200px";
        setTimeout(function() {
            img.src = "all-things-logo.png";
        }, 1000);
    });

    /*img.addEventListener("mouseover", function() {
        this.src = "all-things-logo.png";
    });*/

    ul.addEventListener("dblclick", function(e) {
        /*while(clickCnt < ul.childNodes.length && ul.childNodes[clickCnt].nodeType !== 1) {
            clickCnt++;
        }
        if (ul.childNodes[clickCnt]) {
            ul.childNodes[clickCnt].style.color = "green";
        }
        clickCnt++;*/
        e.target.style.color = "green";
    });
}

window.addEventListener("load", init);

