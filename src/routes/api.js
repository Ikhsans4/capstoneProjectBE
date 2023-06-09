const express = require("express");
const router = express.Router();

const UserControllers = require("../App/Http/Controllers/UserControllers"); // import user controller
const AuthControllers = require("../App/Http/Controllers/AuthControllers"); // import auth controller
const plantController = require("../App/Http/Controllers/PlantControllers"); // import plant controller
const BookmarkControllers = require("../App/Http/Controllers/BookmarkControllers"); // import bookmark controller
const AdminControllers = require("../App/Http/Controllers/AdminController"); // import admin controller

// Route for user , registration & authentication
router.get("/", AdminControllers.index);
router.get("/users", UserControllers.getUsers);
router.get("/login", AuthControllers.login);
router.get("/logout", AuthControllers.logout);


router.post("/register", AuthControllers.registration);
router.post("/login", AuthControllers.authentication);
// Route for get data plant

router.get("/plants", plantController.getPlants);
router.get('/plant-list', plantController.listPlant)

router.get("/plants/:id", plantController.getPlantById);

// Route for get Bookmarks
router.post("/bookmarks", BookmarkControllers.addBookmarks);
router.delete("/bookmarks", BookmarkControllers.deleteBookmarks);
router.get("/bookmarks/:userId", BookmarkControllers.getBookmarks);

module.exports = router;
