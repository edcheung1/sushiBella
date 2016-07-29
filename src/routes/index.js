module.exports = function(app) {
	app.route('/')
		.get( (req, res) => {
			res.sendFile(process.cwd() + '/index.html');
		})

	app.route('/*')
		.get( (req, res) => {
			res.sendFile(process.cwd()+ '/src/index.html');
		})
}