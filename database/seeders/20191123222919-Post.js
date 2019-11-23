module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Posts', 
    [
      {
        userId: 1,
        title: 'ghis ith a fake',
        content: 'Nulla molis molestie lorem. Quisque ut eral Cuabus von succubi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Once upon a midnight',
        content: 'Dreary, as I pondered weak and weary upon my door there came a tapping',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Posts', null, {}),
};

// database/seeds/xxxxxxxx-Post.js