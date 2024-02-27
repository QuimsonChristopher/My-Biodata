
var datetime = document.getElementById("datetime");

function updateTime() {

    var today = new Date();

    var formatted = today.toLocaleString();

    datetime.innerHTML = formatted;
}

updateTime();

setInterval(updateTime, 1000);
