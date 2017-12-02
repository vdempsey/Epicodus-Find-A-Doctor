var apiKey = require('./../.env').apiKey;
import { Doctor } from './../js/scripts.js';


let displayData = function(results) {
  if (results.data.length > 0) {
  for (let i=0; i<results.data.length; i++) {
     // $('.output').append(`<li>${results.data[i].profile.first_name}  ${results.data[i].profile.last_name}<br></li>`);
     // let newPatients = results.data[i].practices.accepts_new_patients;
     // newPatients = true;
     if (results.data[i].practices.accepts_new_patients != undefined) {
       $('.output').append(`<h3>${results.data[i].profile.first_name}  ${results.data[i].profile.last_name}</h3><p>currently accepting new patients</p>`);
       console.log(results.data[i].practices.accepts_new_patients);
     }
     else {
      $('.output').append(`<h3>${results.data[i].profile.first_name}  ${results.data[i].profile.last_name}</h3><p>currently not accepting new patients</p>`);
     }
  }

}
  else {
    $('.output').append(`<li>Please try a different word for your condition</li>`);
  }
};

$(document).ready(function() {

  $("form#find").submit(function(event) {
    let condition = $("#condition").val();
    event.preventDefault();

    let newSearch = new Doctor(condition);
    let apiResults = newSearch.apiConstructor(displayData);
  });

  $(".btn-error").click(function(event) {
    $('.output').empty();
  });
});
