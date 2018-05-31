module.exports = {
  production: process.env.NODE_ENV === 'production',

  paths: {
    images: 'app/frontend/images/**/*',
    imagesOutput: 'public/images/',
    nodeModules: './node_modules',
    public: 'public/',

    clean: [
      'public/**/*',
      '!public/robots.txt',
      '!public/*.ico',
      '!public/*.html',       // rails error pages
      '!public/*.png',        // apple icons
      'tmp/tests.js',
      'tmp/tests.js.map',
      'tmp/tests-loader.js'
    ],

    scriptOutput: 'public/javascripts',
    scripts: 'app/frontend/scripts/**/*.js',
    scriptsClean: 'public/**/.{js,map}',
    scriptsBaseDir: 'app/frontend/scripts',
    scriptsMainFiles: 'app/frontend/scripts/*.js',

    styles: 'app/frontend/styles/**/*.scss',
    stylesOutput: 'public/stylesheets/',
    stylesClean: 'public/**/.{css,scss,map}',

    templates: 'app/frontend/templates/**/*.hbs',
    templatesOutput: 'app/frontend/scripts/classmate/templates/',

    
    test: ['test/javascript/**/*.js', 'test/javascript/**/*.html'],
    testFiles: './test/javascript/**/*{test,spec}.js',
    testHelper: './test/javascript/test_helper.js',
    testsLoader: './tmp/tests-loader.js',
    testRunner: './test/javascript/test_runner.html',
    testsBaseDir: 'test/javascript',
    testsOutput: 'tests.js',
    testsOutputDir: './tmp/',
    

    sourcemaps: './public/**/*.{css,js}.map',
    sourcemapsOutput: './public/sm-873884e0-9cf3-457e-bac6-c28632809b68/',
    sourcemapsPrefix: '/javascripts/',

    revision: 'public/**/*.{jpg,svg,gif,png,css,js}',
    revisionManifest: './public/rev-manifest.json',
    revisionReplace: './public/**/*.{css,html,js}'
  }
};
