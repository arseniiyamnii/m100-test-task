const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('stream', function () {
    // Endless stream mode
    return watch('src/*.js', { ignoreInitial: false })
        .pipe(babel({
            plugins: ['@babel/plugin-transform-react-jsx']
        }))
        .pipe(gulp.dest('js'))
    //.pipe(gulp.dest('js'));
});



gulp.task('js', () =>
    gulp.src('src/*.js')
    .pipe(babel({
        plugins: ['@babel/plugin-transform-react-jsx']
    }))
    .pipe(gulp.dest('js'))
);
