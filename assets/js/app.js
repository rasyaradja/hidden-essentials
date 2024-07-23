const navigation = document.querySelector("#navigation");

const audioElement = document.getElementById("background-audio");
const volumeToggle = document.getElementById("volume-toggle");

const toggleVolume = () => {
  if (volumeToggle.checked) {
    audioElement.play();
    localStorage.setItem("isAudioPlaying", "true");
  } else {
    audioElement.pause();
    localStorage.setItem("isAudioPlaying", "false");
  }
};

const loadAudioState = () => {
  localStorage.setItem("isAudioPlaying", "false");
  volumeToggle.checked = false;
  audioElement.pause();
};

document.addEventListener("DOMContentLoaded", loadAudioState);

const articles = document.querySelectorAll("article");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  navigation.classList.toggle("scroll", window.scrollY > 0);

  articles.forEach((article) => {
    const top = window.scrollY;
    const offset = article.offsetTop - 70;
    const height = article.offsetHeight;
    const idSection = article.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active-link");
      });

      const activeLink = document.querySelector(`header nav a[href*='${idSection}']`);
      if (activeLink) {
        activeLink.classList.add("active-link");
      }
    }
  });
};

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
    themes: ["dark"],
  },
};
