const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Olá');
    res.send();
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    console.log(id);
    res.send(`ID: ${id}`);

})

router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`PUT ID: ${req.params.id}`);
})


router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.send(`DELETE ID: ${req.params.id}`);
})

module.exports = router;