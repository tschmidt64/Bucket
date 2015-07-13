'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StatusBarIOS,
} = React;

StatusBarIOS.setStyle(1);

var BucketNew = require('./App/BucketApp.js');

AppRegistry.registerComponent('BucketNew', () => BucketNew);

