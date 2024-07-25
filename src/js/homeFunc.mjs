import ExternalServices from "./ExternalServices.mjs";
import { utils } from "./utils.mjs";
const homeFunctions = {};

/**************************************************************************************
 * HELPER FUNCTIONS FOR THE HOME FUNCTION OBJECTS
 ************************************************************************************** */
function movieOrTvShow() {
  const radios = document.getElementsByName("searchOptions");
  for (const radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
}
function getSearchUrl(searchOption, searchQuery) {
  if (searchOption === "movies") {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`;
    return url;
  } else {
    const url = `https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${searchQuery}`;
    return url;
  }
}
function searchUrl() {
  const searchInput = document.querySelector("#search");
  const searchOption = movieOrTvShow();
  const searchUrl = getSearchUrl(searchOption, searchInput.value);
  return searchUrl;
}

/**************************************************************************************
 * METHODS OF THE HOME FUNCTIONS OBJECT
 ************************************************************************************** */

/** This Function displays the hero images on the home page */
homeFunctions.displayHeroImages = async () => {
  const heroImages = document.querySelector(".heroImgs");
  const externalServices = new ExternalServices();
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const nowPlaying = await externalServices.getData(url, "json");
  const items = utils.selectRandomItems(
    3,
    nowPlaying.results,
    5000,
    (selectedItems) => {
      heroImages.innerHTML = "";
      utils.displayImages(heroImages, selectedItems, 200, '', "hero_image");
    },
  );
};

homeFunctions.displayPopularMovies = async () => {
  const popularMovies = document.querySelector(".popularMovies");
  const externalServices = new ExternalServices();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const popular = await externalServices.getData(url, "json");
  const items = utils.selectRandomItems(
    12,
    popular.results,
    5000,
    (selectedItems) => {
      popularMovies.innerHTML = "";
      utils.displayImages(popularMovies, selectedItems, 200, 'info');
    },
  );
  setTimeout(function () {
    clearInterval(items);
  }, 5000);
};

export { homeFunctions };
