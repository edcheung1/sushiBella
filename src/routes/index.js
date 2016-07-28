module.exports = function(app) {
	app.route('/')
		.get( (req, res) => {
			res.sendFile(process.cwd() + '/index.html');
		})

}