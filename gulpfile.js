const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass  = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./js/*.js").on('change', browserSync.reload);
    watch("./css/*.css").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./php/*.php").on('change', browserSync.reload);
};


// Task to minify css using package cleanCSs
    function mincss() {
     // Folder with files to minify
     return src(['./css/*.css', '!./css/*.min.css'])
     //The method pipe() allow you to chain multiple tasks together 
     //I execute the task to minify the files
     .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cleanCSS())
    //I define the destination of the minified files with the method dest
    .pipe(dest('css'));
};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};



exports.serve = bs;
