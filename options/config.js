const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './db/products.sqlite'
	},
	useNullAsDefault: true
}

const mongodb = {
  client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'backend'
  },
};


module.exports = { optionsSQLite3, mongodb };