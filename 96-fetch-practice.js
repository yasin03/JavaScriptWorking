import { searchShows } from "./96-fetch-practice-movie-api.js";

document.querySelector("#txtSearch").addEventListener("input", (e) => {
  const query = e.target.value;
  if (!query) return;
  createMovieList(query);
});

const createMovieList = (query) => {
  searchShows(query, function (data) {
    let strHtml = "";
    data.forEach((item) => {
      console.log(item);
      strHtml += createMovieHtml(item);
    });
    document.querySelector("#tvShows").innerHTML = strHtml;
  });
};

const createMovieHtml = (item) => {
  return `
        <div class="col">
        <div class="card">
          <img src="${item.show.image.medium}" class="card-img-top" alt="${item.show.name}">
          <div class="card-body">
            <h5 class="card-title">${item.show.name}</h5>
            <p class="card-text">${item.show?.summary}</p>
          </div>
        </div>
      </div>`;
};
