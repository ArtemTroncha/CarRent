const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const { getFileStream , uploadS3} = require('../s3')

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


router.post('/', uploadS3.single('image'), async (req,res) => {
    try {
        const file = req.file
        console.log(file)
        //uploadS3.single(file)
        //const result = await uploadS3(file)
        //console.log(result)
        const description = req.body.description
        //res.send({imagePath: `${result.Key}`})
        return res.status(200).send({message: "Image uploaded"})
    } catch (error) {
        res.status(404).json(error)
    }
})


module.exports = router;