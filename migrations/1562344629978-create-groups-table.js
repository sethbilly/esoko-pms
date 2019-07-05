'use strict';

/**
 * Make any changes you need to make to the database here
 */
exports.up = function up(done) {
  this('Group').findOne({
    name: 'Farmhouse',
    description: 'Farmers'
  });
  done();
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};