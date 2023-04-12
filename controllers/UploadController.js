const path = require('path')
const sharp = require('sharp')
const Images = require('../models/image')
const Cart = require('../models/cart')
const Order = require('../models/order')

module.exports = {
    upload: async (req, res) => {
        try {
            const {image} = req.files
            // const allowType = ['image/jpeg', 'image/png']
            // if (allowType.find(type => type == image.mimetype)) throw 'File type not support'

            const naming = require('crypto').randomBytes(8).toString('hex') + '.jpeg'
            const pathDirectory500 = path.join(path.dirname(require.main.filename), '/public/') + naming
            const pathDirectory1000 = path.join(path.dirname(require.main.filename), '/public/1000px/') + naming
            await sharp(image.data).resize(500, 500).toFile(pathDirectory500)
            await sharp(image.data).resize(1000, 1000).toFile(pathDirectory1000)
            const images = new Images({
                name: naming,
            });
            const savedImages = await images.save()
            return res.status(200).json({
                status: true,
                message: 'Upload success',
                data: {
                    imageUrl:"https://server-image.up.railway.app/public/" + naming,
                    file: savedImages
                }
            })
            // console.log(req.files)
            // return res.status(200).json({
            //     status: true,
            //     message: 'Upload success',
            //     data: {
            //         file: req.body
            //     }
            // })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error
            })
        }
    },
    cart: async (req, res) => {
        try {
            const body = req.body
            const cart = new Cart({
                product_name: body.name,
                icon: body.icon,
                price: body.price,
                qty: body.qty,
                total: body.total,
                type: body.type
            });
            const savedCart = await cart.save()
            return res.status(200).json({
                status: true,
                message: 'Post success',
                data: savedCart
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error
            })
        }
    },
    order: async (req, res) => {
        try {
            const body = req.body
            const order = new Order({
                ItemData: body.ItemData,
                status: body.status,
                total_order: body.total_order
            })
            
            const savedOrder = await order.save()
            Cart.deleteMany({}).then(() => {
                console.log('data delete')
            }).catch(err => {
                console.log(err)
            })
            return res.status(200).json({
                status: true,
                message: 'Post success',
                data: savedOrder
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error
            })
        }
    }
}