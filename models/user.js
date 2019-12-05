'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    jobTitle: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Project, {
      foreignKey: 'userId'
    })
  };
  return User;
};