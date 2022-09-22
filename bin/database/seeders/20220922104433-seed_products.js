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
      'Products',
      [
        {
          name: 'Laptop',
          description: 'Description',
          type: 'HP',
          category: 'small',
          manufacturer: 'HP',
          distributor: 'SOlTech',
          quantity: 20,
          unitCost: 5000,
          createdAt: new Date(),
        },
        {
          name: 'Phone',
          description: 'Description',
          type: 'Sumsung',
          category: 'small',
          manufacturer: 'Sumsung',
          distributor: 'SOlTech',
          quantity: 20,
          unitCost: 5000,
          createdAt: new Date(),
        },
        {
          name: 'Desktop',
          description: 'Description',
          type: 'Lenevo',
          category: 'small',
          manufacturer: 'Lenevo',
          distributor: 'SOlTech',
          quantity: 20,
          unitCost: 5000,
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
    await queryInterface.bulkDelete('Products', null, {});
  },
};
