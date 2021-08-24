/**

## Full Stack Tools

# Front End
1) HTML
2) Bulma
3) Angular

# Back End
4) Express

# Database
5) MongoDB (NoSQL)
6) Postgres (SQL)
2
# Desktop
7) Electron

# Mobile
8) Ionic
9) Meteor
10) React-Native

# Machine Learning
11) Tensorflow

# Unit Testing
12) Jasmine Framework, Karma Task Runner **(Angular)** **(Ionic)**
13) Mocha Testing Environment, Chai Assertion Library **(Express)** **(Meteor)**
14) Spectron Framework **(Electron)**
15) Jest Framework, Enzyme **(React-Native)** **(Tensorflow)**

# Version Control
16) GitHub

# Continuous Integration
17) Jetkins
18) Circle CI
19) Travis CI

# Deployment System
20) Heroku

# Optional Tools
**I)** Sass
**II)** Typescript
**III)** Gulp
**IV)** Webpack
**V)** Docker


 */

/* Dependencies */
const gulp = require("gulp");
const clean = require("gulp-clean");
const execSync = require("child_process").execSync;

/* Directories */
const clientsource = "client/";
const exportsource = "export/";
const serversource = "server/";

/* Build Angular front for production end and extract */
const compileAngular = () => {
    process.chdir(clientsource);
    // execSync("npm install"); /* Install dependencies */
    execSync("ng build --configuration production"); /* Make the compilation blocking */

    /* Used as a nop to deal with blocking the 'ng build' command */
    return gulp.src(".");
};

/* Copy all assets into exportsource */
const copyViews = () => {
    process.chdir(__dirname);
    return gulp
        .src(
            clientsource + "dist/client/*"
        ) /* Grab all javascript files and index.html */
        .pipe(gulp.dest(exportsource + "views/"));
};

/* Compile the express typescript into a dist folder */
// const compileExpress = () => {
//     process.chdir(serversource);
//     execSync("tsc");
//     process.chdir(__dirname);
//     return gulp.src(".");
// }

/* Copy all server files into exportsource */
const copyServer = () => {
    // return gulp.src(serversource + "dist/**/*")
    return gulp
        .src(serversource + "/**/*")
        .pipe(gulp.dest(exportsource + "server/"));
};

const cleanup = () => {
    return gulp
        .src(clientsource + "dist", { allowEmpty: true })
        .pipe(clean());
};

const compile = gulp.series(
    compileAngular,
    copyViews,
    copyServer,
    cleanup
);
gulp.task("default", compile);
