require('dotenv').config() // dotenv

const fs = require("fs")

const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

const bucketName = process.env.AWS_BUCKET_NAME
const reqion = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new aws.S3({
    accessKeyId,
    secretAccessKey
})

//upload file without adding image to server 
exports.uploadS3 = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'car-rent-storage',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })

//download file function 

function getFileStream(fileKey) {
    try {
        const downloadParams = {
            Key: fileKey,
            Bucket: bucketName
        }
        
        return s3.getObject(downloadParams).createReadStream()
    } catch (error) {
        console.log(error)
    }
}
exports.getFileStream = getFileStream