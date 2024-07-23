const navigation = document.querySelector("#navigation");

document.addEventListener("scroll", () => {
  navigation.classList.toggle("scroll", window.scrollY > 0);
});

const audioElement = document.getElementById("background-audio");
const volumeToggle = document.getElementById("volume-toggle");

function toggleVolume() {
  if (volumeToggle.checked) {
    audioElement.play();
    localStorage.setItem("isAudioPlaying", "true");
  } else {
    audioElement.pause();
    localStorage.setItem("isAudioPlaying", "false");
  }
}

function loadAudioState() {
  // Always set the default state to off
  localStorage.setItem("isAudioPlaying", "false");
  volumeToggle.checked = false;
  audioElement.pause();
}

document.addEventListener("DOMContentLoaded", loadAudioState);

tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        hijau: "#a6e22e",
      },
    },
  },
  daisyui: {
    themes: [],
  },
};
