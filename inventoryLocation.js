const axios = require('axios'); // Importing axios module

const API_KEY = '3210f2cdae5ceec2@m149598'; // API key for Megaventory

// InventoryLocation class
class InventoryLocation {   
    constructor(abbreviation, name, address) {
        this.abbreviation = abbreviation;
        this.name = name;
        this.address = address;
    }

    // Method for inserting an inventory location
    static async insertInventoryLocation(abbreviation, name, address) { 
        try {
            console.log(`"${name}" named Inventory Location is being added...`);
            const response = await axios.post('https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate', {
                "APIKEY": API_KEY,
                "mvInventoryLocation": {
                    "InventoryLocationAbbreviation": abbreviation,
                    "InventoryLocationName": name,
                    "InventoryLocationAddress": address
                },
                "mvRecordAction": "Insert"
            });
            const data = response.data; // Processing incoming response
            console.log(`"${name}" named Inventory Location added successfully.`, data);
            return data;
        } catch (error) {
            console.error(`"${name}" An error occurred while adding the Inventory Location:`, error);
            throw new Error(`"${name}" An error occurred while adding the Inventory Location`);
        }
    }
}

module.exports = InventoryLocation; // Exporting the InventoryLocation class

InventoryLocation.insertInventoryLocation('Test', 'Test Project Location', 'Example 20, Athen'); // Adding an inventory location named Test
