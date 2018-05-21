const express = require('express');
const router = express.Router();

const store = require('../models/cart.js');

const cb = function (res) {
	console.log('callback function: ', res)
}

router.post('/store', (req, res)=>{
	//create
})

router.post('/cart', (req, res)=>{
	//create
})


router.get('/', (req, res)=>{
	store.read('products', cb, (data)=>{
		console.log('data1: ', data)
		let hbsObject = {
			items: data,
		}
		console.log(hbsObject)
	});

	store.read('cart', cb, (data)=>{
		res.render('index.handlebars');
		console.log('data2: ', data)
		let hbsObject = {
			items: data,
		}
		console.log(hbsObject)
	});
		res.render('index.handlebars');
})


router.put('/store/:id', (req, res)=>{
	//update
})

router.put('/cart/:id', (req, res)=>{
	//update
})


router.delete('/store/:id', (req, res)=>{
	//delete
})

router.delete('/cart/:id', (req, res)=>{
	//delete
})

module.exports = router;