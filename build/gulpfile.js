var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true}),

    plumberErrorHandler = {
        errorHandler: plugins.notify.onError({
            title: 'Gulp',
            message: 'Error: <%= error.message %>'
        })
    };

// configure path variable
var path = {
    build: { // build path
        js: 'css/js',
        css: 'css'

    },
    src: { // source path
        js: 'js/main.js',
        style: 'sass/style.scss'
    },
    watch: { // watching files path
        js: 'js/**/*.js',
        style: 'sass/**/*.scss',
        html: './**/*.html'
    }
};

//compile js
// gulp.task('js:build', function () {
//     gulp.src(path.src.js)
//         .pipe(plugins.plumber(plumberErrorHandler))
//         .pipe(plugins.uglify())
//         .pipe(plugins.rename({suffix: '.min'}))
//         .pipe(gulp.dest(path.build.js))
//         .pipe(plugins.notify({message: 'Scripts build complete'}))
//         .pipe(plugins.livereload());
// });

// compile sass styles
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.plumber(plumberErrorHandler))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer({browsers: ['last 2 versions']}))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(plugins.notify({message: 'Styles build complete'}))
        .pipe(plugins.livereload());
});

// build task
gulp.task('build', [
    // 'js:build',
    'style:build'
]);

// watcher
gulp.task('watch', function () {
    plugins.livereload.listen();
    gulp.watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    // gulp.watch([path.watch.js], function (event, cb) {
    //     gulp.start('js:build');
    // });

    gulp.watch([path.watch.html]).on('change', function (e) {
        plugins.livereload.changed(e.path);
    });
});

// default task
gulp.task('default', ['build', 'watch']);