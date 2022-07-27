// double range inputs
const doubleRanges = document.querySelectorAll(".zp-double-range");
let minGap = 10;

const fillColor = (sliderOne, sliderTwo, sliderMaxValue, sliderTrack) => {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to left, #dadae5 ${percent1}% , #ff5a00 ${percent1}% , #ff5a00 ${percent2}%, #dadae5 ${percent2}%)`;
};

doubleRanges.forEach((item) => {
  let sliderOne = item.children[1];
  let sliderTwo = item.children[2];

  item.children[3].children[0].children[0].textContent = sliderOne.value;
  item.children[3].children[1].children[0].textContent = sliderTwo.value;

  fillColor(sliderOne, sliderTwo, sliderOne.max, item.children[0]);

  sliderOne.addEventListener("input", () => {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    item.children[3].children[0].children[0].textContent = sliderOne.value;

    fillColor(sliderOne, sliderTwo, sliderOne.max, item.children[0]);
  });

  sliderTwo.addEventListener("input", () => {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    item.children[3].children[1].children[0].textContent = sliderTwo.value;

    fillColor(sliderOne, sliderTwo, sliderOne.max, item.children[0]);
  });
});
