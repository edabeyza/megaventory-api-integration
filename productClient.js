const axios = require('axios'); // Importing axios module

const API_KEY = "3210f2cdae5ceec2@m149598"; // API key for Megaventory

// ProductClient class
class ProductClient { 
    constructor(productId, clientId, clientPrice, clientSKU, clientDescription) {
        this.productId = productId;
        this.clientId = clientId;
        this.clientPrice = clientPrice;
        this.clientSKU = clientSKU;
        this.clientDescription = clientDescription;
    }

    // Method for creating a relationship between a product and a client
    static async setProductClientRelationship(productId, clientId, clientPrice, clientSKU, clientDescription) {
        try {
            console.log(`Client and product's relationship is being creating...`);
            const response = await axios.post('https://api.megaventory.com/v2017a/ProductClient/ProductClientUpdate', {
                "APIKEY": API_KEY,
                "mvProductClientUpdate": {
                    "ProductID": productId,
                    "ProductClientID": clientId,
                    "ProductClientPrice": clientPrice,
                    "ProductClientSKU": clientSKU,
                    "ProductClientDescription": clientDescription
                },
                "mvRecordAction": "Insert"
            });
            const data = response.data; // Processing incoming response
            console.log(`Client and product's relationship is being created.`, data);
            return data;
        } catch (error) {
            console.error(`An error has occured during the creation of relationship between client and product:`, error);
            throw new Error(`An error has occured during the creation of relationship between client and product`);
        }
    }
}

ProductClient.setProductClientRelationship(38, 7, 99.99, 1112256, "Nike shoes"); // To create a relationship between a product and a client.
