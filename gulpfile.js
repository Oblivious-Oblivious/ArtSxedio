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

/* Compile the express typescript into a dist folder */
const compileExpress = () => {
    process.chdir(serversource);
    execSync("tsc");
    process.chdir(__dirname);
    return gulp.src(".");
}

/* Copy all server files into exportsource */
const copyServer = () => {
    return gulp.src(serversource + "dist/**/*")
        .pipe(gulp.dest(exportsource + "server/"));
}

const cleanup = () => {
    return gulp.src(clientsource + "dist", { allowEmpty: true })
        .pipe(clean());
}

const compile = gulp.series(compileAngular, copyViews, compileExpress, copyServer, cleanup);
gulp.task("default", compile);
