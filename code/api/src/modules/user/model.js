'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    //attribute: what sort of GraphQL DataType
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
  //User relationship creation
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
