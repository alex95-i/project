var modal = document.getElementById('myModal');


var btn = document.getElementsByClassName("myBtn");
for (var i=0;i<btn.length; i++) {
    btn[i].onclick = function() {
    modal.style.display = "block";
}
}

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}