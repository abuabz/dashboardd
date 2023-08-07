const body = document.querySelector('body'),
sidebar = body.querySelector('.sidebar'),
toggle = body.querySelector('.toggle'),
searchBtn = body.querySelector('.search-box'),
modeSwitch = body.querySelector('.toggle-switch'),
modeText = body.querySelector('.mode-text');
const lightModeBtn = document.querySelector('.lightmode');
const darkModeBtn = document.querySelector('.darkmode');
const navhideBtn = document.querySelector('.navhide');

toggle.addEventListener("click",()=>{
    sidebar.classList.toggle('close');
})

navhideBtn.addEventListener("click",()=>{
  sidebar.classList.toggle('hide')
})
modeSwitch.addEventListener("click",()=>{ 
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        modeText.innerText = 'Light mode'
    }
    else{
        modeText.innerText = 'Dark Mode'
    }
});

darkModeBtn.addEventListener('click',()=>{
  body.classList.toggle('dark')
  if(body.classList.contains('dark')){
    modeText.innerText = 'Light mode'
}
else{
    modeText.innerText = 'Dark Mode'
}

})
lightModeBtn.addEventListener('click', () => {
  body.classList.remove('dark');
  if(body.classList.contains('dark')){
    modeText.innerText = 'Light mode'
}
else{
    modeText.innerText = 'Dark Mode'
}
});

const fullscreenBtn = document.getElementById("fullscreenBtn");
fullscreenBtn.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (document.fullscreenElement) {
    // If the document is currently in fullscreen mode, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  } else {
    // If the document is not in fullscreen mode, go fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
      document.documentElement.msRequestFullscreen();
    }
  }
}

// Listen for fullscreen change event
document.addEventListener("fullscreenchange", updateFullscreenText);
document.addEventListener("webkitfullscreenchange", updateFullscreenText);
document.addEventListener("mozfullscreenchange", updateFullscreenText);
document.addEventListener("MSFullscreenChange", updateFullscreenText);

function updateFullscreenText() {
  const modeText = document.querySelector("#screentext");
  const fullscreenIcon = document.getElementById("fullscreenIcon");
  if (document.fullscreenElement) {
    modeText.textContent = "Exit Full Screen";
    fullscreenIcon.classList.remove("bx-fullscreen");
    fullscreenIcon.classList.add("bx-exit-fullscreen");
  } else {
    modeText.textContent = "Full Screen";
    fullscreenIcon.classList.remove("bx-exit-fullscreen");
    fullscreenIcon.classList.add("bx-fullscreen");
  }
}


function toggleNav() {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("open");
  }