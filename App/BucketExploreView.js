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
    <View style={styles.one}>
        
      <View style={styles.two}>
      <Text> hello world </Text>
      </View>

    </View> 
    );
  }
}

var styles = StyleSheet.create({
  one: {
    flex: 1,
    backgroundColor: 'orange',
    top: 64,
    paddingBottom: 113,
  },
  two: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
});

module.exports = BucketExploreView;