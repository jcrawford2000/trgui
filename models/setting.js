const mongoose = require('mongoose');
const Sources = require('./sources');
const Systems = require('./systems');

const GlobalSchema = new mongoose.Schema({
    ver: {type: Number},
    sources: [Sources],
    systems: [Systems],
    defaultMode: { type: String },
    tempDir: {type: String},
    captureDir: {type: String},
    callTimeout: {type: Number},
    uploadServer: {type: String},
    broadcastifyCallsServer: {type: String},
    broadcastifySslVerifyDisable: {type: Boolean},
    consoleLog: {type: Boolean},
    logFile: {type: Boolean},
    logDir: {type: String},
    frequencyFormat: {type: String},
    controlWarnRate: {type: Number},
    controlRetuneLimit: {type: Number},
    statusAsString: {type: Boolean},
    statusServer: {type: String},
    broadcastSignals: {type: Boolean},
    logLevel: {type: String},
    debugRecorder: {type: Boolean},
    debugRecorderPort: {type: Number},
    debugRecorderAddress: {type: String},
    audioStreaming: {type: Boolean},
    newCallFromUpdate: {type: Boolean},
    softVocoder: {type: Boolean}
});

module.exports = Global = mongoose.model('global', GlobalSchema);