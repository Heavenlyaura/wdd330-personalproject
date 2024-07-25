import { getMovieDetails, buildDetailTemplate } from "./detail.mjs";
import { hamBuger } from "./hambuger.mjs";

document.addEventListener("DOMContentLoaded", () => {
  async function movieDetail() {
    const data = await getMovieDetails();
    let element = document.querySelector('.movieDetail')
    buildDetailTemplate(data, element)
    return
  }

  movieDetail()
  hamBuger()
});
