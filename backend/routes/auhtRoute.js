const express = require("express");
const { login, signup } = require("../Controllers/authController");
const { findQuestion, insertQuestion } = require("../Controllers/questionController");
const {submitTest} = require("../Controllers/submitTest");
const authMiddleware = require("../Middlewares/validateToken"); // Import the middleware

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/questions", findQuestion);
router.post("/questions", insertQuestion);
router.post('/submitTest', authMiddleware, submitTest); // Apply authMiddleware here

module.exports = router;
