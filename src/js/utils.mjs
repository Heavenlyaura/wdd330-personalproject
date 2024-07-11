const utils = {};

utils.selectRandomItems = function (numOfItems, list, interval, callback) {
  let selectedItems = [];
  let selectedIndices = new Set();
  const intervalId = setInterval(() => {
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
  }, interval);
  return intervalId;
};

utils.displayImages = (parentElement, arrWithImg, width) => {
  arrWithImg.forEach((item) => {
    const div = document.createElement('div')
    const prefix = `https://image.tmdb.org/t/p/w${String(width)}`;
    const imageElement = document.createElement("img");
    const imageSrc = `${prefix}${item.poster_path}`;
    imageElement.setAttribute("src", imageSrc);
    imageElement.setAttribute("alt", item.original_title);
    div.appendChild(imageElement)
    parentElement.appendChild(div);
  });
};

export { utils };
