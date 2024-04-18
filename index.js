const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");
// console.log(recipeListEl);

function displayRecipies(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImgEl = document.createElement("img");
    recipeImgEl.src = recipe.image;
    recipeImgEl.alt = "recipe image";

    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `<strong>Ingredients: </strong>
    ${recipe.extendedIngredients
      .map((Ingredient) => {
        return Ingredient.original;
      })
      .join(", ")}
  `;
    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const resaponse = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await resaponse.json();
  //   console.log(data.recipes);
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipies(recipes);
}
init();
// getRecipes();
