'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} = React;

var BucketFeedView = require('./BucketFeedView')
var NavigationBar = require('react-native-navbar')

class BucketExploreElement extends React.Component {
  constructor(props) {
    super(props);
    this._onPressedListItem = this._onPressedListItem.bind(this)
  }

  _onPressedListItem() {
    this.props.navigator.push({
      component: BucketFeedView,
      navigationBar: <NavigationBar
        title='Feed'
        backgroundColor='#000000'
        buttonsColor='rgba(0, 0, 0, 0.8)'/>
    });
  }

  render() {
    return (
      <TouchableHighlight
      style={styles.item}
      activeOpacity='.9'
      underlayColor='green'
      onPress={this._onPressedListItem} >
        <Image
          source={{uri: this.props.img}}
          style={styles.photo} >
          <Text style={styles.text}>{this.props.title}</Text>
        </Image>
      </TouchableHighlight>
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