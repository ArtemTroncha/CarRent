const express = require('express')
const router = express.Router()

const multer = require('multer')

const { getFileStream , uploadS3} = require('../s3')

router.get('/:key', async(req,res)=> {
    try {
        const key = req.params.key
        console.log(key)
        const readStream = getFileStream(key)
        console.log(readStream)
        readStream.pipe(res)

    } catch (error) {
        res.status(404).json(error)
    }
})


router.post('/', uploadS3.array('image',8), async (req,res,next) => {
    res.send({
        message: "Uploaded!",
        urls: req.files.map(function(file) {
            return {url: file.location};
        })
    });
})


module.exports = router;