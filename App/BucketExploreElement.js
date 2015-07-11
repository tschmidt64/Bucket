'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

class BucketExploreElement extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.item}>
        <Image
          source={{uri: this.props.img}}
          style={styles.photo} >
          <Text style={styles.text}>{this.props.title}</Text>
        </Image>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  photo: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
});

module.exports = BucketExploreElement;