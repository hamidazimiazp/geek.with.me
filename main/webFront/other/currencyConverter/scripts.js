const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button.exchange");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const exchangeRateTxt = document.querySelector(".exchange-rate");
const exchangeIcon = document.querySelector(".drop-list .icon");

const apikey = "42dea45b803aa2169efd132b";


for (let item = 0; item < dropList.length; item++) {
    for (country in country_list) {
        let selected;
        if (item == 0) {
            selected = country == "USD" ? "selected" : "";
        } else if (item == 1) {
            selected = country == "BRL" ? "selected" : "";
        }
        let optionTag = `<option value="${country}" ${selected}>${country}</option>`
        dropList[item].insertAdjacentHTML("beforeend", optionTag)
    }

    dropList[item].addEventListener("change", e => {
        loadFlag(e.target);
    });
}


const loadFlag = (element) => {
    for (country in country_list) {
        if (country == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagpedia.net/data/flags/h160/${country_list[country].toLowerCase()}.png`
        }
    }
}


window.addEventListener("load", () => {
    getExchangeRate();
});


getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});


exchangeIcon.addEventListener("click", () => {
    const tempValue = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempValue;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});


const getExchangeRate = () => {
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;

    if (amountVal == "" || amountVal == "0" || Number(amountVal) < 0) {
        amount.value = "1";
        amountVal = 1;
    };

    exchangeRateTxt.innerHTML = "Getting exchange rate...";

    let url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCurrency.value}`;

    fetch(url).then(respone => respone.json()).then(result => {
        exchangeRateTxt.style.color = "#000";
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let toExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerHTML = `${amountVal} ${fromCurrency.value} = ${toExchangeRate} ${toCurrency.value}`;
    }).catch(() => {
        exchangeRateTxt.style.color = "red";
        exchangeRateTxt.innerHTML = "Somthing went wrong!"
    });
};
