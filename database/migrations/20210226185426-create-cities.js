'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cities',{
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true
      },
      count : {
        type : Sequelize.INTEGER,
        defaultValue : 0
      },
      name : {
        type : Sequelize.STRING,
        nullable : false
      },
      country : {
        type : Sequelize.STRING,
        nullable : false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('cities');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
