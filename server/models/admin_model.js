module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("admin", {
    admin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  
  
  { timestamps: false }
  );

  return Admin;
};
