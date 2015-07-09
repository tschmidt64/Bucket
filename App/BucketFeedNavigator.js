'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

var BucketFeedView = require('./BucketFeedView')

class BucketFeedNavigator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.navContainer}>
        <NavigatorIOS
          barTintColor='#89E5FF'
          titleTextColor='rgba(0, 0, 0, 0.8)'
          style={styles.nav}
          initialRoute={{
            title: 'Feed',
            component: BucketFeedView,
          }} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  nav: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
  },
});

module.exports = BucketFeedNavigator;