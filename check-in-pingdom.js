(function () {
    var url = encodeURIComponent(document.location.href);
    window.open("http://tools.pingdom.com/?url=" + url + "&treeview=0&column=objectID&order=1&type=0&save=false", "pingdom");
}());