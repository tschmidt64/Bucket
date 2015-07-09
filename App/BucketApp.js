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
    return (
      <View style={styles.container}>
        <BucketTabBar/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = BucketApp