import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';

const PRODUCTION = yargs.argv.prod;

export const hello = (done) => {
    console.log(PRODUCTION);
    done();

}

//export default hello;