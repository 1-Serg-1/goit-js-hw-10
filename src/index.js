import 'modern-normalize';
import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { markupCountryList } from './js/markupCountryList';
import { markupCountryInfo } from './js/markupCountryInfo';

const DEBOUNCE_DELAY = 300;
const DEFAULT_FONTSIZE = '10px';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info')

searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry() {
       const textSearchCountry = searchBox.value.trim();
       if (textSearchCountry !== '') {
              fetchCountries(textSearchCountry).then(name => validResult(name))
                     .catch(() => {
                            countryList.innerHTML = '';
                            countryInfo.innerHTML = '';
                     });
       }
};

function validResult(name) {
       if (name.length > 10) {
              Notify.info("Too many matches found. Please enter a more specific name.");
       } else if (name.length > 1 && name.length <= 10) {
              countryList.style.fontSize = DEFAULT_FONTSIZE;
              countryList.innerHTML = '';
              countryInfo.innerHTML = '';
              countryList.innerHTML = markupCountryList(name);
       } else {
              countryList.style.fontSize = '20px';
              countryList.innerHTML = markupCountryList(name);
              countryInfo.innerHTML = markupCountryInfo(name); 
       }
}