// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer. 
// Go to the store and buy some more, 99 bottles of beer on the wall.

for (var counter = 99; counter >= 1; counter--) {
  var noun;
  var bottles = counter - 1;
  
  if (counter == 1) {
    noun = "bottle";
  } else {
    noun = "bottles";
  }

  console.log("%d %s of beer on the wall, %d %s of beer.", counter, noun, counter, noun);
    
  if (counter == 1) {
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("");
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store, and buy some more 99 bottles of beer on the wall.");
  } else if (counter > 1 && !(counter > 2)) {
    console.log("Take one down and pass it around %d bottle of beer on the wall.", bottles);
  } else {
    console.log("Take one down and pass it around %d %s of beer on the wall.", bottles, noun);
  }

  console.log("");
}