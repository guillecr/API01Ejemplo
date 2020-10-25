const { request } = require("express");

const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

let estudiante = new Esquema(
    {
        nombre:{
            type:String
        },
        asignatura:{
            type:Array
        },
        fechanacimiento:{
            type:String
        }
    },
    {
        collation:'students'
    }
);

module.exports = mongoose.model('Student',estudiante)