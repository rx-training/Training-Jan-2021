const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});


gulp.task('js',function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modeles/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});


gulp.task('server',['sass'],function(){
    browserSync.init({
        server:"./src"
    });

    gulp.watch(['node_modules/botstrap/scss/bootstrap.scss','src/scss/*.scss'],['scss']);
    gulp.watch("src/*.html").on('change',browserSync.reload);
});


gulp.task('fonts',function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("src/fonts"));
});


gulp.task('fa',function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("src/css"));
});

gulp.task('default',['js','server' ,'fa','fonts']);

