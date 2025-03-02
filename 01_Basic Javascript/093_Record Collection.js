You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

  //*******************************************************************

  SOLUTION:

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Function to update records
function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Delete the property if value is an empty string
    delete records[id][prop];
  } else if (prop === "tracks") {
    // If prop is "tracks" and the property doesn't exist, create an array
    // Then, add the value to the array
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    // For other properties, assign the value
    records[id][prop] = value;
  }
  return records;
}

// Testing the function
updateRecords(collection, 5439, "artist", "ABBA");
updateRecords(collection, 5439, "tracks", "Take a Chance on Me");
updateRecords(collection, 2548, "artist", "");
updateRecords(collection, 1245, "tracks", "Addicted to Love");
updateRecords(collection, 2468, "tracks", "Free");
updateRecords(collection, 2548, "tracks", "");
updateRecords(collection, 1245, "albumTitle", "Riptide");
