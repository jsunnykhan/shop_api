const express = require('express');

const router = express.Router();


router.get('/' , (req , res ,next )=>{
    res.status(200).json({
        message : 'Handleing GET request to / products'
    });
});


router.post('/' , (req , res ,next )=>{
    res.status(201).json({
        message : 'Handleing POST request to / products'
    });
});


router.get('/:productId' , (req , res , next) => {
    const id = req.params.productId;
    res.status(200).json({
        message : 'This is your Targetting GET product $id',
        id : id
    });
});


router.patch('/:productId' , (req , res , next) => {
    const id = req.params.productId;
    res.status(201).json({
        message : 'This is your Targetting Patch product $id',
        id : id
    });
});


router.delete('/:productId' , (req , res , next) => {
    const id = req.params.productId;
    res.status(200).json({
        message : 'This is your Targetting DELETE product',
    });
});

module.exports = router;