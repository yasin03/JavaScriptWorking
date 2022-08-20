import { countries } from "./assets/data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option>${country.name.common} (${country.capital})</option>`;
  }
  document.querySelector("#ddlCountries").innerHTML = options;
};

loadCountries();
