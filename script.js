let slider = document.getElementById("slider"); // called the slider from html


let imgDiv = document.createElement("div");  // created a new div and made it child of slider
imgDiv.className = "imgDiv";


// made an array of objects in which have attached a lots of images in diff. objects
let arr = [
    {
        id:1,
        img: "https://cdn.pixabay.com/photo/2023/09/28/02/54/mallard-8280561_1280.jpg",
    },
    {
        id:2,
        img: "https://cdn.pixabay.com/photo/2023/11/21/21/38/puffins-8404284_1280.jpg",
    },
    {
        id:3,
        img: "https://cdn.pixabay.com/photo/2023/11/01/11/15/mountains-8357180_1280.jpg"
    },
    {
        id:4,
        img: "https://cdn.pixabay.com/photo/2023/12/04/18/10/lilac-8430051_1280.jpg"
    },
    {
        id:5,
        img: "https://cdn.pixabay.com/photo/2023/12/05/16/57/dog-8432098_1280.jpg"
    },
    {
        id:6,
        img: "https://cdn.pixabay.com/photo/2023/11/20/13/48/butterfly-8401173_1280.jpg"
    },
    {
        id:7,
        img: "https://cdn.pixabay.com/photo/2023/12/04/18/09/icebergs-8430043_1280.jpg"
    },
    {
        id:8,
        img: "https://cdn.pixabay.com/photo/2023/12/01/21/16/laundry-8424501_1280.jpg"
    },
    {
        id:9,
        img: "https://cdn.pixabay.com/photo/2023/11/26/08/27/leaves-8413064_1280.jpg"
    },
    {
        id:10,
        img: "https://cdn.pixabay.com/photo/2023/11/21/07/02/girl-8402582_1280.jpg"
    },
    {
        id:11,
        img: "https://cdn.pixabay.com/photo/2023/07/07/13/17/flowers-8112546_1280.jpg"
    },
    {
        id:12,
        img: "https://cdn.pixabay.com/photo/2023/04/24/07/27/grape-hyacinth-7947416_1280.jpg"
    },
    {
        id:13,
        img: "https://cdn.pixabay.com/photo/2023/04/22/10/28/sheep-7943526_1280.jpg"
    },
    {
        id:14,
        img: "https://cdn.pixabay.com/photo/2023/11/29/14/15/forest-8419725_1280.jpg"
    },
    {
        id:15,
        img: "https://cdn.pixabay.com/photo/2023/10/29/11/33/cow-8349729_1280.png"
    },
    {
        id:16,
        img: "https://cdn.pixabay.com/photo/2023/09/24/08/16/dragonfly-8272351_1280.png"
    },
    {
        id:17,
        img: "https://cdn.pixabay.com/photo/2023/11/22/09/31/sweetgum-8405110_1280.jpg"
    },
    {
        id:18,
        img: "https://cdn.pixabay.com/photo/2023/05/21/17/16/bird-8008902_1280.jpg"
    },
    {
        id:19,
        img: "https://cdn.pixabay.com/photo/2023/08/19/08/26/house-8200038_1280.jpg"
    },
    {
        id:20,
        img: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932066_1280.jpg"
    },
];

arr.forEach((ele)=>{               // running forEach loop in array
   let slideImg = document.createElement("img"); //created a new element img to keep the images of array in it.

   slideImg.src = ele.img; // setting new created img div src == array of images

   imgDiv.appendChild(slideImg); // appending new crreated img div with div who class is imgDiv

});

slider.append(imgDiv); //div appended to slider(html main div)

let currentIndex = 0; //created new currentindex and setted it's value to zero
let ineterval; // declared for use us in setInterval.


// Created function to show images accorindg to the indexs.
function showImg(index){

    images = document.querySelectorAll(".imgDiv img"); // created a new images variable in function to store in it the images which are in array. "here .imgDiv - class of new div & img is the images of array"

    images.forEach((image, i)=>{ //Running for loop on images variable created which was created above in line no.110.
        if(i == index){ // checking here, wheather the indexs which will be passed in the showImg function (argument) will be equal to the index of the images or NOT.
            image.style.display = "block"; // IF YES, THEN MAKING IMAGE TO DISPLAY BLOCK,
        }
        else{
            image.style.display = "none"; //ELSE, MAKE IMAGE DISPLAY - NONE.
        }
    });
}

// FUNCTION FOR NEXT BUTTON
function next(){
    nextbtn = document.getElementById("nextBtn"); //NEW VARIABLE CREATED TO STORE NEXTBTN ID FROM (HTML).


    nextbtn.addEventListener("click", function(){ //ON CLICK FEATURES
        clearInterval(ineterval) // FIRST THING IN ON CLICK IS TO STOP THE ON GOING SETINTERVAL.

        setTimeout(function(){ // SETTIMEOUT FOR CHANGING IMAGES IN 0.5 SEC.
            currentIndex = (currentIndex + 1) % arr.length; // HERE EQUALLIZING CUURRENTINDEX WHICH IS ZERO EARLIER TO INCREASE BY 1, ON CLICKNG, AND IF IT COMES AT LAST THEN DIVIDING IT BY LAST NUM OF LENGTH TO GIVE 0, AND START AGAIN FROM START. 
        showImg(currentIndex); //CALLING SHOWIMG FUNCTION AND PASSING THE CHANGED CUURENTINDEX AS ARRGUMENT, WHICH CAME AFTER THE CLICKING EFFECT.
        },500)
    })
}

//FUNC FOR PRE BUTTON (SAME AS ABOVE NEXT BUTTON)
function prev(){
    prevbtn = document.getElementById("prevBtn");

    prevbtn.addEventListener("click", function(){
        clearInterval(ineterval)


       setTimeout(function(){
        currentIndex = (currentIndex - 1 + arr.length) % arr.length; // DIFF IS HERE, WHEN CLICKING ON PREV BUTTON, IT IS CHANGING THE CUURENTINDEX TO -- LIKE (0 - 1 + 20) % 20 =  19, 18, 17, 16...... and so on.
        showImg(currentIndex)
       },500)
    })
}

// func for auto slider when click on start icon, 
function start(){
    start = document.getElementById("Start");
    start.addEventListener("click", function(){
       ineterval =  setInterval(function(){ //setting setInterval that when click on strt is should run on 2 sec inervl.
            currentIndex = (currentIndex + 1) % arr.length
            showImg(currentIndex)
        },2000)
        start.style.display = "none"; // display none to hide start icon and to display stop icon.
        stop.style.display = "block";
    })
}

function stop(){
    stop = document.getElementById("Stop");

stop.addEventListener("click", function(){
    clearInterval(ineterval); // whne click stop icon clear interval.
    stop.style.display = "none";
    start.style.display = "block";
})
}

// CALLLING ALL THE FUCNT HERE. 
next(); 
prev();
start();
stop();