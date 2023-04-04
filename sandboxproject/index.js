let movies =[
    {
        name: "falcon and the winter soldier",
        des:
        "Lores ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exceed",
        image: "slider 2.PNG"
    },
    {
        name:"Loki",
        des:
        "Lores ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exceed",
        image:'C:\codes\Webdev\sandboxproject\hotstar-main\hotstar-main\images\slider 1.PNG'
    },
    {
        name:"Wanda Vision",
        des:
        "Lores ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exceed",
        image:"C:\codes\Webdev\sandboxproject\hotstar-main\hotstar-main\images\slider 3.PNG"
    },
    {
        name:"Luca",
        des:
        "Lores ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam exceed",
        image:"C:\codes\Webdev\sandboxproject\hotstar-main\hotstar-main\images\slider 5.PNG"
    },

];
let carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex=0;//track the current slide 

let createslide=() => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide= document.createElement('div');
    var imgElement = document.createElement('img');
    let content=document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    //attaching all the elements..
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    //setting up images..
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);

    if(slide.length){
        sliders[0].style.marginleft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};

for(let i=0; i<3;i++){
    createslide();
}

setInterval(()=>{
    createslide();

},3000);


const videoCards= [...document.querySelectorAll('.video-card ')];


videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video= item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

let cardContainers= [...document.querySelectorAll('.card-container')];
let preBtns= [...document.querySelectorAll('.card-container')];
let nxtBtns= [...document.querySelectorAll('.card-container')];

cardContainers.forEach((items,i)=>{
    let containersDimensions= item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth -200;
    })

    preBtns[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth +200;
    })

})
   