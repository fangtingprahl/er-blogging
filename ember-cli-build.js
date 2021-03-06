/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

  app.import('bower_components/moment/moment.js');

  // file upload test
  app.import('bower_components/blueimp-file-upload/js/cors/jquery.postmessage-transport.js');
  app.import('bower_components/blueimp-file-upload/js/cors/jquery.postmessage-transport.js');
  app.import('bower_components/blueimp-file-upload/js/cors/jquery.xdr-transport.js');
  app.import('bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js');
  app.import('bower_components/blueimp-file-upload/js/jquery.fileupload.js');
  app.import('bower_components/blueimp-file-upload/js/jquery.fileupload-process.js');
  app.import('bower_components/blueimp-file-upload/js/jquery.fileupload-image.js');
  app.import('bower_components/components-font-awesome/css/font-awesome.css');
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.svg', {destDir:'fonts'});
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.eot', {destDir:'fonts'});
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.ttf', {destDir:'fonts'});
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'fonts'});
  app.import('bower_components/components-font-awesome/fonts/FontAwesome.otf', {destDir: 'fonts'});

  app.import('vendor/gmaps.js');

  return app.toTree();
};
