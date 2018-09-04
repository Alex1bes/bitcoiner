'use strict';

const babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    image = require('gulp-image'),
    prefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    strip = require('gulp-strip-comments'),
    uglify = require('gulp-uglify'),
    async = require('async'),
    watch = require('gulp-watch');

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

var folders = {
    src: 'src/',
    dist: './assets/'
}

var path = {
    build: {
        html: '',
        js: folders.dist + 'js/',
        css: folders.dist + 'css/',
        images: './images/',
        fonts: folders.dist + 'fonts/'
    },
    src: {
        html: folders.src + '*.html',
        js: folders.src + 'js/*.js',
        css: folders.src + 'styles/app.scss',
        images: './images/**/*.*',
        fonts:  [
            'node_modules/font-awesome-sass/assets/fonts/**/**.woff',
            'node_modules/font-awesome-sass/assets/fonts/**/**.woff2',
            folders.src + 'fonts/**/**.woff',
            folders.src + 'fonts/**/**.woff2',
        ]
    },
    watch: {
        html: folders.src + '**/*.html',
        js: folders.src + 'js/**/*.js',
        css: folders.src + 'styles/**/*.scss'
    },
    clean: [folders.dist + 'js', folders.dist + 'css'],
    node: 'node_modules'
};

gulp.task('browser-sync', ['styles:build', 'js:build', 'html:build'], function() {

    browserSync.init({
        server: "./"
    });
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(rigger())
        .pipe(strip())
        .pipe(sourcemaps.init()) 
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('styles:build', function () {
    gulp.src(path.src.css) 
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [path.src.css],
            outputStyle: 'compressed',
            sourceMap: false,
            errLogToConsole: true
        }))
        .on('error', swallowError)
        .pipe(prefixer())
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images:build', function (cb) {
    gulp.src(path.src.images)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest(path.build.images));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
})

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean', function (cb) {
    async.parallel(path.clean.map(function(dir) {
        return function(done) {
            console.log('cleaning: ' + dir);
            rimraf(dir + '/*', done);
        }
    }), cb);
});

gulp.task('build', [
    'fonts:build',
    'js:build',
    'html:build',
    'styles:build'
]);

gulp.task('default', ['build', 'browser-sync'], function () {
    gulp.watch(path.watch.css, ['styles:build']);
    gulp.watch(path.watch.js, ['js:build']);
    gulp.watch(path.watch.html, ['html:build']);
});