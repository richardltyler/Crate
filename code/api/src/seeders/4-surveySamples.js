'use strict';
const { date } = require('faker');
const faker = require('faker');

function generateProducts(){
  let products = []

  for (let id=1000; id <= 1100; id++){
    let name = faker.commerce.productName();
    let slug = name.replace(/ /g, "-");
    let description = faker.commerce.productDescription();
    let type = Math.random() < 0.5 ? 1 : 2;
    let gender = Math.random() < 0.5 ? 1 : 2;
    let image = faker.image.imageUrl();
    let category = ['tops', 'bottoms', 'shoes', 'accessories', 'formal'][Math.floor(Math.random() * 5)]
    let style = ['classic', 'edgy', 'sporty', 'preppy', 'trendy'][Math.floor(Math.random() * 5)]

    products.push({
      "id": id, 
      "name": name,
      "slug": slug,
      "description": description,
      "type": type,
      "gender": gender,
      "image": image, 
      "style": style,
      "category": category,
      "createdAt": new Date(),
      "updatedAt": new Date()
    });
  }
  return products
}

let productData = generateProducts();


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveySamples', productData, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('surveySamples', null, {});
  }
}
