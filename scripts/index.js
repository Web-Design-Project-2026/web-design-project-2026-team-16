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

    ppButton.innerHTML = isPaused
      ? '<i data-lucide="pause"></i>'
      : '<i data-lucide="play"></i>';

    lucide.createIcons();
  });
}
