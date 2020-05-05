const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});


// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
     // Folder with files to minify
     return gulp.src(['./css/*.css', '!./css/grid.min.css', '!./css/style.min.css'])
     //The method pipe() allow you to chain multiple tasks together 
     //I execute the task to minify the files
     .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cleanCSS())
    //I define the destination of the minified files with the method dest
    .pipe(gulp.dest('css'));
});
