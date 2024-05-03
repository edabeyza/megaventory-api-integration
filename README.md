# E-Commerce Application Megaventory Integration

This project enables the integration of an e-commerce application with the Megaventory API. Using your Megaventory account, you can manage products, customers, suppliers, and inventory locations.

## Get Started

1. Create a Megaventory account and obtain your API key. You can sign up for Megaventory here.
2. Retrieve your API key from your profile and add it to your application.

## Usage

1. Open the app.js file and replace the API key with your own.
2. Use the npm install command to install the required packages.
3. Use the desired API calls to add or update products, customers, suppliers, and inventory locations.
4. Run the application to interact with the API.

## Example Usage

To add a product:
`addProduct('1112256', 'Nike Shoes', 99.99, 44.99)
.then(response => console.log('Product added:', response))
.catch(error => console.error('Error:', error));`
