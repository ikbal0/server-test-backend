const express = require('express');
const UploadController = require('../controllers/UploadController');
const router = express.Router();
const Image = require('../models/image')

router.get('/', async (req, res) => {
    try {
        return res.status(200).send({
            message: 'success',
            data: {
                route: 'create'
            }
        })
    } catch (err) {
        res.json({message: err})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const images = await Image.findOne({_id:id}).exec()
        return res.status(200).send({
            message: 'image',
            data: {
                image: images
            }
        })
    } catch (err) {
        res.json({message: err})
    }
})

router.post('/', UploadController.upload)
router.post('/cart', UploadController.cart)

module.exports = router;