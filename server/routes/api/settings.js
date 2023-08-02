/*
    This is the config api route (/api/settings) handler
*/

const express = require('express');
const router = express.Router();
//Reference our Model
const GlobalSettings = require('../../models/setting');

//Just a test route!
router.get('/test', (req, res) => { res.jaon({ test: 'success'})});

//Get all Configs
router.get('/', (req, res) => {
    GlobalSettings.find()
       .then(settings => res.json(settings))
       .catch(err => res.status(404).json({ notfound: 'Settings Not Found'}));
});

//Get a setting by ID
router.get('/:id', (req, res) => {
    GlobalSettings.findById(req.params.id)
       .then(setting => res.json(setting))
       .catch(err => res.status(404).json({ notfound: 'Setting Not Found'}));
});

//POST to add a setting
router.post('/', (req, res) => {
    GlobalSettings.create(req.body)
       .then(setting => res.json({msg: 'Setting added successfully'}))
       .catch(err => res.status(500).json({error: err}));
});

//PUT to update a setting
router.put('/:id', (req, res) => {
    GlobalSettings.findByIdAndUpdate(req.params.id, req.body)
       .then(setting => res.json({ msg: 'Success'}))
       .catch(err => res.status(500).json("Error updating setting"));
});

//DELETE to remove a setting
router.delete('/:id', (req, res) => {
    GlobalSettings.findByIdAndRemove(req.params.id, req.body)
       .then(setting => res.json({msg: 'Setting entry deleted'}))
       .catch(err => res.status(500).json("Error removing setting"));
});

module.exports = router;
