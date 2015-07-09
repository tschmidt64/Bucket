'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

class RandomView2 extends React.Component {
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
    backgroundColor: 'green',
    top: 64,
    marginBottom: 114,
  },
  two: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'blue',
  },
});

module.exports = RandomView2;