function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    // document.write(h + ":" + m + ":" + s);
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
}

setInterval(time, 100);