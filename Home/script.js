function playVideo(videoId){
window.scrollTo(0,0)
var iframe = document.getElementById("video-iframe");
iframe.src = "https://www.youtube.com/embed/" + videoId + '?autoplay=1';


}

function playVideo2(VideoID2){
window.scrollTo(0,0)
document.getElementById("video-display").innerHTML = '<iframe id="videoFrame" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>';
var videoFrame = document.getElementById("videoFrame")
videoFrame.src = VideoID2




}