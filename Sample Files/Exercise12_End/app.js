//When the window loads, call this initialize function
function init(event) {
    var pages = ["page1.html", "page2.html", "page3.html"],
        win = window,
        locParts = win.location.href.split("/"),
        curPage = locParts[locParts.length - 1],
        pageCounter = 0,
        leftArrow = document.querySelector("#leftArrow"),
        rightArrow = document.querySelector("#rightArrow");

    for (let i = 0;i < pages.length; i++) {
        if (curPage === pages[i]) {
            pageCounter = i;
        }
    }

    //Add function for going to next and previous page.
    var goNext = function(e) {
        if (pageCounter < pages.length - 1) {
            pageCounter++;
            win.location.assign(pages[pageCounter]);
        }
    };

    var goPrevious = function(e) {
        if (pageCounter > 0) {
            pageCounter--;
            win.location.assign(pages[pageCounter]);
        }
    };

    //Add Event listeners for key and mouse click.
    win.addEventListener('keydown', function(e) {
        if (e.keyCode === 37) { //left arrow key
            goPrevious(e);
        } else if (e.keyCode === 39) { //Right arrow key
            goNext(e);
        }
    });

    leftArrow.addEventListener("click", goPrevious);
    rightArrow.addEventListener("click", goNext);
}

window.addEventListener("load", init);
