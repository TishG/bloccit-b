'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        // the validate property allows us to pass validators to apply to the data
        validate: {
          //The isEmail validator checks that the value passed to the email property is a valid email and if not, surfaces the msg provided in the validation error message
          isEmail: { msg: "must be a valid email" }
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};