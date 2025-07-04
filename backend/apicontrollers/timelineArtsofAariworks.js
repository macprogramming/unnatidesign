const express = require('express');
const topicscategory = require('../models/topicscategory');
const router = express.Router()

// get timeline arts of Aari work api
router.get('/', async (req, res) => {
    try{
        const timelineArts = await topicscategory.find();
        return res.status(200).json({
            status: true,
            data : timelineArts
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            status: false,
            message: 'Failed to fetch'
        })
    }
});

module.exports = router;