const router = require("express").Router();

const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middleware/multer");

router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank",uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);


router.get("/item", adminController.viewItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id",uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

router.get("/booking", adminController.viewBooking);

module.exports = router;
