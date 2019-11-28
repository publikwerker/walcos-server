module.exports = (sequelize, DataTypes) => {
  const Fan = sequelize.define('Fan', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {});
  Fan.associate = function(models) {
    // associations can be defined here
  };
  return Fan;
};

// database/models/fan.js