'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;


class BucketExploreView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <View>
    <View style={styles.container}>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.innerText}> EXPLORE VIEW </Text>
    </View>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 0.5,
    paddingTop: 64,
  },
  bottom: {
    flex: 0.5
  },
  innerText: {
    color: 'white',
    fontSize: 50
  }
});

module.exports = BucketExploreView;