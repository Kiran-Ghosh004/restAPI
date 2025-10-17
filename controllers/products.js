
const Product = require('../models/Product');

const getAllProducts = async(req, res) => {
    
    const productsData = await Product.find(req.query);
    res.status(200).json({productsData,Length: productsData.length});
}
const getAllProductsTesting = async(req, res) => {
    const productsData = await Product.find(req.query);
    res.status(200).json({
        products: productsData,
        length: productsData.length,
        msg: "get all products testing"
    });
}



module.exports = {getAllProducts, getAllProductsTesting};

