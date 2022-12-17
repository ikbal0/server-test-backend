const Cart = require('../models/cart')
const Images = require('../models/image')

module.exports = {
    view: async (req, res) => {
        try {
            const viewImages = await Images.find({})
            return res.status(200).json({
                status: true,
                data: {
                    file: viewImages,
                    products: [
                        { "id": 1,  "name": "Raddishes",   "icon": "raddish",    "price": { "USD": 3.26, "NOK": 17.43 }, "type": "vegetable" },
                        { "id": 2,  "name": "Artichokes",  "icon": "artichoke",  "price": { "USD": 9.44, "NOK": 15.82 }, "type": "vegetable" },
                        { "id": 3,  "name": "Broccoli",    "icon": "broccoli",   "price": { "USD": 5.20, "NOK": 16.66 }, "type": "vegetable" },
                        { "id": 5,  "name": "Cabbages",    "icon": "cabbage",    "price": { "USD": 0.95, "NOK": 62.33 }, "type": "vegetable" },
                        { "id": 6,  "name": "Cherries",    "icon": "cherry",     "price": { "USD": 1.04, "NOK": 62.50 }, "type": "fruit"     },
                        { "id": 7,  "name": "Carrots",     "icon": "carrot",     "price": { "USD": 4.82, "NOK": 72.74 }, "type": "vegetable" },
                        { "id": 8,  "name": "Corn",        "icon": "corn",       "price": { "USD": 7.53, "NOK": 99.43 }, "type": "vegetable" },
                        { "id": 9,  "name": "Grapes",      "icon": "grapes",     "price": { "USD": 4.94, "NOK": 88.29 }, "type": "fruit"     },
                        { "id": 10, "name": "Onions",      "icon": "onion",      "price": { "USD": 6.45, "NOK": 69.53 }, "type": "vegetable" },
                        { "id": 11, "name": "Oranges",     "icon": "orange",     "price": { "USD": 9.95, "NOK": 96.53 }, "type": "fruit"     },
                        { "id": 12, "name": "Peas",        "icon": "peas",       "price": { "USD": 2.61, "NOK": 65.74 }, "type": "vegetable" },
                        { "id": 13, "name": "Pineapples",  "icon": "pineapple",  "price": { "USD": 1.62, "NOK": 35.22 }, "type": "fruit"     },
                        { "id": 14, "name": "Steaks",      "icon": "steak",      "price": { "USD": 8.32, "NOK": 83.08 }, "type": "meat"      },
                        { "id": 15, "name": "Watermelons", "icon": "watermelon", "price": { "USD": 5.08, "NOK": 89.69 }, "type": "fruit"     },
                        { "id": 16, "name": "Sausages",    "icon": "sausage",    "price": { "USD": 3.69, "NOK": 26.68 }, "type": "meat"      }
                    ]  
                }
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error
            })
        }
    },
    cart: async (req, res) => {
        try {
            const ViewCarts = await Cart.find({})
            return res.status(200).json({
                status: true,
                data: {
                    ViewCarts,
                    cart: [
                        { "id": 1, "product_name": "Sausages",    "icon": "sausage",  "price": { "USD": 3.69, "NOK": 26.68 },  "total": { "USD": 3.69, "NOK": 26.68 }, "type": "meat", "qty": 2}
                    ]  
                }
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error
            })
        }
    }
}