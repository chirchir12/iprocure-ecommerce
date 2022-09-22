'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'updateUser',
          description: 'role to update user',
          createdAt: new Date(),
        },
        {
          name: 'createUser',
          description: 'role to create user',
          createdAt: new Date(),
        },
        {
          name: 'addUser',
          description: 'role to add user',
          createdAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
