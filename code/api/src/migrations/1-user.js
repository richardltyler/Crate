module.exports = {
  //Setting up migration
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      //Will need to create a survey result/ style attribute
      id: {
        //Sets up ID, requires it, increments it by one, makes it the primary key
        //After talking with the FE, we could add (a) style(s) to be associated with a user.  It doesn't get added until after the user completes the survey. One of the questions we had: should the user be able to have multiple styles associated--in the event of the 'user' being for a household? In that case, users could have multiple subscriptions. We would need to create a 'styles' table.
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      //must have timestamps
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //an up requires a down--this is what happens when the migration is rolled back
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
