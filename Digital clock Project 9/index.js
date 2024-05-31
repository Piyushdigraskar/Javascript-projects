const hourEl = document.getElementById('hour');

const minuteEl = document.getElementById('minute');

const secondEl= document.getElementById('second');

const ampmEl = document.getElementById('ampm');
 

function updateClock(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM"

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    
    if(h > 12){
        h = h-12;
        ampm = "pm";
    }
    setTimeout(()=>{
        updateClock();
     }, 1000)
}

updateClock();


