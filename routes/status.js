const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/status:
 *   get:
 *     description: Get the status of the website
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 */
router.get("/status", (req, res) => {
  const websiteStatus = "maintenance";
  res.json({ status: websiteStatus });
});

module.exports = router;
