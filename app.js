//code for playlist styling
let mainVid= document.querySelector('.main-vid video')
let playlist = document.querySelectorAll('.playlist .vid')
let title = document.querySelector('.title')

playlist.forEach(vid=>{
    vid.addEventListener('click',()=>{
        // console.log(vid.classList)
        playlist.forEach(vid=>vid.classList.remove('active'))
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
        vid.classList.add('active')
        if(vid.classList.contains('active')){
            // console.log();/
            let src =vid.children[0].getAttribute('src')
            // console.log(mainVid.src)
            mainVid.src = src;
            // console.log(vid.children[1]);
            title.innerHTML = vid.children[1].innerHTML
        }
    })
})

//CODE FOR TIME IN EACH CONTAINER
    playlist.forEach(function(container){
        let k = [...container.children]
        k[0].onloadedmetadata = function(){
            let duration = this.duration
            let minu = Math.floor(duration/60)
            if(minu<10) minu = ('0' + minu).slice(-2)
                k[2].textContent = minu
            let secu = Math.floor(duration%60)
            if(secu<10) secu = ('0' + secu).slice(-2)
            k[4].textContent = secu

            // console.log(secu);
        }
    })

//code to make the controls disappear after some time


//code for video-player
let vidContain = document.querySelector('.video')
let volBtn = document.querySelector('.vol-btn')
let time = document.querySelector('.time')
let min = document.querySelector('.time .min')
let sec = document.querySelector('.time sec')
let vol = document.getElementById('vol-control')
let fullScr = document.querySelector('.fa-expand')
let minutes =document.querySelector('.min')
let seconds =document.querySelector('.sec')
let flag='pause'
let seeker = document.getElementById('duration')
let video = document.querySelector('.video video')
let currentTime = [document.querySelector('.current-min'),document.querySelector('.current-sec')]
// console.log(seeker)
function zero(dura){
    let time1= Math.floor(dura/60)
    if(time1<10) time1 = ('0' + time1).slice(-2)
    let seco = Math.floor(dura%60)
    if(seco<10) seco = ('0' + seco).slice(-2)
    return [time1,seco]
}


video.onloadedmetadata = function (){
    let duration = this.duration
    let timeArr = zero(duration)
    minutes.textContent = timeArr[0]
    seconds.textContent = timeArr[1];
    setInterval(()=>{
        // 1:25
        let duration = video.currentTime
        // console.log(duration);
        let timeArr = zero(duration)
        // console.log(timeArr);
        currentTime[1].textContent = timeArr[1]
        currentTime[0].textContent = timeArr[0];

    },1000)
}
console.log(video.currentTime);

//move seeker according to time




//mute me
let flagg = true
function muteMe(){
    if(flagg==true){
        //<i class="fas fa-volume-mute"></i>
        this.classList.remove('fa-volume-high')
        this.classList.add('fa-volume-mute')
        flagg=false
        video.volume = 0

    }
    else{
        this.classList.remove('fa-volume-mute')
        this.classList.add('fa-volume-high')
        flagg=true
        video.volume = vol.value/100
        
    }
    
}



// video.volume=0.32
// console.log(video.volume);

let playBtn = document.querySelector('.play-btn')
function disappear(){
    playBtn.style.opacity=1
}
//function to play and pause
function playTime(){
    //in case of pause
    if(flag=='pause'){
        playBtn.classList.remove('fa-play')
        playBtn.classList.add('fa-pause')
        video.play()
        flag='play'
    }
    //in case of play
    else{
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
        video.pause()
        flag='pause'
    }
    setTimeout(disappear,1000)
}
//FUNCTION FOR VOLUME CHANGE
function volChange(){
    video.volume = this.value/100
    let vidVol = video.volume
        if(vidVol==0){
            volBtn.classList.remove('fa-volume-high')
            volBtn.classList.add('fa-volume-mute')
        }
        else{
            volBtn.classList.remove('fa-volume-mute')
            volBtn.classList.add('fa-volume-high')
        }
}

let scrFlag = false;
function screenMe(){
    if(scrFlag==false){
        vidContain.requestFullscreen()
        scrFlag=true
    }
    else{
        document.exitFullscreen();
        scrFlag=false
    }

    
}

function timeUp(){
   var val = video.currentTime / video.duration * 100
//    console.log(val);
    seeker.value = val
}


function changeColor(){
  console.log(this.value * video.duration);
}

// console.log(vidContain.offsetHeight);
// if(window.innerHeight==vidCo)
// console.log;

function hoverAbove(){
    volBtn.style.marginRight = '3rem';
    setTimeout(()=>{
    volBtn.style.marginRight = '10px';
    volSeek.style.display= 'none'
    volSeek.style.opacity = '0'
    },4000)
    let volSeek = document.querySelector('.vol-btn ~ input')
    volSeek.style.display= 'inline'
    volSeek.style.opacity = '1'
    fullScr.style.position='relative'
    fullScr.style.left='1rem'
}
let flag2=false
function play(){
    if(flag2=='false'){
        setTimeout(()=>{
            playBtn.style.opacity = '0'
            document.querySelector('.bottom-section').style.opacity='0'
        },7000)
    }
    else{
        playBtn.style.opacity = '1'
     document.querySelector('.bottom-section').style.opacity='1'
    }
    
}



//event listener for play/pause
playBtn.addEventListener('click',playTime)
video.addEventListener('click',play)
//event listener for volume
vol.addEventListener('input',volChange)
//fullscreen handler
fullScr.addEventListener('click', screenMe)

volBtn.addEventListener('click', muteMe)
video.addEventListener('timeupdate',timeUp)
seeker.addEventListener('input',changeColor)
// volBtn.addEventListener('mouseenter',hoverAbove)
// video.addEventListener('mouseover',()=>{
//     playBtn.style.opacity = '1'
//     document.querySelector('.bottom-section').style.opacity='1'
// })
// video.addEventListener('mouseout',play)
video.addEventListener('ended',()=>{
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-redo')
})
// volBtn.addEventListener('mouseout',noHoverAbove)