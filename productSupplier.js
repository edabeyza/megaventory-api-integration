const axios = require('axios'); // Importing axios module

const API_KEY = "3210f2cdae5ceec2@m149598"; // API key for Megaventory

// ProductSupplier class
class ProductSupplier { 
    constructor(productId, supplierId, isMainSupplier, leadTimeDescription, quantityRangeDescription) {
        this.productId = productId;
        this.supplierId = supplierId;
        this.isMainSupplier = isMainSupplier;
        this.leadTimeDescription = leadTimeDescription;
        this.quantityRangeDescription = quantityRangeDescription;
        
        
    }

    // Method for creating a relationship between a product and a supplier
    static async setProductSupplierRelationship(productId, supplierId, isMainSupplier, leadTimeDescription, quantityRangeDescription) {
        try {
            console.log(`Supplier and product's relationship is being creating...`);
            const response = await axios.post('https://api.megaventory.com/v2017a/ProductSupplier/ProductSupplierUpdate', {
                "APIKEY": API_KEY,
                "mvProductSupplierUpdate": {
                    "ProductID": productId,
                    "ProductSupplierID": supplierId,
                    "IsMainSupplier": isMainSupplier,
                    "ProductSupplierLeadTime": {
                        "LeadTimeDescription": leadTimeDescription
                    },
                    "ProductSupplierQuantityRange": {
                        "QuantityRangeID": "0",
                        "QuantityRangeDescription": quantityRangeDescription
                    }
                },
                "mvRecordAction": "Insert"
            });
            const data = response.data; 
            console.log(`Supplier and product's relationship is being created.`, data);
            return data;
        } catch (error) {
            console.error(`An error has occured during the creation of relationship between client and product:`, error);
            throw new Error(`An error has occured during the creation of relationship between client and product`);
        }
    }
}

ProductSupplier.setProductSupplierRelationship(37, 8, false, "Test Test", "Test"); // To create a relationship between a product and a supplier.