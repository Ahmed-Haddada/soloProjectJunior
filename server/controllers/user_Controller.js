const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const users = db.user;
const joi = require("joi");
const jwt = require("jsonwebtoken");

const privateKey = "first try with jsonwebtoken & joi & bcrypt";

const SchemaValidation = joi.object({
  fullName: joi.string().min(3).max(25).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  phone: joi.string().required(),
});

exports.register = async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  try {
    const validation = SchemaValidation.validate({
      fullName,
      email,
      password,
      phone,
    });

    if (validation.error) {
      return res.status(400).send(validation.error.details[0].message);
    }

    const existingUser = await users.findAndCountAll({ where: { email } });

    if (existingUser.count !== 0) {
      return res.status(409).send("This email is already in use.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await users.create({
      fullName,
      password: hashPassword,
      email,
      phone,
    });

    res.status(201).send("Registration successful.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(400).send("Invalid email and password");
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password);

    if (checkPassword) {
      const token = jwt.sign(
        { id: existingUser.id, fullName: existingUser.fullName },
        privateKey
      );
      res.status(200).json(token);
    } else {
      res.status(400).send("Invalid email and password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const allUser = await users.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "password", "email"] },
    });
    res.status(200).send(allUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
