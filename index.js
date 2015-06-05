/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-content-for-demo',

  contentFor: function(type, config){
    if (type === 'head'){
      console.log('CONFIG = ' + config);
      return '<link href="http://cdnjs.head.css" rel="stylesheet" type="text/css" />';

    } else if (type === 'head-footer'){

      return '<link href="http://cdnjs.head-footer.css" rel="stylesheet" type="text/css" />';

    } else if (type === 'body'){

      return '<div>this is body content-for content';

    } else if (type === 'body-footer'){

      return '<span>footer content (such as copyright, etc) goes here</span>';

    }
  }
};
