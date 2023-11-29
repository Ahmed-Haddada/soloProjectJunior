const db = require("../models/index.js");
const Admin = db.admin;
const Product = db.products;
console.log(Admin);

module.exports.login = async (req, res) => {
  const { admin, password } = req.body;

  try {
    const checkAdmin = await Admin.findOne({
      where: { admin: admin, password: password },
    });

    if (!checkAdmin) {
      res.status(400).send("This admin doesn't exist.");
    } else {
      res.status(200).send("Connected.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.addProduct = async (req, res) => {
  const { title, description, reference, price, img } = req.body;

  console.log(req.body);

  try {
    const addProduct = await Product.create({
      title,
      reference,
      price,
      description,
      img,
    });

    if (addProduct) res.status(200).json(addProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send(allProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};
// exports.findProduct = async (req, res) => {
//   const search = req.params;
//   try {
//     const oneProduct = await Product.findAll({
//       where:{
//         title:search
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     console.log(search)
//     res.status(200).send(oneProduct);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, img, reference, description, price } = req.body;
  req.body;

  try {
    const oneProduct = await Product.findOne({
      where: { id: id },
    });

    if (oneProduct) {
      await oneProduct.update({ title, img, reference, description, price });

      res.status(200).send(oneProduct);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const oneProduct = await Product.findOne({
      where: { id: id },
    });

    if (oneProduct) {
      await Product.destroy({
        where: { id: id },
      });

      res.status(200).send("deleted");
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
};
