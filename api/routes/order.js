const express = require('express');

const router = express.Router();


router.get('/' , (req , res ,next )=>{
    res.status(200).json({
        message : 'Handleing GET request to /order'
    });
});


router.post('/' , (req , res ,next )=>{
    res.status(201).json({
        message : 'Handleing POST request to /order'
    });
});


router.get('/:orderId' , (req , res , next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : 'This is your Targetting GET order ',
        id : id
    });
});


router.patch('/:orderId' , (req , res , next) => {
    const id = req.params.orderId;
    res.status(201).json({
        message : 'This is your Targetting Patch order ',
        id : id
    });
});


router.delete('/:orderId' , (req , res , next) => {
    
    res.status(200).json({
        message : 'This is your Targetting DELETE order',
    });
});

module.exports = router;