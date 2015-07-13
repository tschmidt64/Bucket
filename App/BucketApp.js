'use strict';

var React = require('react-native')
var {
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} = React;

var BucketTabBar = require('./BucketTabBar')

class BucketApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return ( <BucketTabBar style={styles.container}/> );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = BucketApp