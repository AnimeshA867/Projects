let oneSec = 5.8;

let seconds = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let a=0;
setInterval(function time(){
    let t = new Date();
    let s=t.getSeconds();
    let m=t.getMinutes();
    let h=t.getHours();
    s=(s*6)+180;
    m=(m*6)+180;
    h=(h*6);
    if(a==60){
        a=0;
    }else{
        a++;
    }
    // console.log(s,m,h);
    seconds.style.transform=`rotate(${s}deg)`;
    minute.style.transform=`rotate(${m+(a/6)}deg)`;
    hour.style.transform=`rotate(${h+a/36}deg)`;

},1000);