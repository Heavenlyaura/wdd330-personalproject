import { utils } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

export async function getMovieDetails() {
  const externalServices = new ExternalServices();
  const movieId = utils.getParam("movie_id");
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const data = await externalServices.getData(url, "json");
  return data;
}

export function buildDetailTemplate(data, parentElement) {
  let template = `
  <div class="releaseDate">
  <h3>${data.title}</h3> 
  <h3>${data.release_date}</h3>
  </div>
  <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}"
  alt="${data.title}">
  <div class="genre"> 
  <h4>Genre:</h4>`;
  data.genres.forEach((genre) => {
    template += `<p>${genre.name},</p>`;
  });
  template += `
  </div>
  <p><span>Status</span>: ${data.status}</p>
  <p><span>Overview</span>: ${data.overview}</p>`;
  parentElement.innerHTML = template;
  return;
}
