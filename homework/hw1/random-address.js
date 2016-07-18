var addressArrays = [
  streetNumber = [68, 107, 1080, 480],
  streetName = ["Portland Ave", "Mark Smith Dr", "Peachtree St", "Crescent St"],
  cityName = ["Redding", "Mandeville", "Atlanta", "Oakland"],
  stateName = ["CT", "LA", "GA", "CA"],
  zipCode = ["06896", 70471, 30309, 94610],
];

var storeAddressIndices = [];

function randomize(array) {
  var randomIndex = array[Math.floor(Math.random() * (array.length))];
  storeAddressIndices.push(randomIndex);
};

addressArrays.forEach(randomize);
var randomAddress = storeAddressIndices.join(" ");
console.log(randomAddress);
