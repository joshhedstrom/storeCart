const connection = require('../config/connection.js');

const orm = {
	create: (table, item, cb)=>{
		let queryString = 'INSERT INTO ' + table + ' SET ?;';
		connection.query(queryString, item, (err, res)=>{
			if (err) return console.log(err);
			cb(res);
		})
	},
	read: (table, cb)=>{
		let queryString = 'SELECT * FROM ' + table +' ;'
		connection.query(queryString, (err, res)=>{
			if (err) return console.log(err);
			cb(res);
		})
	},
	update: (table, quantity, item, cb)=>{
		let queryString = 'UPDATE ' + table + ' SET ? WHERE ?;'
		connection.query(queryString, [{quantity}, {item}], (err, res)=>{
			if (err) return console.log(err);
			cb(res);
		})
	},
	delete: (table, id, cb)=>{
		let queryString = 'DELETE FROM ' + table + ' WHERE ?;'
		connection.query(queryString, {id: id}, (err, res)=>{
			if (err) return console.log(err);
			cb(res);
		})
	},
}

module.exports = orm;