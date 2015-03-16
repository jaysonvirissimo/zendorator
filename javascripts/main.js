var firstClause = "A Koan has the Buddha-nature if and only if ";
var colors = ["yellow", "black", "green", "blue"];
var sizes = ["small", "medium", "large"];


function randomSelection (array) {
  return array[Math.floor(Math.random()*array.length)];
}

function easyRule () {
  var rule = firstClause;
  var number = randomSelection([0, 1, 2, 3])

  switch(number) {
    case 0:
      rule += "it has one or more " + randomSelection(colors) + " pieces."
      break;
    case 1:
      rule += "it has exactly one " + randomSelection(colors) + " piece."
      break;
    case 2:
      rule += "it has one or more " + randomSelection(sizes) + " " + randomSelection(colors) + " pieces."
      break;
    case 3:
      rule += "it has exactly one " + randomSelection(sizes) + " " + randomSelection(colors) + " piece."
      break;
  }


  return rule;
}
