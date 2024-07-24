import { getMovieDetails, buildDetailTemplate } from "./detail.mjs";

document.addEventListener("DOMContentLoaded", () => {
  async function movieDetail() {
    const data = await getMovieDetails();
    let element = document.querySelector('.movieDetail')
    console.log(element)
    buildDetailTemplate(data, element)
    console.log(data);
    return
  }

  movieDetail()
});
