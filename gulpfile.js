// tsc --p server
// server/export/main.js

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
    execSync("ng build --prod"); /* Make the compilation blocking */

    /* Used as a nop to deal with blocking the 'ng build' command */
    return gulp.src(".");
}

/* Copy all assets into exportsource */
const copyViews = () => {
    process.chdir(__dirname);
    return gulp.src(clientsource + "dist/client/*") /* Grab all javascript files and index.html */
        .pipe(gulp.dest(exportsource + "views/"));
}

/* Copy all server files into exportsource */
const copyServer = () => {
    return gulp.src(serversource + "**/*")
        .pipe(gulp.dest(exportsource + "server/"));
}

const cleanup = () => {
    return gulp.src(clientsource + "dist")
    .pipe(clean());
}

const installServer = () => {
    process.chdir(exportsource + "server/");
    // execSync("npm install");
    process.chdir(__dirname);

    /* Used as a nop */
    return gulp.src(".");
}

const compile = gulp.series(compileAngular, copyViews, copyServer, cleanup, installServer);
gulp.task("default", compile);
