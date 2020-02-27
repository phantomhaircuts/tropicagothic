// Get the video
let videos = document.getElementsByClassName("tropical-gothic");

console.log(videos);



// Pause and play the video, and change the button text
function myFunction() {
  // Get the button
  let btn = document.getElementById("myBtn");
  for (var i = 0; i < videos.length; i++) {
  if (videos[i].paused) {
    videos[i].play();
    btn.innerHTML = "Pause";
  } else {
    videos[i].pause();
    btn.innerHTML = "Play";
  }
}
}
