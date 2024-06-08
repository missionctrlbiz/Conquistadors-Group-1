const express = require('express');
const Product = require('../schema/productSchema');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create product (protected route)
router.post('/create', protect, async (req, res) => {
    const { name, description, price, category, stockQuantity } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            category,
            stockQuantity,
        });

        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;