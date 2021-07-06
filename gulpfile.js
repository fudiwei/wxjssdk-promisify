const gulp = require('gulp');
const gulp$babel = require('gulp-babel'),
    gulp$eslint = require('gulp-eslint'),
    gulp$rimraf = require('gulp-rimraf'),
    gulp$strip = require('gulp-strip-debug'),
    gulp$uglify = require('gulp-uglify'),
    gulp$util = require('gulp-util');

gulp.task('clean', () => {
    return gulp
        .src(['dist/**/*.js', 'dist/**/*.js.map'], {
            read: false
        })
        .pipe(gulp$rimraf({
            force: true
        }));
});

gulp.task('eslint', () => {
    return gulp
        .src(['src/**/*.js'])
        .pipe(gulp$eslint())
        .pipe(gulp$eslint.format())
        .pipe(gulp$eslint.failAfterError());
});

gulp.task('dist', gulp.series('clean', () => {
    const babelOptions = {
        presets: [
            [
                '@babel/preset-env', {
                    modules: false
                }
            ]
        ]
    };
    
    return gulp
        .src(['src/**/*.js'])
        .pipe(gulp$strip())
        .pipe(gulp$babel(babelOptions))
        .pipe(gulp$uglify())
        .pipe(gulp.dest('dist'));
}));

gulp.task('default', gulp.series('clean', 'dist'));