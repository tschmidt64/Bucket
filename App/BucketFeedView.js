'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;


class BucketFeedView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.innerText}> FEED VIEW </Text>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  innerText: {
    color: 'white',
    fontSize: 50
  }
});

module.exports = BucketFeedView;