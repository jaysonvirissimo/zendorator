var firstClause = "A Koan has the Buddha-nature if and only if ";
var colors = ["yellow", "black", "green", "blue"];
var sizes = ["small", "medium", "large"];
var quantities = ["two", "three"];
var orientations = ["grounded", "ungrounded", "upright", "flat"];
var fractions = ["half", "third", "fourth"];
var evenOrOdd = ["even", "odd"];


function randomSelection(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function easyRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  var color, size, quantity, orientation;

  switch(number) {
    case 0:
      rule += "it has " + randomSelection(quantities) + " or more " + randomSelection(colors) + " pieces.";
      break;
    case 1:
      rule += "it has exactly one " + randomSelection(sizes) + " " + randomSelection(orientations) + " " + randomSelection(colors) + " piece.";
      break;
    case 2:
      rule += "it has exactly two " + randomSelection(sizes) + " " + randomSelection(colors) + " pieces.";
      break;
    case 3:
      rule += "it has at least one " + randomSelection(colors) + " piece pointing at a " + randomSelection(colors) + " piece.";
      break;
    case 4:
      rule += "it has exactly one " + randomSelection(colors) + " piece and exactly one " + randomSelection(sizes) + " piece.";
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
      rule += "all of the pieces are " + randomSelection(orientations) + ", except for the " + randomSelection(sizes) + " pieces.";
      break;
  }

  return rule;
}

function mediumRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  var color, size, quantity, orientation;

  switch(number) {
    case 0:
      rule += "all flat pieces point at " + randomSelection(colors) + " pieces, and there exists at least one flat piece.";
      break;
    case 1:
      color = randomSelection(colors);
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
      rule += "all the " + randomSelection(colors) + " pieces are the same size.";
      break;
    case 6:
      rule += "exactly half of the pieces are " + randomSelection(sizes) + ".";
      break;
    case 7:
      rule += "a " + randomSelection(sizes) + " piece touches a " + randomSelection(orientations) + " piece.";
      break;
    case 8:
      orientation = randomSelection(orientations);
      rule += "all of the " + orientation + " pieces are " + randomSelection(sizes) + ", and there exists at least one " + orientation + " piece.";
      break;
    case 9:
      rule += "it has a " + randomSelection(orientations) + " piece, but no " + randomSelection(colors) + " pieces.";
      break;
  }

  return rule;
}

function hardRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  var fraction, size, quantity, color, orientation, oddness;

  switch(number) {
    case 0:
      fraction = randomSelection(fractions);
      color = randomSelection(colors);
      rule += "exactly one " + fraction + " of the pieces are " + color + ".";
      break;
    case 1:
      fraction = randomSelection(fractions);
      size = randomSelection(sizes);
      rule += "exactly one " + fraction + " of the pieces are " + size + ".";
      break;
    case 2:
      color = randomSelection(colors);
      oddness = randomSelection(evenOrOdd);
      size = randomSelection(sizes);
      rule += "it has a flat " + color + " piece pointing at an " + oddness + " number of " + size + " pieces.";
      break;
    case 3:
      fraction = randomSelection(fractions);
      size = randomSelection(sizes);
      quantity = randomSelection(quantities);
      color = randomSelection(colors);
      rule += "exactly one " + fraction + " of the pieces are " + size + " or there are exactly " + quantity + " " + color + " pieces.";
      break;
    case 4:
      color = randomSelection(colors);
      size = randomSelection(sizes);
      rule += "there are no " + color + " or " + size + " pieces.";
      break;
    case 5:
      size = randomSelection(sizes);
      oddness = randomSelection(evenOrOdd);
      color = randomSelection(colors);
      rule += "there are no " + size + " pieces and there are an " + oddness + " number of " + color + " pieces.";
      break;
    case 6:
      fraction = randomSelection(fractions);
      size = randomSelection(sizes);
      color = randomSelection(colors);
      rule += "exactly one " + fraction + " of the pieces are either " + size + " or " + color + " or both.";
      break;
    case 7:
      orientation = randomSelection(orientations);
      color = randomSelection(colors);
      rule += "it has a " + orientation + " piece or a " + color + " piece, but not both.";
      break;
    case 8:
      rule += "it doesn't have two pieces of the same " + randomSelection(["size", "color", "orientation"]) + ".";
      break;
    case 9:
      quantity = randomSelection(quantities);
      oddness = randomSelection(evenOrOdd);
      size = randomSelection(sizes);
      rule += "it has exactly " + quantity + " pieces of the same color or an " + oddness + " number of " + size + " pieces." ;
      break;
  }

  return rule;
}
