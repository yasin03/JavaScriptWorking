import { countries } from "./assets/data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }
  document.querySelector("#ddlCountries").innerHTML = options;
};

const getCountries = (id) => {
  const arr = countries.filter((country) => country.ccn3 === id);
  if (arr.length > 0) {
    return arr[0];
  } else {
    return null;
  }
};

document.querySelector("#ddlCountries").addEventListener("change", (e) => {
  const country = getCountries(e.target.value);

  console.log(country);
  document.querySelector("#detailsCountry td:nth-child(1)").innerHTML =
    country.capital;
  document.querySelector("#detailsCountry td:nth-child(2)").innerHTML =
    country.capital;
  document.querySelector("#detailsCountry td:nth-child(3)").innerHTML =
    country.capital;
});

loadCountries();
