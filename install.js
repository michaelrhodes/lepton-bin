var os = require('os')
var path = require('path')
var build = require('bin-build')
var pkg = require('./package.json')

build()
  .src('https://github.com/dropbox/lepton/archive/' + pkg.version + '.tar.gz')
  .cmd('cmake -DCMAKE_BUILD_TYPE=release -DCMAKE_INSTALL_PREFIX=/ .')
  .cmd('make -j' + os.cpus().length)
	.cmd('make DESTDIR=' + __dirname + ' install')
  .run(function (err) {
    if (err) return console.error(err)
  })
