const express = require('express');
const { mapMaterials, updateDescription } = require('../controllers/mappingController');

const router = express.Router();

/**
 * @swagger
 * /map-materials:
 *   post:
 *     summary: Map materials to FCT Master Format
 *     tags: [Mapping]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomType:
 *                 type: string
 *                 example: Bathroom
 *               materials:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["marble floor", "chrome fixtures"]
 *     responses:
 *       200:
 *         description: Successfully mapped materials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mappedItems:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MappedItem'
 *       400:
 *         description: Invalid input
 */
router.post('/map-materials', mapMaterials);

/**
 * @swagger
 * /update-description:
 *   put:
 *     summary: Update item description
 *     tags: [Mapping]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: "09 68 13"
 *               newDescription:
 *                 type: string
 *                 example: "Updated Marble Finish"
 *     responses:
 *       200:
 *         description: Description updated successfully
 *       404:
 *         description: Code not found
 */
router.put('/update-description', updateDescription);


/**
 * @swagger
 * components:
 *   schemas:
 *     MappedItem:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           example: "09 68 13"
 *         description:
 *           type: string
 *           example: "Marble Floor Finish"
 *         unit:
 *           type: string
 *           example: "SF"
 *         estimatedUnitCost:
 *           type: number
 *           example: 14.50
 */

module.exports = router;