const express = require('express');
const HomeBanner = require('../models/homebanner');

const router = express.Router();

// GET method
router.get('/', async (req, res) => {
    try{
        const allHomebanners = await HomeBanner.find();
        return res.status(200).json({
            status: true,
            data: allHomebanners
        })
    }catch(err) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Failed to fetch',
        });
    }
});

// Add Record
router.post('/create', async (req,res) => {
    const { banner_id,title,description,url,image,isActive,createdBy,updatedBy } = req.body;
    try{
        const exitingHomebanner = await HomeBanner.findOne({ title });
        if(exitingHomebanner) {
            return res.status(400).json({
                status: false,
                message: 'Home banner already exits.!'
            })
        }
        const newHomeBanner = new HomeBanner({
            banner_id,
            title,
            description,
            url,
            image,
            isActive,
            createdBy,
            updatedBy
        });
        await newHomeBanner.save();
        return res.status(201).json({
            status: true,
            message: 'Home banner added successfully!',
            data: newHomeBanner
        })
    }catch(err) {
        console.log(err)
    }
});

// Update Record

router.put('/edit/:id', async (req, res) => {
    const { title,description,url,image,isActive,updatedBy } = req.body;
    try{
        const updateData = await HomeBanner.findByIdAndUpdate(
            req.params.banner_id,
            { title,description,url,image,isActive,updatedBy },
            { new : true }
        );

        if(!updateData){
            return res.status(404).json({
                status: false,
                message: 'Home banner not found!'
            });
        }
        res.json({
            status: true,
            message: 'Home banner updated successfully!',
            data: updateData
        })
    }catch(err) {
        res.status(500).json({
            status: false,
            message: 'Server Error',
            error: err.message
        })
    }
});

// Delete Record

router.delete('/delete/:id', async (req, res) => {
    try{
        const deleteRecord = await HomeBanner.findByIdAndDelete(req.params.banner_id);
        if(!deleteRecord) {
            return res.status(404).json({
                status: false,
                message: 'Home banner not found!'
            })
        }
        res.json({
            status: this.trace,
            message: 'Home banner deleted successfully',
            deleted
        })
    }catch(err) {
        res.status(500).json({
            status: false,
            message: 'Server Error',
            error: err.message
        })
    }
})

module.exports = router;