module.exports = {
    upload: async (req, res) => {
        try {
            const {image} = req.files
            const allowType = ['image/jpeg', 'image/png']
            if (allowType.find(type => type == image.mimetype)) throw 'File type not support'

            const naming = require('crypto').randomBytes
            return res.status(200).json({
                status: true,
                message: 'ok'
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error
            })
        }
    }
}