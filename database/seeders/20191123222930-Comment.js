module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Comments',
    [
      {
        userId: 1,
        postId: 2,
        comment: 'This surprises me as much as it does you',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        postId: 1,
        comment: 'Your mama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Comments', null, {})
};

// database/seeds/xxxxxxxx-Comment.js