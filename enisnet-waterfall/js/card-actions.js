document.querySelectorAll("#sports div").forEach(card => {
  card.style.transition = "transform 0.2s";
  card.onmouseover = () => card.style.transform = "scale(1.05)";
  card.onmouseout = () => card.style.transform = "scale(1)";
});
