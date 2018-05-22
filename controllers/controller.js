const express = require('express');
const router = express.Router();

const store = require('../models/store.js');

router.post('/store/new', (req, res) => {
    //create
    store.create('products', req.body, (data) => {
        res.json(data);
    });
})

router.get('/', (req, res) => {
    //read
    store.read('products', (data) => {
        let items = {
            products: data
        };
        res.render('index.handlebars', items)
    });
})

router.put('/store/:id', (req, res) => {
    //update
    store.read('products', (data) => {
    	console.log(data.id)
        // console.log(data)
        let result = data.forEach((elem, i) => {
        	console.log(elem.id)
            if (elem.id === data.id) {
            	console.log('====>>', elem)
            }
        })
        console.log(result)
            // updatedQuantity = result.stock_quantity--;
            // console.log(updatedQuantity)
            // return updatedQuantity;
    })
    // store.update('products', newQuantity, (data) => {
        // console.log('data==>', data)
    // })
})

router.delete('/store/:id', (req, res) => {
    //delete
})

module.exports = router;