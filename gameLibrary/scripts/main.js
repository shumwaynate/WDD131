const games = [
  {
    id: 1,
    name: "Helldivers 2",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",
    description: "Intense cooperative shooter action in space.",
    platforms: ["PC", "PS5"]
  },
  {
    id: 2,
    name: "Elden Ring",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    description: "Dark fantasy world with tough boss battles.",
    platforms: ["PC", "Xbox", "PS5"]
  },
  {
    id: 3,
    name: "Palworld",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
    description: "Pokémon meets survival with guns.",
    platforms: ["PC"]
  },
  {
    id: 4,
    name: "Hades",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
    description: "Battle out of the Underworld in this roguelike.",
    platforms: ["PC", "Switch", "PS4"]
  },
  {
    id: 5,
    name: "Baldur's Gate 3",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    description: "CRPG of the year with deep story.",
    platforms: ["PC", "PS5"]
  },
  {
    id: 6,
    name: "Cyberpunk 2077",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    description: "Futuristic open-world RPG with style.",
    platforms: ["PC", "Xbox", "PS5"]
  }
];

const library = JSON.parse(localStorage.getItem("library")) || [];
const completed = JSON.parse(localStorage.getItem("completed")) || [];
const lastViewed = localStorage.getItem("lastViewed");

function saveLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function toggleComplete(id) {
  const idx = completed.indexOf(id);
  if (idx === -1) {
    completed.push(id);
  } else {
    completed.splice(idx, 1);
  }
  saveLocal("completed", completed);
  location.reload();
}

function removeFromLibrary(id) {
  const index = library.indexOf(id);
  if (index > -1) {
    library.splice(index, 1);
    saveLocal("library", library);
    location.reload();
  }
}

function renderLibrary() {
  const container = document.getElementById("library-list");
  if (!container) return;

  container.innerHTML = "";
  games
    .filter((g) => library.includes(g.id))
    .forEach((game) => {
      const div = document.createElement("div");
      div.className = "game-card";
      div.innerHTML = `
        <span class="remove-btn" onclick="removeFromLibrary(${game.id})">&times;</span>
        <h3>${game.name}</h3>
        <img src="${game.image}" alt="${game.name}" />
        <button onclick="viewDetails(${game.id})">View Details</button>
        <button class="${completed.includes(game.id) ? 'completed' : ''}" onclick="toggleComplete(${game.id})">
          ${completed.includes(game.id) ? 'Completed' : 'Mark Complete'}
        </button>
      `;
      container.appendChild(div);
    });
}

function renderSearch() {
  const container = document.getElementById("search-list");
  if (!container) return;

  container.innerHTML = "";
  games.forEach((game) => {
    const div = document.createElement("div");
    div.className = "game-card";
    div.innerHTML = `
      <h3>${game.name}</h3>
      <img src="${game.image}" alt="${game.name}" />
      <button onclick="addToLibrary(${game.id})">Add to Library</button>
    `;
    container.appendChild(div);
  });
}

function addToLibrary(id) {
  if (!library.includes(id)) {
    library.push(id);
    saveLocal("library", library);
    renderLibrary();
  }
}

function viewDetails(id) {
  localStorage.setItem("lastViewed", id);
  window.location.href = "library.html";
}

function renderDetailsPage() {
  const container = document.getElementById("game-details");
  if (!container || !lastViewed) return;

  const game = games.find((g) => g.id == lastViewed);
  if (!game) return;

  container.innerHTML = `
    <h2>${game.name}</h2>
    <img src="${game.image}" alt="${game.name}" />
    <p><strong>Platforms:</strong> ${game.platforms.join(", ")}</p>
    <p>${game.description}</p>
    <button onclick="window.location.href='index.html'">Return to Library</button>
    <button class="${completed.includes(game.id) ? 'completed' : ''}" onclick="toggleComplete(${game.id})">
      ${completed.includes(game.id) ? 'Completed' : 'Mark Complete'}
    </button>
  `;
}

renderLibrary();
renderSearch();
renderDetailsPage();
