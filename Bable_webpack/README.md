# Gulp + Babel + SystWebpackemJS
As per the other repo's this is using Gulp + Babel to transpile ES6 into ES5 and to ensure that will work with other components loaded via bower or npm.

This repo is using Webpack only as a module loader ignoring the other functionality that it provides.

## How to use it
You need to configure the Webpack config file to tell webpack what it is you want to do and the file to output.

When Gulp is executed it webpack will create a single file which contains all of the code needed and this file is then referenced in the page, no further configuration is required