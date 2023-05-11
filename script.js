

const button = document.querySelector('.butao')

const audio = document.querySelector('audio')

 const light =document.querySelector('.light')

const html = document.querySelector('html')

light.addEventListener('click',lightmode)

function lightmode(){
    if(html.classList.contains('black')){
        html.classList.remove('black')
html.classList.add('white')}

else{ 
     html.classList.remove('white')
    html.classList.add('black')
  


}

} 

 button.addEventListener('click', change)

function change (){
   
    if(button.classList.contains('button')){
    button.classList.remove('button')
    button.classList.add('butao')
    
    }else{
        button.classList.remove('butao')
    button.classList.add('button')
    
    }

    
    }

  

  button.addEventListener('click',togglePlay)

  var isPlaying = false;

  function togglePlay() {
  if (isPlaying) {
  audio.pause()
  } else {
  audio.play();
  }
  };
  audio.onplaying = function() {
  isPlaying = true;
  };
  audio.onpause = function() {
  isPlaying = false;
  };




function restart (){

   audio.currentTime = 0;
    isPlaying = false;
}




function color(){
const icon = document.querySelector('.heart-outline')
if(icon.classList.contains('heart')){

    icon.classList.remove('heart')
}else{
icon.classList.add('heart')

}
icon.addEventListener('click',color)

}
color()

function heart2(){
    const icon = document.querySelector('.heart-inline')
    if(icon.classList.contains('heart1')){
    
        icon.classList.remove('heart1')
    }else{
    icon.classList.add('heart1')
    
    }
    icon.addEventListener('click',heart2)

}
heart2()



function colorHeart(){
    const icon = document.querySelector('.heart-neutron')
    if(icon.classList.contains('heart3')){
    
        icon.classList.remove('heart3')
    }else{
    icon.classList.add('heart3')
    
    }
    icon.addEventListener('click',colorHeart)

}
colorHeart()

const source = document.querySelector('#audio')

const skip = document.querySelector('.skip')



skip.addEventListener('click',changeaudio )


const subTitle=document.querySelector('.subtitle')



function changeaudio(){
    
subTitle.innerHTML="Welcome to the Jungle"
audio.pause()
audio.setAttribute("src","./audios/Jungle.mp3")
audio.play()

  
}




 





const back = document.querySelector('.back')

const range = document.querySelector('.range')

    button.addEventListener('click',animate)

back.addEventListener('click',restartaudio)
button.addEventListener('click',pause)

function pause(){
    if(isPlaying == true) {
range.style.animationPlayState= " paused";
}

}

function animate (){
if(isPlaying == false) {
    range.style.animation="rangeaudio 358s";

} else if(jungle.classList.contains('playing')){
range.style.animation="none";
    range.style.animation="rangeaudio 272s";
}else if(michelle.classList.contains('playing')){

    range.style.animation="rangeaudio 218s";
}

skip.addEventListener('click', nextAudio)

function nextAudio (){
    range.style.animation="none"

}

}

function restartaudio(){

        range.style.animation="none"
        if(michelle.classList.contains('playing')){
michelle.classList.remove('playing')
jungle.classList.add('playing')
subTitle.innerHTML="Welcome To The Jungle"

audio.pause()

audio.setAttribute("src","./audios/Jungle.mp3")
audio.play()  

        }else if(jungle.classList.contains('playing')){


            jungle.classList.remove('playing')
            child.classList.add('playing')
            subTitle.innerHTML="Sweet Child O' Mine "
            
            audio.pause()
            
            audio.setAttribute("src","./audios/sweetChild.mp3")
            audio.play()  

        }
}

skip.addEventListener('click',highlighted)

const child = document.querySelector('.child')
const jungle =document.querySelector('.jungle')
const michelle = document.querySelector('.michelle')
child.classList.add('playing')

 function highlighted(){

if(child.classList.contains('playing')) {
    
child.classList.remove('playing')
subTitle.innerHTML="Welcome To The Jungle"
jungle.classList.add('playing')
}else if(jungle.classList.contains('playing') ){

    audio.pause()

audio.setAttribute("src","./audios/Michelle.mp3")
audio.play()  

    jungle.classList.remove('playing')
    michelle.classList.add('playing')

}

if(michelle.classList.contains('playing')){
    subTitle.innerHTML="My Michelle"
    audio.pause()
    audio.removeAttribute("src","./audios/Jungle.mp3")
audio.setAttribute("src","./audios/Michelle.mp3")
audio.play()  
}


 }




 const music1 =document.querySelector('.music-1')


 const music2 =document.querySelector('.music-2')

 const music3 =document.querySelector('.music-3')


 
 music1.addEventListener('click',troca1)
 
 music2.addEventListener('click',troca2)

 music3.addEventListener('click',troca3)

function troca1(){

    michelle.classList.remove('playing')
    jungle.classList.remove('playing')
  
   child.classList.add('playing')
   if (child.classList.contains('playing')) {
    subTitle.innerHTML="Sweet Child O' Mine"    
   }
    audio.pause()

audio.setAttribute("src","./audios/sweetChild.mp3")
audio.play()  


}

function troca2(){

    child.classList.remove('playing')
    michelle.classList.remove('playing')
    subTitle.innerHTML="Welcome To The Jungle"    
   jungle.classList.add('playing')
    audio.pause()

audio.setAttribute("src","./audios/Jungle.mp3")
audio.play()  


}


function troca3(){

    jungle.classList.remove('playing')
    child.classList.remove('playing')
    subTitle.innerHTML="My Michelle"    
   michelle.classList.add('playing')
    audio.pause()

audio.setAttribute("src","./audios/Michelle.mp3")
audio.play()  


}

const tv =document.querySelector('.TV')

tv.addEventListener('click',video)

function video(){

const player2= document.querySelector('.player-2')


const player1 = document.querySelector('.player-1')

const video=document.querySelector('.clip')

const container=document.querySelector('.container')


player1.style.display="none"

player2.style.display="flex"

video.style.display ="flex"

video.style.justifyContent="center"

video.style.alignItems="center"

container.style.flexDirection="column"

}



const seta = document.querySelector('.seta')

seta.addEventListener('click',voltar)

 function voltar  (){
    
    
    document.location.reload(true);
   
 }



 