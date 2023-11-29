module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 255],
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  
  { timestamps: false }
  
  );



  return User;
};
