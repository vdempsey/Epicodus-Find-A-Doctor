var apiKey = require('./../.env').apiKey;
import { Doctor } from './../js/template-backend.js';


let displayData = function(results) {
  for (let i=0; i<10; i++) {
    let docFullName = results.data.profile.first_name;
    console.log(docFullName);
    // let name = data.profile.first_name;
     $('.output').append("<li>" + docFullName[i] + "</li>");
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
