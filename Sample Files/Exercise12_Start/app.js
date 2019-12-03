//When the window loads, call this initialize function
function init(event) {
    var pages = ["page1.html", "page2.html", "page3.html"],
        win = window,
        locParts = win.location.href.split("/"),
        curPage = locParts[locParts.length - 1],
        pageCounter = 0;

    for (let i = 0;i < pages.length; i++) {
        if (curPage === pages[i]) {
            pageCounter = i;
        }
    }

    //Add function for going to next and previous page.

    //Add Event listeners for key and mouse click.
}
