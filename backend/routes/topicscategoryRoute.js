const express = require('express');
const TopicsCatrgory = require('../models/topicscategory');

const router = express.Router();

// Get All
router.get('/', async (req, res) => {
    try{
        const allTopicsCategories = await TopicsCatrgory.find();
        return res.status(200).json({
            status: true,
            data: allTopicsCategories
        })
    }catch(err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            message: 'Failed to fetch',
        });
    }
});

// Add new record
router.post('/create', async (req, res) => {
    const {user_id, title, description, icon, createdBy} = req.body;
    try{
        const isExits = await TopicsCatrgory.findOne({ title });
        if(isExits) {
            return res.status(400).json({
                status: false,
                message: 'Data already exits.!',
            })
        }
        const newTopicsCategory = new TopicsCatrgory({
            user_id,
            title,
            description,
            icon,
            createdBy
        });
        await newTopicsCategory.save();
        return res.status(200).json({
            status: true,
            message: 'Data added added successfully!',
            data: newTopicsCategory
        })
    } catch(err) {
        console.log(err)
    }
});

// Update Record
router.put('/edit/:id', async (req, res) => {
    const {user_id, title, description, icon, createdBy} = req.body;
    try{
        const updateData = await TopicsCatrgory.findByIdAndUpdate(
            req.params.id,
            { user_id, title, description, icon, createdBy },
            { new : true }
        );

        if(!updateData){
            return res.status(404).json({
                status: false,
                message: 'Topic category not found!'
            });
        }
        res.json({
            status: true,
            message: 'Topic category updated successfully!',
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
        const deleteRecord = await TopicsCatrgory.findByIdAndDelete(req.params.auto_id);
        if(!deleteRecord) {
            return res.status(404).json({
                status: false,
                message: 'Topic category not found!'
            })
        }
        res.json({
            status: this.trace,
            message: 'Topic category deleted successfully',
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