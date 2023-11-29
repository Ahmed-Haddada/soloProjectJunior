const userController = require("../controllers/user_Controller");
const router = require("express").Router();
router.post("/register", userController.register);

router.post("/login", userController.login);
router.get("/getAll", userController.getAllUser);

module.exports = router;
