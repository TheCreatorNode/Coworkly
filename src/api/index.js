const userRoutes = require("./User/user.routes");

const router = require("express").Router();

router.use("/users", userRoutes);

module.exports = router;
