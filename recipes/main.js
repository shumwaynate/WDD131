import { recipes } from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const index = random(list.length);
  return list[index];
}

function tagsTemplate(tags) {
  const html = tags
    .map(tag => `<button class="tag">${tag}</button>`)
    .join('');
  return `<div class="tags-container">${html}</div>`;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true">⭐</span>`
      : `<span aria-hidden="true">☆</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe-card">
      <img src="${recipe.image}" alt="Image of ${recipe.title}" />
      <figcaption class="recipe-content">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.title}</h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById("recipesContainer");
  const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  container.innerHTML = html;
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const inName = recipe.title.toLowerCase().includes(query);
    const inDescription = recipe.description.toLowerCase().includes(query);
    const inTags = recipe.tags.find(tag => tag.toLowerCase().includes(query));
    const inIngredients = recipe.ingredients.find(ing => ing.toLowerCase().includes(query));
    return inName || inDescription || inTags || inIngredients;
  });

  return filtered.sort((a, b) => a.title.localeCompare(b.title));
}

function searchHandler(e) {
  e.preventDefault();
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const results = filterRecipes(query);
  renderRecipes(results);
}

document.getElementById("searchBtn").addEventListener("click", searchHandler);

init();
