const mongoose = require('mongoose');

const SourceSchema = new mongoose.Schema({
    shortName: {type: String},
    center: {type: Number},
    rate: {type: Number},
    error: {type: Number},
    gain: {type: Number},
    digitalRecorders: {type: Number},
    analogRecorders: {type: Number},
    driver: {type: String},
    device: {type: String},
    pps: {type: Number},
    agc: {type: Boolean},
    gainSettings: {type: String},
    ifGain: {type: Number},
    bbGain: {type: Number},
    mixGain: {type: Number},
    lnaGain: {type: Number},
    vga1Gain: {type: Number},
    vga2Gain: {type: Number},
    antenna: {type: String},
    enabled: {type: Boolean}
});

module.exports = SourceSchema;