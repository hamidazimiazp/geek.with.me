const objs = {
  cards: document.querySelectorAll(".card"),
};

objs.cards.forEach((card) => {
  card.children[0].addEventListener("click", () => {
    card.classList.toggle("active");
    card.children[0].classList.toggle("active");
  });
});
