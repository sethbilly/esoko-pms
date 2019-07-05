'use strict';

/**
 * Make any changes you need to make to the database here
 */
exports.up = function up(done) {
  this('Person').insertOne({
    firstName: 'Farmhouse',
    lastName: 'Farmers',
    country: 'Ghana',
    gender: "Male",
    phoneNo: "0245184371",
    comments: "Say cheese",
    age: 30,
    email: 'example@some.com',
    homeAddress: "Prono Street",
    hobbies: 'Movie Watching',
    profilePicture: 'dhfafhjasfhkjsfhksajfk',
    occupation: 'farmer'
  });
  done();
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};