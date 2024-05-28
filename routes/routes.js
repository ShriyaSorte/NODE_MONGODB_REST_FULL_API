const express = require('express');
const Model = require('../model/model');
const mongoose = require('mongoose');
const EmployeeModel = require('../model/employee');

const router = express.Router();

router.post('/post',async(req,res)=>{
    // res.send('data from post');
    console.log(req.body);
    const data = new Model({
        student_name: req.body.student_name,
        student_age: req.body.student_age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/getAll',async(req,res)=>{
    res.send('get all data');
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/updateById:id',(req,res)=>{
    res.send(req.params.id);
})

router.delete('/deleteById:id',(req,res)=>{
    res.send(req.params.id);
})


router.post('/addEmployee',(req,res)=>{
    const empData = new EmployeeModel({
        employeeName:req.body.employeeName,
        DateOfBirth:req.body.DateOfBirth,
        email:req.body.email,
        password:req.body.password,
        salary:req.body.salary
    });
    try {
        const empSave = empData.save();
        res.status(200).json(empSave);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/getAllEmployee',async(req,res)=>{
    try {
        const data = await EmployeeModel.find();
        res.json(data);
        console.log(data.map(emp=> emp.employeeName));
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/deleteById:_id', async(req,res) => {
    // res.send('Delete by ID API');
    try {
        const id = req.params.id;
        const data = await EmployeeModel.findByIdAndDelete(id);
        res.send(`Data with ${data.employeeName} is deleted...`)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

router.patch('/updateById:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        // const options = {new: true};
        console.log(updatedData);
        const result = await EmployeeModel.findByIdAndUpdate(id, updatedData);
        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;