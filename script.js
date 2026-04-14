async function loadGames() {
  const container = document.getElementById("container");
  const zoneCount = document.getElementById("zoneCount");

  try {
    const res = await fetch("https://cdn.jsdelivr.net/npm/gn-math-dontdmca@1.0.1/package.json");
    const games = await res.json();

    zoneCount.textContent = `Found ${games.length} games 🎮`;

    games.forEach(game => {
      const div = document.createElement("div");
      div.className = "zone-item";

      div.innerHTML = `
        <img src="${game.icon}" alt="${game.name}">
        <button onclick="openGame('${game.url}')">${game.name}</button>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    zoneCount.textContent = "Failed to load games 😢";
    console.error(err);
  }
}

function openGame(url) {
  window.open(url, "_blank");
}

loadGames();
