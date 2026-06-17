const express = require("express");
const router = express.Router();
const { evaluateStartup } = require("../controllers/aiController");

// The API endpoint: POST /api/ai/evaluate
router.post("/evaluate", evaluateStartup);

module.exports = router;