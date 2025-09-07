(() => {
  const sportsEl = document.getElementById("sports");

  fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
    .then(res => res.json())
    .then(data => {
      const team = data.teams?.[0];
      if (!team) {
        sportsEl.textContent = "Team not found.";
        return;
      }

      const card = document.createElement("div");
      card.innerHTML = `
        <h2>${team.strTeam}</h2>
        <img src="${team.strBadge}" alt="${team.strTeam} badge" style="width:100px;">
        <p><strong>Stadium:</strong> ${team.strStadium}</p>
        <p><strong>Location:</strong> ${team.strLocation}</p>
        <p><strong>League:</strong> ${team.strLeague}</p>
        <p><strong>Website:</strong> <a href="https://${team.strWebsite}" target="_blank">${team.strWebsite}</a></p>
        <p style="text-align:left; margin-top:1em;">${team.strDescriptionEN}</p>
      `;
      card.style.margin = "20px auto";
      card.style.padding = "1em";
      card.style.border = "1px solid #444";
      card.style.borderRadius = "8px";
      card.style.backgroundColor = "#1a1a1a";
      sportsEl.appendChild(card);
    })
    .catch(err => {
      sportsEl.textContent = "⚠️ Failed to load team data.";
      console.error("Arsenal fetch error:", err);
    });
})();
