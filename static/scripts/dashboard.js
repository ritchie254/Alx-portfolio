let list = document.querySelectorAll(".navigation li");

function activeLink() {
	list.forEach((item) => {
		item.classList.remove("hovered");
	});
	this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
	navigation.classList.toggle("active");
	main.classList.toggle("active");
};

const currencies = [
	  "AED",
	  "AFN",
	  "ALL",
	  "AMD",
	  "ANG",
	  "AOA",
	  "ARS",
	  "AUD",
	  "AWG",
	  "AZN",
	  "BAM",
	  "BBD",
	  "BDT",
	  "BGN",
	  "BHD",
	  "BIF",
	  "BMD",
	  "BND",
	  "BOB",
	  "BRL",
	  "BSD",
	  "BTN",
	  "BWP",
	  "BYN",
	  "BZD",
	  "CAD",
	  "CDF",
	  "CHF",
	  "CLP",
	  "CNY",
	  "COP",
	  "CRC",
	  "CUP",
	  "CVE",
	  "CZK",
	  "DJF",
	  "DKK",
	  "DOP",
	  "DZD",
	  "EGP",
	  "ERN",
	  "ETB",
	  "EUR",
	  "FJD",
	  "FKP",
	  "FOK",
	  "GBP",
	  "GEL",
	  "GGP",
	  "GHS",
	  "GIP",
	  "GMD",
	  "GNF",
	  "GTQ",
	  "GYD",
	  "HKD",
	  "HNL",
	  "HRK",
	  "HTG",
	  "HUF",
	  "IDR",
	  "ILS",
	  "IMP",
	  "INR",
	  "IQD",
	  "IRR",
	  "ISK",
	  "JEP",
	  "JMD",
	  "JOD",
	  "JPY",
	  "KES",
	  "KGS",
	  "KHR",
	  "KID",
	  "KMF",
	  "KRW",
	  "KWD",
	  "KYD",
	  "KZT",
	  "LAK",
	  "LBP",
	  "LKR",
	  "LRD",
	  "LSL",
	  "LYD",
	  "MAD",
	  "MDL",
	  "MGA",
	  "MKD",
	  "MMK",
	  "MNT",
	  "MOP",
	  "MRU",
	  "MUR",
	  "MVR",
	  "MWK",
	  "MXN",
	  "MYR",
	  "MZN",
	  "NAD",
	  "NGN",
	  "NIO",
	  "NOK",
	  "NPR",
	  "NZD",
	  "OMR",
	  "PAB",
	  "PEN",
	  "PGK",
	  "PHP",
	  "PKR",
	  "PLN",
	  "PYG",
	  "QAR",
	  "RON",
	  "RSD",
	  "RUB",
	  "RWF",
	  "SAR",
	  "SBD",
	  "SCR",
	  "SDG",
	  "SEK",
	  "SGD",
	  "SHP",
	  "SLE",
	  "SLL",
	  "SOS",
	  "SRD",
	  "SSP",
	  "STN",
	  "SYP",
	  "SZL",
	  "THB",
	  "TJS",
	  "TMT",
	  "TND",
	  "TOP",
	  "TRY",
	  "TTD",
	  "TVD",
	  "TWD",
	  "TZS",
	  "UAH",
	  "UGX",
	  "UYU",
	  "UZS",
	  "VES",
	  "VND",
	  "VUV",
	  "WST",
	 "USD",
	  "XAF",
	  "XCD",
	  "XDR",
	  "XOF",
	  "XPF",
	  "YER",
	  "ZAR",
	  "ZMW",
	  "ZWL"
]
let api = "https://v6.exchangerate-api.com/v6/f42d212b4220532460f917a1/latest/USD";

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
const result = document.getElementById("result");

currencies.forEach((currency) => {
	const option = document.createElement("option");
	option.value = currency;
	option.text = currency;
	fromDropDown.add(option);
});

currencies.forEach((currency) => {
	const option = document.createElement("option");
        option.value = currency;
	option.text = currency;
	toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
	const amount = document.querySelector("#amount").value;
	const fromCurrency = fromDropDown.value;
	const toCurrency = toDropDown.value;

	if (amount.length != 0) {
		fetch(api)
			.then((resp) => resp.json())
			.then((data) => {
				let fromExchangeRate = data.conversion_rates[fromCurrency];
				let toExchangeRate = data.conversion_rates[toCurrency];
				const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
				result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

			});
	} else {
		alert("Enter amount to be converted");
	}
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
