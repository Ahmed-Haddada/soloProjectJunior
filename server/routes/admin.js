const adminController = require("../controllers/admin_Controller.js");
const router = require("express").Router();
router.post("/login", adminController.login);
router.post("/products", adminController.addProduct);
router.get("/products", adminController.getAllProducts);
// router.get("/products/:search", adminController.findProduct);
router.put("/products/:id", adminController.updateProduct);
router.delete("/products/:id", adminController.deleteProduct);
module.exports = router;
