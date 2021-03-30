'use strict'

// Preference
module.exports = function(sequelize, DataTypes) {
  let Preference = sequelize.define('preferences', {
    description: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER
    },
  })

  Preference.associate = function(models) {
    Preference.belongsTo(models.User)
  }

  return Preference
}