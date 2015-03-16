var firstClause = "A Koan has the Buddha-nature if and only if ";
var colors = ["yellow", "black", "green", "blue"];
var sizes = ["small", "medium", "large"];
var quantities = ["two", "three"];
var orientations = ["grounded", "ungrounded", "upright", "sideways"];


function randomSelection (array) {
  return array[Math.floor(Math.random()*array.length)];
}

function easyRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3, 4])

  switch(number) {
    case 0:
      rule += "it has " + randomSelection(quantities) + " or more " + randomSelection(colors) + " pieces."
      break;
    case 1:
      rule += "is has exactly one " + randomSelection(sizes) + " " + randomSelection(orientations) + " " + randomSelection(colors) + " piece."
      break;
    case 2:
      rule += "it has exactly two " + randomSelection(sizes) + " " + randomSelection(colors) + " pieces."
      break;
    case 3:
      rule += "is has at least one " + randomSelection(colors) + " piece pointing at a " + randomSelection(colors) + " piece."
      break;
    case 4:
      rule += "is has exactly one " + randomSelection(colors) + " piece and exactly one " + randomSelection(sizes) + " piece."
      break;
  }


  return rule;
}
