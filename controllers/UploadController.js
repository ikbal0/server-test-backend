module.exports = {
    upload: async (req, res) => {
        try {
            const {image} = req.files
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