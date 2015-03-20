var firstClause = "A Koan has the Buddha-nature if and only if ";
var colors = ["yellow", "black", "green", "blue"];
var sizes = ["small", "medium", "large"];
var quantities = ["two", "three"];
var orientations = ["grounded", "ungrounded", "upright", "flat"];
var fractions = ["half", "third", "fourth"];
var evenOrOdd = ["even", "odd"];

function randomSelection(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function easyRule () {
  var rule = firstClause;
  var selection = Math.floor(Math.random() * 10);
  var color = randomSelection(colors);
  var size = randomSelection(sizes);
  var quantity = randomSelection(quantities);
  var orientation = randomSelection(orientations);

  switch(selection) {
    case 0:
      rule += "it has " + quantity + " or more " + color + " pieces.";
      break;
    case 1:
      rule += "it has exactly one " + size + " " + orientation + " " + color + " piece.";
      break;
    case 2:
      rule += "it has exactly two " + size + " " + color + " pieces.";
      break;
    case 3:
      rule += "it has at least one " + color + " piece pointing at a " + randomSelection(colors) + " piece.";
      break;
    case 4:
      rule += "it has exactly one " + color + " piece and exactly one " + size + " piece.";
      break;
    case 5:
      rule += "it has an equal number of " + color + " and " + size + " pieces.";
      break;
    case 6:
      rule += "all flat pieces point at a " + size + " piece.";
      break;
    case 7:
      rule += "all of the " + color + " pieces are " + orientation + ".";
      break;
    case 8:
      rule += "all of the pieces are " + orientation + ", except for the " + color + " pieces.";
      break;
    case 9:
      rule += "all of the pieces are " + orientation + ", except for the " + size + " pieces.";
      break;
  }

  return rule;
}

function mediumRule () {
  var rule = firstClause;
  var selection = Math.floor(Math.random() * 10);
  var color = randomSelection(colors);
  var size = randomSelection(sizes);
  var quantity = randomSelection(quantities);
  var orientation = randomSelection(orientations);

  switch(selection) {
    case 0:
      rule += "all flat pieces point at " + color + " pieces, and there exists at least one flat piece.";
      break;
    case 1:
      rule += "all of the " + color + " pieces are " + orientation + ", and there exists at least one " + color + " piece.";
      break;
    case 2:
      rule += "all the pieces are " + orientation + ", except for " + color + " pieces.";
      break;
    case 3:
      rule += "all the small pieces are " + color + ", all the medium pieces are " + randomSelection(colors) + ", and all the large pieces are " + randomSelection(colors) + ".";
      break;
    case 4:
      rule += "all the " + orientation + " pieces are the same size.";
      break;
    case 5:
      rule += "all the " + color + " pieces are the same size.";
      break;
    case 6:
      rule += "exactly half of the pieces are " + size + ".";
      break;
    case 7:
      rule += "a " + size + " piece touches a " + randomSelection(orientations) + " piece.";
      break;
    case 8:
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
  var selection = Math.floor(Math.random() * 10);
  var color = randomSelection(colors);
  var size = randomSelection(sizes);
  var quantity = randomSelection(quantities);
  var orientation = randomSelection(orientations);
  var fraction = randomSelection(fractions);
  var oddness = randomSelection(evenOrOdd);

  switch(selection) {
    case 0:
      rule += "exactly one " + fraction + " of the pieces are " + color + ".";
      break;
    case 1:
      rule += "exactly one " + fraction + " of the pieces are " + size + ".";
      break;
    case 2:
      rule += "it has a flat " + color + " piece pointing at an " + oddness + " number of " + size + " pieces.";
      break;
    case 3:
      rule += "exactly one " + fraction + " of the pieces are " + size + " or there are exactly " + quantity + " " + color + " pieces.";
      break;
    case 4:
      rule += "there are no " + color + " or " + size + " pieces.";
      break;
    case 5:
      rule += "there are no " + size + " pieces and there are an " + oddness + " number of " + color + " pieces.";
      break;
    case 6:
      rule += "exactly one " + fraction + " of the pieces are either " + size + " or " + color + " or both.";
      break;
    case 7:
      rule += "it has a " + orientation + " piece or a " + color + " piece, but not both.";
      break;
    case 8:
      rule += "it doesn't have two pieces of the same " + randomSelection(["size", "color", "orientation"]) + ".";
      break;
    case 9:
      rule += "it has exactly " + quantity + " pieces of the same color or an " + oddness + " number of " + size + " pieces." ;
      break;
  }

  return rule;
}
