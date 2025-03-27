import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import cached from 'gulp-cached';
import formatHTML from 'gulp-format-html';
import config from '../config.js';

export const pugBuild = () => gulp
  .src(`${config.src.pug}/*.pug`)
  .pipe(plumber())
  .pipe(pug())
  .pipe(formatHTML({
    end_with_newline: true,
    unformatted: ['br'],
  }))
  .pipe(cached('pug'))
  .pipe(gulp.dest('build'));

export const pugWatch = () => {
  gulp.watch(`${config.src.pug}/**/*.pug`, pugBuild);
};
