const path = require('path')
const sharp = require('sharp')
const Images = require('../models/image')

module.exports = {
    upload: async (req, res) => {
        try {
            const {image} = req.files
            const allowType = ['image/jpeg', 'image/png']
            if (allowType.find(type => type == image.mimetype)) throw 'File type not support'

            const naming = require('crypto').randomBytes(8).toString('hex') + '.jpg'
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
                    file: savedImages
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