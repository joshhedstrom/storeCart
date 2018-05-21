const orm = require('../config/orm.js');
// let cb = function (res) {
// 	console.log(res)
// }

const store = {
    create: (table, name, price, quantity, cb) => {
    	orm.create(table, name, price, quantity, (res)=>{
    		// cb(res);
    	});
    },
    read: (table, cb) => {
    	orm.read(table, (res)=>{
    		console.log(res)
    	});
    },

    update: (table, stock, item, cb) => {
    	orm.update(table, stock, item, (res)=>{
    		// cb(res);
    	});
    },

    delete: (table, id, cb) => {
    	orm.delete(table, id, (res)=>{
    		// cb(res);
    	});
    }

}

module.exports = store;