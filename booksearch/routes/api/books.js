const router = require("express").Router();
const booksController = require("../../controller/bookController");

router.route("/")
    .get(booksController.findAll);

router.route("/:id")

module.exports = router;