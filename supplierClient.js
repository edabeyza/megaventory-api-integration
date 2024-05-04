const axios = require('axios'); // Importing axios module

const API_KEY = '3210f2cdae5ceec2@m149598'; // API key for Megaventory

// SupplierClient class
class SupplierClient { 
    constructor(name, email, shippingAddress, phone) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.phone = phone;
    }

// Method for inserting a supplier
    static async insertSupplier(name, email, shippingAddress, phone) { 
        try {
            console.log(`"${name}" named supplier is being added...`);
            const response = await axios.post('https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate', {
                "APIKEY": API_KEY,
                "mvSupplierClient": {
                    "SupplierClientID": 7,
                    "SupplierClientType": "Supplier",
                    "SupplierClientName": name,
                    "SupplierClientEmail": email,
                    "SupplierClientShippingAddress1": shippingAddress,
                    "SupplierClientPhone1": phone
                },
                "mvRecordAction": "Insert"
            });
            const data = response.data; // Processing incoming response
            console.log(`"${name}" named supplier has been added successfully.`, data);
            return data;
        } catch (error) {
            console.error(`"${name}" An error occurred while adding the supplier :`, error);
            throw new Error(`"${name}" An error occurred while adding the supplier `);
        }
    }
    
    // Method for inserting a client
    static async  insertClient(name, email, shippingAddress, phone) {
        try {
            const response = await axios.post('https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate', {
                "APIKEY": API_KEY,
                "mvSupplierClient": {
                    "SupplierClientID": 8,
                    "SupplierClientType": "Client",
                    "SupplierClientName": name,
                    "SupplierClientEmail": email,
                    "SupplierClientShippingAddress1": shippingAddress,
                    "SupplierClientPhone1": phone
                },
                "mvRecordAction": "Insert"
            });
            const data = response.data; // Processing incoming response
            console.log(`"${name}" named client has been added successfully.`, data);
            return data;
        } catch (error) {
            console.error(`"${name}" An error occurred while adding the client:`, error);
            throw new Error(`"${name}" An error occurred while adding the client `);
        }
    }
}

module.exports = SupplierClient; // Exporting the SupplierClient class


SupplierClient.insertSupplier('odysseus', 'odysseus@exampletest.com', 'Example 10, Athens', '1235698988'); // Adding a supplier named Odysseus
SupplierClient.insertClient('babis', 'babis@exampletest.com', 'Example 8, Athens', '1235698967'); // Adding a client named Babis
