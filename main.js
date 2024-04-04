const parser = new DOMParser();


$ = function (query) {
    return document.querySelector(query);

}

function init() {
    loadHeader()
    loadFooter()
}

function loadHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const htmlDoc = parser.parseFromString(this.responseText, 'text/html');
        $("body").prepend(htmlDoc.querySelector('header'));
    }
    xhttp.open("GET", "header.html", true);
    xhttp.send();
}

function loadFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const htmlDoc = parser.parseFromString(this.responseText, 'text/html');
        $("body").append(htmlDoc.querySelector('footer'));
    }
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
}



window.onload = init