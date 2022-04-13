const pads = document.querySelectorAll(".pad");
const screen = document.querySelector(".screen-container");
const btnVolDwn = document.querySelector(".btn-vol-down");
//Function plays sound based on the key pressed
function padPress(e) {
  const audioNode = document.querySelector(`audio[data-key="${e.key}"]`);
  const keyNode = document.querySelector(`div[data-key="${e.key}"]`);
  audioNode.currentTime = 0;
  audioNode.play();
  keyNode.classList.add("padPressed");
  screen.innerHTML = `Sample playing: ${keyNode.textContent}`;
}
function padRelease(e) {
  this.classList.remove("padPressed");
  screen.innerHTML = "";

  if (!screen.innerHTML) {
    setTimeout(() => {
      screen.innerHTML = `<p>press keys to play sounds</p>`;
    }, 500);
  }
}

pads.forEach(pad => {
  pad.addEventListener("transitionend", padRelease);
});

//Reacting to pressing keys
window.addEventListener("keydown", padPress);
