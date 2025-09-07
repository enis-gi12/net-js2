const sportsEl = document.getElementById("sports");

window.sportsData.forEach(game => {
  const card = document.createElement("div");
  card.innerHTML = `<strong>${game.team}</strong> vs ${game.opponent} — <em>${game.score}</em>`;
  card.style.margin = "10px";
  sportsEl.appendChild(card);
});
