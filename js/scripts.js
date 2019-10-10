// back end
var whichChar = function(gender, age, pet, classes, wand) {
  if (gender === "male" && age > 11 && age < 20 && pet === "owl" && classes === "dark" && wand === "ash") {
    return "Cedric Diggory"
  } else if (gender === "female" && age > 25 && pet === "cat" && classes === "potion" && wand === "birch") {
    return "Dolores Umbridge"
  } else if (gender === "male" && age > 11 && age < 21 && classes === "dark" && wand === "cherry") {
    return "Neville Longbottom"
  } else if (age >= 11 && wand === "ebony") {
    return "A brand new character"
  } else if (age <= 10) {
    return "(sorry your too young to go to hogwarts)"
  } else {
    return "a character not mentioned in Harry Potter"
  }
}
// front end
$(document).ready(function() {
  $("#quiz").submit(function(e) {
    var gender = $("select#gender").val();
    var age = parseInt($("input#age").val());
    var pet = $("select#pet").val();
    var classes = $("select#class").val();
    var wand = $("select#wand").val();
    
    var result = whichChar(gender, age, pet, classes, wand);

    $("#char").empty().append(result);
    $("#hide").show();

    e.preventDefault();
  });
});
