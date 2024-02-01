const { Tag } = require('../models');

/**
 * Array of tag data objects.
 * @type {Array<Object>}
  */
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

/**
 * Seeds the database with tag data.
 * @returns {Promise} A promise that resolves when the tags are successfully created.
 */
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
