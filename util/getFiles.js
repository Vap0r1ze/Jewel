const reload = require('require-reload')(require)

module.exports = function (path) {
	let fileNames = require('fs').readdirSync(path)
		.filter(file => file.endsWith('.js') && file.length > 3)
	let files = fileNames.map(file => {
		let fpath = require('path').join(path, file)
		let ex = reload(`../${fpath}`)
		return {
			name: file.slice(0, -3),
			exports: ex
		}
	})
	return files
}
