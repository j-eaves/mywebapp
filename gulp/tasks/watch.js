var gulp = require('gulp');
var config = require('../config');
var watch = require('gulp-watch');

var mapping = [
  {path: 'images'     , tasks: ['images']},
  {path: 'scripts'    , tasks: ['scripts', 'lint', 'test']},
  {path: 'test'       , tasks: ['test', 'lint']},
  {path: 'styles'     , tasks: ['styles']},
  {path: 'templates'  , tasks: ['templates']},
];

gulp.task('watch', ['default-dev'], function(done) {
  mapping.forEach(function(map) {
    watch(config.paths[map.path], function() {
      gulp.start(map.tasks, done);
    });
  });
});
