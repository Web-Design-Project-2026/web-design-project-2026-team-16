const ppButton = document.getElementById("pause-play-btn");
const video = document.querySelector(".hero-showcase video");


if (ppButton && video) {
  ppButton.addEventListener("click", () => {
    const isPaused = video.paused;

    if (isPaused) {
      video.play();
    } else {
      video.pause();
    }
    //change the icon of the button based on the state of the video
    ppButton.innerHTML = isPaused
      ? '<i data-lucide="pause"></i>'
      : '<i data-lucide="play"></i>';

    lucide.createIcons();
  });
}


//Remove the default content from the header element when in desktop view
let header = document.querySelector("header");
header.style.setProperty("--default-content", "''");
