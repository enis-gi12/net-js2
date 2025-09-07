const sportsEl = document.getElementById("sports");

fetch("https://feeds.bbci.co.uk/sport/football/rss.xml")
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    sportsEl.innerHTML = "<h2>Latest Football Headlines</h2>";
    items.forEach((item, i) => {
      if (i >= 5) return; // Limit to 5 items
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const card = document.createElement("div");
      card.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
      card.style.margin = "10px";
      sportsEl.appendChild(card);
    });
  })
  .catch(err => {
    sportsEl.textContent = "⚠️ Failed to load BBC Sport feed.";
    console.error("RSS fetch error:", err);
  });
