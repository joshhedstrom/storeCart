const orm = require('../config/orm.js');

const store = {
    create: (table, item, cb) => {
    	orm.create(table, item, (res)=>{
    		cb(res);
    	});
    },
    read: (table, cb) => {
    	orm.read(table, (res)=>{
    		cb(res);
    	});
    },

    update: (table, quantity, item, cb) => {
    	orm.update(table, quantity, item, (res)=>{
    		cb(res);
    	});
    },

    delete: (table, id, cb) => {
    	orm.delete(table, id, (res)=>{
    		cb(res);
    	});
    }
}

module.exports = store;