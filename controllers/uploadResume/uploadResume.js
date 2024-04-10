// const express = require('express')
const multer = require('multer')
// const app = express()
const path = require ('path')
const fs=require ('node:fs')
const { mkdir } = require('fs')

if(!fs.existsSync('./uploadFiles')){
    fs.mkdirSync('./uploadFiles')
}
// const port = 4000
app.set("view engine", "ejs")

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        console.log(file ,"file")
        cb(null, 'uploadFiles')

    },
    filename: async(res, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }


})

const upload = multer({ storage: storage })

app.get('/upload', async (req, res) => {
    res.render('upload')

})

app.post('/upload', upload.single('uploadFiles'), (req, res) => {
    res.send('image upload sucessfully')
})

