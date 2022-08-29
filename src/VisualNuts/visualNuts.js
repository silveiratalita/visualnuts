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

  countriesAndLanuages(){
  
    const numberOfCountries = json.length;
  
    let mostOfficialLanguagesDe=_mostOfficialLanguagesDe(json);
     let countryHighestNumberOfOfficialLanguages = _countryHighestNumberOfOfficialLanguages(json);
     let mostCommonOfficialLanguagesOfAllCountries = _mostCommonOfficialLanguagesOfAllCountries(json);

     function _mostOfficialLanguagesDe(){
     
      let arr = json.map((e) => {
        
        if (e.languages.find(element => element === 'de')) {
          
          return e;
        }
       
      })
      const str='De is the official language in the countries' + JSON.stringify(arr);
      return str
    }

    function _countryHighestNumberOfOfficialLanguages(){
      let count = 0;
      let country;
     
      for (let i = 0; i < json.length; i++) {
        if (json[i].languages.length > count) {
          count = json[i].languages.length;
          country = json[i].country;
        }
      }
      const str = 'The country'+ country+' has the highest number of languages, there they speak' +count+' languages.'
      return str;

    }

   function _mostCommonOfficialLanguagesOfAllCountries(){
    let arr =[];
    for (let i = 0; i <json.length; i++) {
      for(let j = 0 ; j<json[i].languages.length; j++){
       arr.push(json[i].languages[j]);
      }
      
    }
      const hashmap = arr.reduce( (acc, val) => {
       acc[val] = (acc[val] || 0 ) + 1
       return acc
    },{})
     return 'The most common language of all countries is '+ Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
  

    
    }
    
    console.log('number of countries in the world :'+numberOfCountries + 'country with the most official languages: '+ mostOfficialLanguagesDe)
    console.log("");
    console.log( 'country with the highest number of official languages: '+countryHighestNumberOfOfficialLanguages);
    console.log("");
    console.log('countryHighestNumberOfOfficialLanguages: '+ mostCommonOfficialLanguagesOfAllCountries)
  }

  
  _visualNuts() {
    this.oneTo100();
     this.countriesAndLanuages();
  }

}

/**
 */
module.exports = () => new VisualNuts();
