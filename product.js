const axios = require('axios'); // Importing axios module

const API_KEY = '3210f2cdae5ceec2@m149598'; // API key for Megaventory

// Product class
class Product { 
    constructor(sku, description, salesPrice, purchasePrice) {
        this.sku = sku;
        this.description = description;
        this.salesPrice = salesPrice;
        this.purchasePrice = purchasePrice;
    }

// Method for inserting a product
    static async insertProduct(sku, description, salesPrice, purchasePrice) { 
        try {
            console.log(`"${description}" named product is being added...`);
            const response = await axios.post('https://api.megaventory.com/v2017a/Product/ProductUpdate', {
                "APIKEY": API_KEY,
                "mvProduct": {
                    "ProductSKU": sku,
                    "ProductDescription": description,
                    "ProductSellingPrice": salesPrice,
                    "ProductPurchasePrice": purchasePrice
                },
                "mvRecordAction": "Insert"
            });
            const data = response.data; // Processing incoming response
            console.log(`"${description}" named product has been added successfully.`, data);
            return data;
        } catch (error) {
            console.error(`"${description}" named product couldn't be added:`, error);
            throw new Error(`"${description}" named product couldn't be added`);
        }
    }
}


module.exports = Product; // Exporting the Product class

Product.insertProduct('1112256', 'Nike shoes', 99.99, 44.99); // Inserting a product named Nike shoes
Product.insertProduct('1112248', 'Adidas shoes', 99.99, 44.99); // Inserting a product named Adidas shoes
