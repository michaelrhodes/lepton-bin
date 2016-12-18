var os = require('os')
var path = require('path')
var build = require('bin-build')

var HEAD = '7e9ef877c35714d785328962ad875e629a8dd795' 

build()
  .src('https://github.com/dropbox/lepton/archive/' + HEAD + '.tar.gz')
  .cmd('cmake -DCMAKE_BUILD_TYPE=release -DCMAKE_INSTALL_PREFIX=/ .')
  .cmd('make' + (os.cpus().length > 1 ? ' -j8' : ''))
	.cmd('make DESTDIR=' + __dirname + ' install')
  .run(function (err) {
    if (err) return console.error(err)
  })
