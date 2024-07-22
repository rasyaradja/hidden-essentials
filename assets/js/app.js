const navigation = document.querySelector("#navigation");

document.addEventListener("scroll", () => {
  navigation.classList.toggle("scroll", window.scrollY > 0);
});

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
