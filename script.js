// Get the video
let videos = document.getElementsByClassName("tropical-gothic");



// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (videos.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    videos.pause();
    btn.innerHTML = "Play";
  }
}
