require('dotenv').config() // dotenv

const fs = require("fs")
const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const reqion = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new S3({
    reqion,
    accessKeyId,
    secretAccessKey
})

//upload file function 
function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    //create object
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: `${file.filename}`
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile

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