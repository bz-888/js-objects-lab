// console.log("App.js is loading.");

// // defining an object literal
// // key value pairs <- want in your language

// // keys = name, color, isReal, etc.
// // values = "Big Foot", "brown", true, etc.
// const bigFoot = {
//     name: "Big Foot",
//     color: "brown",
//     isReal: true,
//     height: 7, // feet
//     diet: "vegetarian",
//     woodlandFriends: [
//         {name: "bunny", age: 4},
//         {name: "squirrel", age: 5}],
//     eat (plant) {
//         console.log(`Lets eat ${plant}`);
//     },
//     hide (location) {
//         console.log(`Lets hide in the ${location}`)
//     },
//     run () {

//     }
// };

// bigFoot.eat("tree");
// bigFoot.eat("lettuce");
// bigFoot.eat("kale");

// // add an argument to the hide function called location
// // when you call it, it should say:
// // Lets hide in "location"

// bigFoot.hide("bush");
// bigFoot.hide("shadows");


// // can use the delete operator to delete a property
// delete bigFoot.isReal

// // log the age of bunny and the name of squirrel
// console.log(bigFoot.woodlandFriends[0].age);
// console.log(bigFoot.woodlandFriends[1].name);


// // I want to see if bigFoot is real
// // retrieve the value of the isReak key (property) in bigFoot
// console.log(bigFoot.isReal);

// // gettomg a property (value) ^^^

// // see what diet bigFoot has''
// console.log(bigFoot.diet);


// // set key value pairs

// // Change the color of bigFoot
// bigFoot.color = "strawberry blonde";

// // Change the diet of bigFoot
// bigFoot.diet = "Omnivore";
// console.log(bigFoot.diet);

// // Print out deet from woodlandFriends
// console.log(bigFoot.woodlandFriends[2]);

// // For each woodlandFriend, use sayHello function
// // You should see three logs
// // Hello, bunny
// // Hello, squirrel
// // Hello, deer

// function sayHello (name) {
//     return `Hello, ${name}`;
// };

// bigFoot.woodlandFriends.forEach(function (friend) {
//     console.log(sayHello(friend));
// });


// // to access values
// // dot syntax
// bigFoot.name; // "Big Foot"
// // bracket syntax
// bigFoot["name"]; // "Big Foot"

// bigFoot["woodlandFriends"][0]; // "bunny"




// js-objects-lab below
const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
  // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title

    // sets the value of the title property of the album1 variable to "Talking Heads - 77"
    album1.title = "Talking Heads - 77";

    // defines a variable named title and sets the variable's value to the new title of album1
    let title = album1.title;

  
  // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
  
    // defines a variable named label and sets the variable's value to the value of the label property within the albumDetails property of the album1 object 
    let label = album1.albumDetails.label;
  
  
  const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
  // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
  
    // pushes the 0 index item ("LP") of the formats array in the albumDetails object property of the album2 object into the formats array of the albumDetails object property of the album3 object
    album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
  
  
  // Exercise 4:  Update the released property of album3 from a string into a Date object using that string
  
  // re-assigned released in album3 using the native new Date function
  album3.albumDetails.released = new Date(album3.albumDetails.released);

  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  
  // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
  
  // go to the album4 object, go to the albumDetails object/property of album4, and create a new property named label and enter "Sire" as the value of that property
  album4.albumDetails.label = "Sire";
  
  
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
  
  // go to album5 object, go to albumDetails object/property, go to the labels array, re-assign index position 1 value to "EMI"
  album5.albumDetails.labels[1] = "EMI";
  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats
  
  
  // define a variable named formats and assign the value of formats array within the albumDetails object/property of the album6 object into the variable
  const formats = album6.albumDetails.formats
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
  
  // define a variable named labels and go into talkingHeadsAlbum array, go to index position 4 which is album5, and go to the albumDetails property, and go to labels, pull the value of labels
  const labels = talkingHeadsAlbums[4].albumDetails.labels;
  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
  
  // go into index position 5 of talkingHeadsAlbums which is album6, go to the released property within the albumDetails object, this is the variable we are assigning a value to via an equal sign
  // following the equal sign, go to index position 6 of talkingHeadsAlbums, which is album 7, get the value of released property within the albumDetails object, and place that in the spot we go to in the earlier part of the code within the released property of the albumDetails object in the album6 object
  talkingHeadsAlbums[5].albumDetails.released = talkingHeadsAlbums[6].albumDetails.released;
  
  
  // Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails
  
  let albumIdx = 4;
  
  // define a variable named albumDetails and assign to it the value found within albumDetails object/property within the album located in the 4th index position of the array talkingHeadsAlbum
  const albumDetails = talkingHeadsAlbums[albumIdx].albumDetails;
  
  
  /********** Don't look below here **********/
  console.log('=========================== Excercise console.logs =============')
  console.log('Exercise 1:', title);
  console.log('Exercise 2:', label);
  console.log('Exercise 3:', album3.albumDetails.formats[1]);
  console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());
  console.log('Exercise 5:', album4.albumDetails.label);
  console.log('Exercise 6:', album5.albumDetails.labels[1]);
  console.log('Exercise 7:', formats);
  console.log('Exercise 8:', labels);
  console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released.toLocaleDateString());
  console.log('Exercise 10:', albumDetails);
  console.log('===================================================================')
  