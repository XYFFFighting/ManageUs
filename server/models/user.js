module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    householdId: DataTypes.INTEGER
  }, {});

  User.associate = (models) => {
    User.belongsTo(models.Household);
  };

  return User;
};
