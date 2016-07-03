System.config({
    map: {
        codes : 'codes.js'
    },
    packages: {
        js: {
            format: 'register',
            defaultExtension: 'js'
        },
    },
    meta: {
        'js/*': {format: 'cjs'}
    }
});
