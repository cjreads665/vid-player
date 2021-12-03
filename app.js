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


//code for video-player
let vidContain = document.querySelector('.video')
// console.log(vidContain);
let time = document.querySelector('.time')
let min = document.querySelector('.time .min')
let sec = document.querySelector('.time sec')
// console.log(min);
let vol = document.getElementById('vol-control')
let fullScr = document.querySelector('.fa-expand')
// console.log(fullScr);
let minutes =document.querySelector('.min')
let seconds =document.querySelector('.sec')
let flag='pause'
let seeker = document.getElementById('duration')
let video = document.querySelector('.video video')



video.onloadedmetadata = function(){
    // console.log('meta loaded');
    let duration = this.duration
    let minDu = Math.floor(duration/60)
    if(minDu<10) minDu = ('0' + minDu).slice(-2)
    let secDu = Math.floor(duration%60)
    if(minDu<10) secDu = ('0' + secDu).slice(-2)
    
    minutes.textContent = minDu
    seconds.textContent = secDu;
    
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
}
function screenMe(){
    if(!vidContain.requestFullscreen()) vidContain.requestFullscreen()
    else{
        document.exitFullscreen()
    }
    
}
//function to tell the duration of video
function timeTracker(){
    /**
     *  minutes.textContent = minDu
    seconds.textContent = secDu;
     */
    let time = setInterval(()=>{
        if(this.currentTime==this.duration){
            seconds.textContent = 0
            clearInterval(time)
        } 
        else{
            //if secs are more than 60
            if(this.currentTime>60){
                //divide by 60 to get minutes
                minutes.textContent = this.currentTime/60
            }
            //if seconds is less than equal to sixty
            else{
                minutes.textContent = '00'
                seconds.textContent = Math.floor(this.currentTime)
            }
        } 
    },100)
       
}







//event listener for play/pause
playBtn.addEventListener('click',playTime)
//event listener for volume
vol.addEventListener('input',volChange)
//fullscreen handler
fullScr.addEventListener('click', screenMe)

video.addEventListener('play',timeTracker)
