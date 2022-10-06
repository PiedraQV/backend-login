const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './db/products.sqlite'
	},
	useNullAsDefault: true
}

const mongodb = {
  conexStr: "mongodb+srv://User:2t17C0PDVc7dWuI2@cluster0.j9v3p2d.mongodb.net/test",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 5000,
  },
};


module.exports = { optionsSQLite3, mongodb };