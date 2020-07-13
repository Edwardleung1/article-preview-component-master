const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  const share_social = document.querySelector("#share_social");
  share_social.classList.toggle("visible");
});
