const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');


gulp.task('watcher', function() {
  gulp.watch('sass/*.scss', gulp.series('sass'));
  gulp.watch('src/*.js', gulp.series('js'));
});


gulp.task('js', () =>
    gulp.src('src/*.js')
    .pipe(babel({
        plugins: ['@babel/plugin-transform-react-jsx']
    }))
    .pipe(gulp.dest('js'))
);

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

