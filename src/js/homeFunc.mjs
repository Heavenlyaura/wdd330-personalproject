import ExternalServices from "./ExternalServices.mjs";
import { utils } from "./utils.mjs";
const homeFunctions = {};

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
      utils.displayImages(heroImages, selectedItems, 200);
      console.log(selectedItems)
    },
  );
};

export { homeFunctions };
