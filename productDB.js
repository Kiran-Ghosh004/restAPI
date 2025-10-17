require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');
const product = require('./prouducts.json');

const start = async () => {
  try {
    await connectDB(`${process.env.DB_URI}/kiran-api`);
    await Product.create(product);
    console.log("✅ Products added successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
};

start();
