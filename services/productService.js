// Product service functions

// Import dependencies
// Validation

// DataAccess
const productData = require('../dataAccess/productData');

// Function to get all products
//
async function getProducts() {
    
    // call data access to get all products
    const products = await productData.getProducts();
  
    // return products
    return products;
  }


  
// Module exports
// expose these functions
module.exports = {
    getProducts
};


