
export const markupCountryList = (name) => {
    return name.map(country =>
        `<li>
        <img src=${country.flags.svg} width="24"/>
        <h2>${country.name.official}</h2>
      </li>`).join('');
}