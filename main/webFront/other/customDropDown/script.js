// Geek.With.Me
//Todo: ajax - [get method] for get model names
const modelSelector = document.querySelector(".model-selector");
const modelSelectorQuery = document.querySelector("model-search-box");
const modelSelectorItemsWrapper = document.querySelector(".model-items");
const modelSelectorItemSelected = document.querySelector(".selected-model");
const modelSelectorSearch = document.querySelector(".model-search-box input");

let modelNames = [
  "206",
  "207",
  "پارس",
  "سمند",
  "کوییک",
  "BMW",
  "405",
  "Lamborghini",
];

const modelItemClickHandler = (item) => {
  const modelSelectorItems = document.querySelectorAll(
    ".model-items .model-item"
  );

  modelSelectorItems.forEach((item2) => {
    item2.classList.remove("active");
  });

  modelSelectorItemSelected.textContent = item.childNodes[1].textContent;
  item.classList.add("active");
  modelSelectorSearch.value = "";
  addModels();
};

// add models to model list
const addModels = () => {
  modelSelectorItemsWrapper.innerHTML = "";
  modelNames.forEach((c) => {
    let item = `<div  ${
      modelSelectorItemSelected.textContent == c
        ? `class="model-item active"`
        : `class="model-item "`
    } onclick="modelItemClickHandler(this)">
                      <span class="model-name">${c}</span>
                      <span class="zp-check-box"></span>
                    </div>`;
    modelSelectorItemsWrapper.insertAdjacentHTML("beforeend", item);
  });
};

if (modelSelector) {
  modelSelector.addEventListener("click", () => {
    modelSelector.classList.toggle("active");
  });

  modelSelectorQuery.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  addModels();

  modelSelectorSearch.addEventListener("keyup", () => {
    let filteredModelName = [];
    let query = modelSelectorSearch.value;
    filteredModelName = modelNames
      .filter((data) => {
        return data.toLowerCase().startsWith(query);
      })
      .map(
        (
          data
        ) => `<div class="model-item" onclick="modelItemClickHandler(this)">
                      <span class="model-name">${data}</span>
                      <span class="zp-check-box"></span>
                    </div>`
      )
      .join("");
    modelSelectorItemsWrapper.innerHTML = filteredModelName
      ? filteredModelName
      : "<p class='model-empty-msg'>متاسفانه مدل مورد نظر شما پیدا نشد!</p>";
  });
}
