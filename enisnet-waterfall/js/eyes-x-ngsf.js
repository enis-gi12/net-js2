const eyesEl = document.getElementById("eyes");
eyesEl.innerHTML = "👀 Tracking your pointer...";

document.addEventListener("mousemove", e => {
  eyesEl.textContent = `Mouse at (${e.clientX}, ${e.clientY})`;
});
