# Gulp + Babel + SystemJS
As per the other repo's this is using Gulp + Babel to transpile ES6 into ES5  and to ensure that will work with other components loaded via bower or npm.

This repo uses SystemJS as a module loader to enable the transpiled ES6 to work in the browser

## How to use it
The index.html has a script block inside of it that configures SystemJS telling it:
* where the js is
* the format

To load the module you want you then use the System.import syntax 