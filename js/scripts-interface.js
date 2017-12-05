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
      $('.output').append(`<p>Your search did not return any results. Please try again.</p>`);
    }

  };


$(document).ready(function() {

  $("#name").on("click", function() {
    $("#condition").val("")
    $(".output").empty();
  });
  $("#condition").on("click", function() {
    $("#name").val("")
    $(".output").empty();
  });
  $(".btn").on("click", function() {
    $("#name").val("");
    $("#condition").val("")
    $(".output").empty();
  });
  $("form#find").submit(function(event) {
    event.preventDefault();
    $('.output').empty();
    let name = $("#name").val();
    let simptom = $("#condition").val();
    let newNameSearch = new Doctor(name);
    let newConditionSearch = new Doctor(simptom);
    if (document.getElementById("name").value.length == 0 && document.getElementById("condition").value.length == 0) {
      $('.output').append(`<p>Please enter your search</p>`);
    } else
    if (document.getElementById("name").value.length == 0 && document.getElementById("condition").value.length != 0) {
      let apiResultsCondition = newConditionSearch.findBySimptom(displayData);
    } else {
      let apiResultsName = newNameSearch.findByName(displayData);
    }
  });

  $(".btn-error").click(function(event) {
    $('.output').empty();
  });
});
