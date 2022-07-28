/**
 * Visual Nuts Functions
 */ 1;
const json = require('../../jsonCountry.json');
class VisualNuts {
  /**
   */
  constructor() {}

  /**
   *1 to 100 increment
   */
  oneTo100() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('Visual Nuts');
      }

      if (i % 3 === 0) {
        console.log('Visual');

        continue;
      }

      if (i % 5 === 0) {
        console.log('Nuts');
      }
    }
  }

  countriesAndLanuages(json) {
    const numberOfCountries = json.length();
    let mostOfficialLanguagesDe=_mostOfficialLanguagesDe(json);
;
    let countryHighestNumberOfOfficialLanguages = _countryHighestNumberOfOfficialLanguages(json);
    let mostCommonOfficialLanguagesOfAllCountries = _mostCommonOfficialLanguagesOfAllCountries(json);

    _mostOfficialLanguagesDe(json){
     
      let arr = json.map((e) => {
        if (e.languages.find(language = e.languages === 'de')) {
          return e.country;
        }
        console.log(`All countries that speak langue de are ${arr}`,)
      })
    }
    _countryHighestNumberOfOfficialLanguages(json){
      let count = 0;
      for (let i = 0; i < json.length(); i++) {
        if (json[i].languages.length() > count) {
          count = json[i].languages.length();
        }
      }
      return count;

    }

    _mostCommonOfficialLanguagesOfAllCountries(json){
 
      
    }

    
  }

  _visualNuts(json) {
    this.oneTo100();
    this.countriesAndLanuages(json);
  }
}

/**
 */
module.exports = () => new VisualNuts();
