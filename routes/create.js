const express = require('express');
const UploadController = require('../controllers/UploadController');
const router = express.Router();

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

router.post('/', UploadController.upload)

module.exports = router;