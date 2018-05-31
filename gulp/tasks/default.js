var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('default-dev', function(done) {
  sequence(
    'clean',
    ['images', 'templates', 'scripts', 'styles', 'test'],
    done
  );
});

gulp.task('default', function(done) {
  sequence(
    'clean',
    ['images', 'templates', 'scripts', 'styles', 'test'],
    'sourcemaps',
    'revision',
    done
  );
});
