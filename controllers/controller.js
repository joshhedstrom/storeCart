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

    store.read('products', (data) => {
        let result;
        let newData = data.forEach((elem, i) => {
            if (elem.id === id) {
                result = elem;
            }
        })

        let updatedQuantity = result.stock_quantity - 1;
        let cartQuantity = result.cart_quantity + 1;

        store.update('products', {
            stock_quantity: updatedQuantity,
            cart_quantity: cartQuantity,
            in_cart: true,
            
        }, id, (data) => {
            res.json(data)
        })

    })
})

router.delete('/store/:id', (req, res) => {
    //delete
})

module.exports = router;