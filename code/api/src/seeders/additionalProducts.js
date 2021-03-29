'use strict';
const Sequelize = require('sequelize')


const factory = require('factory-bot').factory;
const faker = require('faker');
const Product = require('../modules/product/model.js');
const productName = JSON.stringify({name: faker.commerce.productName()});


console.log(productName);

factory.define('product', Product, {
  name: 'Generic Wooden Pants',
  slug: faker.lorem.slug(productName),
  description: faker.commerce.productDescription(),
  type: Math.random([1,2]),
  gender: Math.random([1,2]),
  image: faker.image.imageUrl(),
  style: Math.random(['classic', 'edgy', 'sproty', 'preppy', 'trendy', 'adventurous'])
});

// console.log(product)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', 
      factory.createMany('product', 5).then(productsArray => {
        console.log(productsArray)
      })
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
}
