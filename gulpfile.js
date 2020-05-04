const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done){
 console.log(' Привет, мир !');
 done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

let cleanCSS = require('gulp-clean-css');
// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
     // Folder with files to minify
     return gulp.src('./css/*.css')
     //The method pipe() allow you to chain multiple tasks together 
     //I execute the task to minify the files
    .pipe(cleanCSS())
    //I define the destination of the minified files with the method dest
    .pipe(gulp.dest('css-min'));
});
