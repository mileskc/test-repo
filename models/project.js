'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    githubUrl: DataTypes.STRING,
    deployedUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Project;
};