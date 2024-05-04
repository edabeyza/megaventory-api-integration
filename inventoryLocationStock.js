const axios = require('axios'); // Importing axios module

const API_KEY = '3210f2cdae5ceec2@m149598'; // API key for Megaventory

// ProductStock class
class ProductStock { 
    constructor(productId, locationId, quantity, unitCost) {
        this.productId = productId;
        this.locationId = locationId;
        this.quantity = quantity;
        this.unitCost = unitCost;

    }
    
    // Method for updating the stock of a product
    static async updateProductStock(productId, locationId, quantity, unitCost) { 
        try {
            console.log(`Product stock is being updated...`);
            const response = await axios.post('https://api.megaventory.com/v2017a/InventoryLocationStock/ProductStockUpdate', {
                "APIKEY": API_KEY,
                "mvProductStockUpdateList": {
                    "ProductID": productId,
                    "InventoryLocationID": locationId,
                    "ProductQuantity": quantity,
                    "ProductUnitCost": unitCost
                }
            });
            const data = response.data; // Processing incoming response
            console.log(`Product stock has updated successfully.`, data);
            return data;
        } catch (error) {
            console.error(`An error has occured during product stock updating:`, error);
            throw new Error(`An error has occured during product stock updating`);
        }
    }
}

ProductStock.updateProductStock(38, 1, 5, 49.99); // To update the stock of a product to 5 units in a location.
ProductStock.updateProductStock(37, 2, 5, 49.99); // To update the stock of a product to 5 units in a location.