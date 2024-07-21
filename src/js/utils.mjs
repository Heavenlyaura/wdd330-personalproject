const utils = {};

utils.selectRandomItems = function (numOfItems, list, interval, callback) {
  let selectedItems = [];
  let selectedIndices = new Set();

  function selectItems() {
    selectedItems = [];
    selectedIndices.clear();
    while (selectedIndices.size < numOfItems) {
      const randomIndex = Math.floor(Math.random() * list.length);
      selectedIndices.add(randomIndex);
    }
    selectedIndices.forEach((index) => selectedItems.push(list[index]));
    if (callback && typeof callback === "function") {
      callback(selectedItems);
    }
  }
  selectItems();
  const intervalId = setInterval(selectItems, interval);
  return intervalId;
};


utils.displayImages = (parentElement, arrWithImg, width, displayText) => {
  arrWithImg.forEach((item) => {
    const div = document.createElement("div");
    const prefix = `https://image.tmdb.org/t/p/w${width}`;
    const aTag = document.createElement("a");
    aTag.setAttribute("href", `../movie_detail/index.html?${item.id}`);
    const imageElement = document.createElement("img");
    const imageSrc = `${prefix}${item.poster_path}`;
    imageElement.setAttribute("src", imageSrc);
    imageElement.setAttribute("alt", item.original_title);
    aTag.appendChild(imageElement);
    div.appendChild(aTag);
    parentElement.appendChild(div);
    if (displayText === "info") {
      displayMovieLinks(parentElement, item);
    }
  });
};

function displayMovieLinks(parentElement, movie) {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", `../movie_detail/index.html?${movie.id}`);
  const pTag = document.createElement("p");
  const pTag2 = document.createElement("p");
  pTag.textContent = `Movie: ${movie.title};`;
  pTag2.textContent = `Release Date: ${movie.release_date}`;
  aTag.appendChild(pTag);
  aTag.appendChild(pTag2);
  parentElement.appendChild(aTag);
}

export { utils };
