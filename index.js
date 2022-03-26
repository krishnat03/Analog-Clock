// Rotations of the Hands
// for Hour Hand  = 30*h + m/2
// for minute Hand = 6*m
// for second Hand = 6*s

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    date = d.getDate();
    month = d.getMonth();
    month = month+1;
    year = d.getFullYear();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    today = date + "-" + month + "-" + year;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    document.getElementById("date").innerHTML = today;
}, 1000);