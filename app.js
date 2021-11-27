//code for playlist styling
let mainVid= document.querySelector('.main-vid video')
let playlist = document.querySelectorAll('.playlist .vid')
let title = document.querySelector('.title')

playlist.forEach(vid=>{
    vid.addEventListener('click',()=>{
        // console.log(vid.classList)
        playlist.forEach(vid=>vid.classList.remove('active'))
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
let flag='pause'
let seeker = document.getElementById('duration')
let video = document.querySelector('.video video')
// console.log(video);
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
playBtn.addEventListener('click',playTime)