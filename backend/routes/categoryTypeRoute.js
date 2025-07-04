const express = require('express');
const categorytype = require('../models/categorytype');
const router = express.Router();

// getAll
router.get('/', async (req, res) => {
    try{
        const getAllData = await categorytype.find();
        return res.status(200).json({
            status: true,
            data: getAllData
        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            status: false,
            message: 'Feild to fetch...'
        });
    }
});

// Add record
router.post('/create', async (req, res) => {
    const { user_id, title, description,isActive, createdBy, updatedBy } = req.body;
    try{
        const isExitsData = await categorytype.findOne({ title });
        if(isExitsData) {
            return res.status(400).json({
                status: false,
                message: 'Categoty Type already exits.!'
            })
        }
        const newCategoryType = new categorytype({
            user_id,
            title,
            description,
            createdBy,
            updatedBy
        });
        await newCategoryType.save();
        return res.status(200).json({
            status: true,
            message: 'Categoty Type added successfully!',
            data: newCategoryType
        })
    }catch(err) {
        console.log(err);
    }
});

// Update Record
router.put('/edit/:id', async (req, res) => {
    const { user_id, title, description, isActive, createdBy, updatedBy } = req.body;
    try{
        const updateData = await categorytype.findByIdAndUpdate(
            req.params.auto_id,
            { user_id, title, description,isActive, createdBy, updatedBy },
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
        console.log(err);
        res.status(500).json({
            status: false,
            message: 'Server Error',
            error: err.message
        })
    }
})