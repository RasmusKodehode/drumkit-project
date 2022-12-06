const element = document.getElementById("app");

let button = document.createElement("button");
button.textContent = "Sound 1";
element.append(button);
button.addEventListener("click", () => {
  const sound = new Audio("./sounds/kick.wav");
  sound.play();
  button.style.backgroundColor = "#f00";
  button2.style.backgroundColor = "#fff";
  return sound;
});
button.addEventListener("mousedown", () => {
  const sound = new Audio("./sounds/tom.wav");
  sound.play();
});

let button2 = document.createElement("button");
button2.textContent = "Sound 2";
element.append(button2);
button2.addEventListener("click", () => {
  const sound2 = new Audio("./sounds/snare.wav");
  sound2.play();
  button2.style.backgroundColor = "#f00";
  button.style.backgroundColor = "#fff";
  return sound2;
});
button2.addEventListener("mousedown", () => {
  const sound = new Audio("./sounds/openhat.wav");
  sound.play();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyQ") {
    const sound = new Audio("./sounds/clap.wav");
    sound.play();
    button.style.backgroundColor = "#f00";
    button2.style.backgroundColor = "#fff";
  } else if (event.code === "KeyW") {
    const sound2 = new Audio("./sounds/hihat.wav");
    sound2.play();
    button2.style.backgroundColor = "#f00";
    button.style.backgroundColor = "#fff";
  }
});
