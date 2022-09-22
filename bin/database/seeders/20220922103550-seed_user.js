'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
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
      'Users',
      [
        {
          firstName: 'Emmanuel',
          lastName: 'Chirchir',
          email: 'chirchir1@gmail.com',
          password: await bcrypt.hash('chirchirchirchir', 10),
          phoneNumber: '+254705111111',
          createdAt: new Date(),
        },
        {
          firstName: 'Raila',
          lastName: 'Odinga',
          email: 'chirchir2@gmail.com',
          password: await bcrypt.hash('chirchirchirchir', 10),
          phoneNumber: '+254705111112',
          createdAt: new Date(),
        },
        {
          firstName: 'William',
          lastName: 'Ruto',
          email: 'chirchir3@gmail.com',
          password: await bcrypt.hash('chirchirchirchir', 10),
          phoneNumber: '+254705111113',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
