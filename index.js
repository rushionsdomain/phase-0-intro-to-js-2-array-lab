let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Create a new array by concatenating the original cats array with the new name
  return [...cats, name];
}

function prependCat(name) {
  // Create a new array by spreading the new name followed by the original cats array
  return [name, ...cats];
}

function removeLastCat() {
  // Create a new array by slicing the original cats array to exclude the last element
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  // Create a new array by slicing the original cats array to exclude the first element
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
