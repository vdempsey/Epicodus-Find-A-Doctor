var apiKey = require('./../.env').apiKey;
import { Doctor } from './../js/scripts.js';


let displayData = function(results) {
  if (results.data.length > 0) {
    results.data.forEach(function(element) {
      $('.output').append(`<h3>${element.profile.first_name}  ${element.profile.last_name}</h3><span class="info">${element.practices[0].visit_address.street}, ${element.practices[0].visit_address.city} ${element.practices[0].visit_address.state}<br>${element.practices[0].phones[0].number}</span>`);

      if (element.practices[0].website != undefined) {
         $('.output').append(`<span class="info"> | ${element.practices[0].website}</span>`);
      }

      if (element.practices[0].accepts_new_patients === true) {
         $('.output').append(`<br><em>currently accepting new patients</em>`);
      } else {
         $('.output').append(`<br><em>currently not accepting new patients</em>`);
      }
    });
  }
  else {
      $('.output').append(`<li>Your search did not return any results. Please try again.</li>`);
    }

  };


$(document).ready(function() {

  $("form#find").submit(function(event) {
    event.preventDefault();
    $('.output').empty();
    let search = $("#search").val();
    let newSearch = new Doctor(search);
    if (document.getElementById("search").value.length == 0) {
      $('.output').append(`<p>Please enter your search</p>`);
    } else {
      let apiResults = newSearch.apiConstructor(displayData);
    }
  });

  $(".btn-error").click(function(event) {
    $('.output').empty();
  });
});
