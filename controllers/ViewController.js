const Images = require('../models/image')

module.exports = {
    view: async (req, res) => {
        try {
            const viewImages = await Images.find({})
            return res.status(200).json({
                status: true,
                data: {
                    file: viewImages
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