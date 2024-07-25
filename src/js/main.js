import { homeFunctions } from "./homeFunc.mjs";
import { hamBuger } from "./hambuger.mjs";

document.addEventListener("DOMContentLoaded", () => {
  homeFunctions.displayHeroImages();
  homeFunctions.displayPopularMovies();

  hamBuger()
});
