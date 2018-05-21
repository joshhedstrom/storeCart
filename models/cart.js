const orm = require('../config/orm.js');

const store = {
    create: (table, name, price, quantity, cb) => {
    	orm.create(table, name, price, quantity, (res)=>{
    		// cb(res);
    	});
    },
    read: (table) => {
    	orm.read(table, (res)=>{
    		// cb(res);
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