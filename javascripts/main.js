var firstClause = "A Koan has the Buddha-nature if and only if ";
var colors = ["yellow", "black", "green", "blue"];
var sizes = ["small", "medium", "large"];
var quantities = ["two", "three"];
var orientations = ["grounded", "ungrounded", "upright", "flat"];


function randomSelection (array) {
  return array[Math.floor(Math.random()*array.length)];
}

function easyRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

  switch(number) {
    case 0:
      rule += "it has " + randomSelection(quantities) + " or more " + randomSelection(colors) + " pieces.";
      break;
    case 1:
      rule += "is has exactly one " + randomSelection(sizes) + " " + randomSelection(orientations) + " " + randomSelection(colors) + " piece.";
      break;
    case 2:
      rule += "it has exactly two " + randomSelection(sizes) + " " + randomSelection(colors) + " pieces.";
      break;
    case 3:
      rule += "is has at least one " + randomSelection(colors) + " piece pointing at a " + randomSelection(colors) + " piece.";
      break;
    case 4:
      rule += "is has exactly one " + randomSelection(colors) + " piece and exactly one " + randomSelection(sizes) + " piece.";
      break;
    case 5:
      rule += "it has an equal number of " + randomSelection(colors) + " and " + randomSelection(sizes) + " pieces.";
      break;
    case 6:
      rule += "all flat pieces point at a " + randomSelection(sizes) + " piece.";
      break;
    case 7:
      rule += "all of the " + randomSelection(colors) + " pieces are " + randomSelection(orientations) + ".";
      break;
    case 8:
      rule += "all of the pieces are " + randomSelection(orientations) + ", except for the " + randomSelection(colors) + " pieces.";
      break;
    case 9:
      rule += "all of the pieces are " + randomSelection(orientations) + ", except for the " + randomSelection(sizes) + " pieces."
      break;
  }

  return rule;
}

function mediumRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

  switch(number) {
    case 0:
      rule += "all flat pieces point at " + randomSelection(colors) + " pieces, and there exists at least one flat piece.";
      break;
    case 1:
      var color = randomSelection(colors);
      rule += "all of the " + color + " pieces are " + randomSelection(orientations) + ", and there exists at least one " + color + " piece.";
      break;
    case 2:
      rule += "all the pieces are " + randomSelection(orientations) + ", except for " + randomSelection(colors) + " pieces.";
      break;
    case 3:
      rule += "all the small pieces are " + randomSelection(colors) + ", all the medium pieces are " + randomSelection(colors) + ", and all the large pieces are " + randomSelection(colors) + ".";
      break;
    case 4:
      rule += "all the " + randomSelection(orientations) + " pieces are the same size.";
      break;
    case 5:
      rule += "all the " + randomSelection(colors) + " pieces are the same size.";;
      break;
    case 6:
      rule += "exactly half of the pieces are " + randomSelection(sizes) + ".";
      break;
    case 7:
      rule += "a " + randomSelection(sizes) + " piece touches a " + randomSelection(orientations) + " piece.";
      break;
    case 8:
      var orientation = randomSelection(orientations);
      rule += "all of the " + orientation + " pieces are " + randomSelection(sizes) + ", and there exists at least one " + orientation + " piece.";
      break;
    case 9:
      rule += "it has a " + randomSelection(orientations) + " piece, but no " + randomSelection(colors) + " pieces.";
      break;
  }

  return rule;
}
