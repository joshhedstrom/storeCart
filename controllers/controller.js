const express = require('express');
const router = express.Router();

const store = require('../models/store.js');

router.post('/store/new', (req, res) => {
    store.create('products', req.body, (data) => {
        res.json(data);
    });
})

router.get('/', (req, res) => {
    store.read('products', (data) => {
        let items = {
            products: data
        };
        res.render('index.handlebars', items)
    });
})

router.put('/store/:id', (req, res) => {
    let id = parseInt(req.body.id);
    //update
    store.read('products', (data) => {
        let result = data.forEach((elem, i) => {
            if (elem.id === id) {
            	console.log('====>>', elem)
            }
        })
        console.log(result)
            updatedQuantity = result.stock_quantity--;
            console.log(updatedQuantity)
            return updatedQuantity;
    })
    // store.update('products', newQuantity, (data) => {
        // console.log('data==>', data)
    // })
})

router.delete('/store/:id', (req, res) => {
    //delete
})

module.exports = router;