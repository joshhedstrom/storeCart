const express = require('express');
const router = express.Router();

const store = require('../models/cart.js');

router.post('/store', (req, res)=>{
	//create
})

router.post('/cart', (req, res)=>{
	//create
})


router.get('/', (req, res)=>{
		res.render("index");
	// store.read( (data)=>{
	// 	// console.log(data)
	// });
	// store.read((data)=>{

	// })
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