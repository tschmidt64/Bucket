'use strict';

var React = require('react-native')
var {
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} = React;

var BucketTabBar = require('./BucketTabBar')
var BucketExploreView = require('./BucketExploreView')
var BucketFeedView = require('./BucketFeedView')

class BucketApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          barTintColor='black'
          titleTextColor='rgba(255, 0, 0, 0.6)'
          initialRoute={{
            title: 'Explore',
            component: BucketFeedView,
          }}
        />
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