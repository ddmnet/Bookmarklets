(function () {
    window.open(document.location.protocol + "//" + document.location.hostname + document.location.search.match(/url=([^&]*)/)[1], "cms-preview");
}());