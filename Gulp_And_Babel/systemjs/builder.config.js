System.config({
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
