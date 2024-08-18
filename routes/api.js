const express = require("express");
const router = express.Router();
const moment = require("moment");

// Existing routes...

/**
 * @swagger
 * /api:
 *   get:
 *     description: API Home
 *     responses:
 *       200:
 *         description: Returns the home message
 */
router.get("/", (req, res) => {
  res.send("API Home");
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               name:
 *                 type: string
 */
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

/**
 * @swagger
 * /api/date-difference:
 *   get:
 *     description: Get the difference in hours from now to 1-12-2024
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: object
 *           properties:
 *             daysDifference:
 *               type: number
 */
router.get("/date-difference", (req, res) => {
  const futureDate = moment("2024-01-12");
  const currentDate = moment();
  const daysDifference = Math.abs(futureDate.diff(currentDate, "days"));

  res.json({ daysDifference });
});

module.exports = router;
