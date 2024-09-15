const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    Temperatura:{
        type: String,
        required : true
    },
    Humedad:{
        type: String,
        required : true
    },
    Nivel_del_Gas:{
        type: String,
        required : true
    },
    Distancia:{
        type: String,
        required : true
    }
},{ timestamps: true });

module.exports = mongoose.model('Data',dataSchema);
