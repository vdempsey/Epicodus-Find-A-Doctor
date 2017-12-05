var apiKey = require('./../.env').apiKey;

export class Doctor {
  constructor(search){
    this.search = search;
  }

  findBySimptom(displayData) {
    let yourSearch = this.search;
    let getDoctors = $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + yourSearch + "&location=or-portland&user_location=45.512794,-122.676483&user_key=" + apiKey).then(function(results) {
      displayData(results);
    })
    .fail(function() {
      alert('Something went wrong. Please try again. If you continue having this issues, please contact give us a call (888) - XXX - XXXX');
    });
  }

  findByName(displayData) {
    let yourSearch = this.search;
    let getDoctors = $.get("https://api.betterdoctor.com/2016-03-01/doctors?name=" + yourSearch + "&location=or-portland&user_location=45.512794,-122.676483&user_key=" + apiKey).then(function(results) {
      displayData(results);
    })
    .fail(function() {
      alert('Something went wrong. Please try again. If you continue having this issues, please contact give us a call (888) - XXX - XXXX');
    });
  }

}
