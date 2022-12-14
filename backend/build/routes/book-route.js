"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var book_controller_1 = require("../controllers/book-controller");
var router = (0, express_1.Router)();
router.get('/books', book_controller_1.getAllBooks);
exports.default = router;
