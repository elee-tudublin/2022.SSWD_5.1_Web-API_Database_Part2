// This is the product controller

// Import router package
const router = require('express').Router();

// Import the product service
const productService = require("../services/productService.js");

// This endpoint will return all product data from the database
router.get('/', async(req, res) => {

    try {
        // Get result from the product service
        const result = await productService.getProducts();

        // Send a  response
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);   
    }
});


// export
module.exports = router;
