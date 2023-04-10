const express = require('express');
const EditControllers = require('../controllers/EditControllers');
const router = express.Router();
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const Image = require('../models/image');
const order = require('../models/order');

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const images = await Image.findOne({_id:id}).exec()
        return res.status(200).json({
            status: true,
            data: {
                file: images
            }
        })
    } catch (err) {
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const viewImage = await Image.findOne({_id:id}).exec()

        console.log(viewImage)

        Image.deleteOne({_id: id}, function (err) {
            if (err) return handleError(err)
        })
    
        const path = "./public/1000px/" + viewImage.name
    
        fs.unlink(path, async (err) => {
            if(err) return console.log(err)
        })
    
        const path2 = "./public/" + viewImage.name
    
        fs.unlink(path2, async (err) => {
            if(err) return console.log(err)
        })
    
        return res.status(200).json({
            status: true,
            message: 'Delete success' + viewImage.name,
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    try {

        const {image} = req.files
        // const allowType = ['image/jpeg', 'image/png']
        // if (allowType.find(type => type == image.mimetype)) throw 'File type not support'
        const viewImage = await Image.findOne({_id:id}).exec()

        // const naming = require('crypto').randomBytes(8).toString('hex') + '.jpeg'
        const naming = viewImage.name
        const pathDirectory500 = path.join(path.dirname(require.main.filename), '/public/') + naming
        const pathDirectory1000 = path.join(path.dirname(require.main.filename), '/public/1000px/') + naming
        await sharp(image.data).resize(500, 500).toFile(pathDirectory500)
        await sharp(image.data).resize(1000, 1000).toFile(pathDirectory1000)
        
        Object.assign(viewImage, {
            name: naming,
        });

        await viewImage.save();

        return res.status(200).json({
            status: true,
            message: 'Upload success',
            data: {
                imageById: viewImage
            }
        })

        // const {image} = req.files
        // console.log(image)
        // // const allowType = ['image/jpeg', 'image/png']
        // // if (allowType.find(type => type == image.mimetype)) throw 'File type not support'

        // const naming = require('crypto').randomBytes(8).toString('hex') + '.jpeg'
        // console.log("name: ", naming)
        // const pathDirectory500 = path.join(path.dirname(require.main.filename), '/public/') + naming
        // const pathDirectory1000 = path.join(path.dirname(require.main.filename), '/public/1000px/') + naming
        // await sharp(image.data).resize(500, 500).toFile(pathDirectory500)
        // await sharp(image.data).resize(1000, 1000).toFile(pathDirectory1000)

        // const images = await Image.findOne({_id:id}).exec()
        // Object.assign(images, {
        //     name: naming,
        // });
        // await images.save();

        // const path = "../public/1000px/" + images.name

        // fs.unlink(path, async (err) => {
        //     if(err) throw err
        // })

        // const path2 = "../public/" + images.name

        // fs.unlink(path2, async (err) => {
        //     if(err) throw err
        // })

        // return res.status(200).json({
        //     status: true,
        //     message: 'Edit success' + images.name,
        //     // image: image
        // })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }
})

router.patch('/order/:id', async (req, res) => {
    const id = req.params.id
    try {
        const orderUp = await order.findOne({_id:id}).exec()
        Object.assign(orderUp, {
            status: 'sended',
        });
        await orderUp.save();
        
        return res.status(200).json({
            status: true,
            message: 'Edit success' + id,
            // image: image
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }
})

module.exports = router;