const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const { uploadFile , getFileStream } = require('../s3')

router.get('/:key', async(req,res)=> {
    try {
        const key = req.params.key
        console.log(key)
        const readStream = getFileStream(key)

        readStream.pipe(res)

    } catch (error) {
        res.status(404).json(error)
    }
})


router.post('/', upload.single('image'), async (req,res) => {
    const file = req.file
    console.log(file)
    const result = await uploadFile(file)
    console.log(result)
    const description = req.body.description
    res.send({imagePath: `${result.Key}`})
})


module.exports = router;