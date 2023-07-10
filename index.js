
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push('Ralph');
  }
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
  }
function destructivelyRemoveLastCat(name) {
    cats.pop('Garfield');
  }
function destructivelyRemoveFirstCat(name) {
    cats.shift('Milo');
  }


function appendCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.push('Broom');
    return copyOfCats;
}
function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift('Arnold');
    return copyOfCats;
}
function removeLastCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.pop(1);
    return copyOfCats;
}
function removeFirstCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.shift(1);
    return copyOfCats;
}