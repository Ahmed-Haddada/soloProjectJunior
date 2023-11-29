module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reference: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return Product;
};
