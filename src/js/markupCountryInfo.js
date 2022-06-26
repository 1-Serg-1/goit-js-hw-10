export const markupCountryInfo = (name) => {
       return name.map(country =>
              `<p><b>Capital:</b> ${country.capital}</p>
              <p><b>Population:</b> ${country.population}</p>
              <p><b>Languages:</b> ${Object.values(country.languages)}</p>
              `).join('');
}