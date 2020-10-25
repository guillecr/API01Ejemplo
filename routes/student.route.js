const { request } = require("express");
const Student = require("../model/Student");

const express = require('express');
const app = express();
const studentRoutes = express.Router();

let estudiante = require('../model/Student.js');

studentRoutes.route('/nuevo').post((req,res,next) => {
    estudiante.create(req.query, (error, data) =>{
        console.log(req.query);
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
});

studentRoutes.route('/').get((req,res,next) => {
    estudiante.find((error, data) =>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
});

module.exports = studentRoutes;