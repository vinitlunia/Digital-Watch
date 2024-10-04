let i = 0;

const press = () => {
    if (i === 0) {
        document.getElementById("img").style.backgroundImage = "url(./image/hand.jpg)";
        i = 1;
    } else if (i === 1) {
        document.getElementById("img").style.backgroundImage = "url(./image/lp.jpg)";
        i = 2;
    } else if(i === 2){
        document.getElementById("img").style.backgroundImage = "url(./image/vec.jpg)";
        i = 3;
    }
     else if(i === 3){
        document.getElementById("img").style.backgroundImage = "url(./image/beauty-human-eye-women-looking-generative-ai.jpg)";
        i = 0;
    }
};

let j = 0;

const changeImg = () => {
    if (j === 0) {
        document.getElementById("bgImg").style.backgroundImage = "url(./image/img1.webp)";
        j = 1;
    } else if (j === 1) {
        document.getElementById("bgImg").style.backgroundImage = "url(./image/img2.jpeg)";
        j = 2;
    } else if(j === 2){
        document.getElementById("bgImg").style.backgroundImage = "url(./image/img3.jpg)";
        j = 3;
    }
     else if(j === 3){
        document.getElementById("bgImg").style.backgroundImage = "url(./image/img4.jpg)";
        j = 4;
    }
     else if(j === 4){
        document.getElementById("bgImg").style.backgroundImage = "url(./image/img5.jpg)";
        j = 5;
    }
     else if(j === 5){
        document.getElementById("bgImg").style.backgroundImage = "url(./image/img6.jpg)";
        j = 0;
    }
};
setInterval(changeImg, 3000);


const time = setInterval(() => {
    const T = new Date();
    document.getElementById("Time").innerHTML = T.toLocaleTimeString();
}, 1000);

const day = () => {
    const arr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const j = new Date().getDay();
    document.getElementById("week").innerHTML = arr[j];
};

const date = () => {
    const m = new Date();
    document.getElementById("date").innerHTML = m.toLocaleDateString();
};
