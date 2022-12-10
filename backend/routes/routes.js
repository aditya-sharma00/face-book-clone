const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(request,response)=>{
    const signedUpUser = new signupTemplateCopy({
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
// router.get('/signin')
module.exports = router