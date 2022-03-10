const select = {
    wrapper: document.querySelector(".wrapper"),
    btn: document.querySelector(".wrapper .select-btn"),
    options: document.querySelector(".wrapper .options"),
    search: document.querySelector(".wrapper input"),
    countries: ["Afghanistan", "Albania", "Algeria", "Andorra",
        "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Azerbaijan", "Madagascar", "Malawi",
        "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Republic of the Congo", "Romania", "Russia",
        "Rwanda", "iran",
    ]
}

const addCountries = (selectedCountry) => {
    select.options.innerHTML = "";
    select.countries.forEach(c => {
        let isSelected = c == selectedCountry ? "selected" : null;
        let li = `<li onclick="updateName(this)" ${(isSelected) ? `class="${isSelected}"` : ''}>${c}</li>`;
        select.options.insertAdjacentHTML("beforeend", li);
    });
}

addCountries();

const updateName = (selectedLi) => {
    select.search.value = "";
    addCountries(selectedLi.innerText);
    select.wrapper.classList.remove("active");
    select.btn.firstElementChild.innerText = selectedLi.innerText;
}


select.btn.addEventListener("click", () => {
    select.wrapper.classList.toggle("active");
});


select.search.addEventListener("keyup", () => {
    let arr = []
    let searchedVal = select.search.value;
    arr = select.countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");

    select.options.innerHTML = arr ? arr : "<p class='empty-msg'>Opps! country not found.</p>";
});