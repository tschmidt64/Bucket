'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator,
} = React;

var NavigationBar = require('react-native-navbar')
var BucketExploreView = require('./BucketExploreView')

class BucketExploreNavigator extends React.Component {
  constructor() {
    super()
    this._renderScene = this._renderScene.bind(this)
  }
  _renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View
      style={styles.navigator}
      navigator={navigator} >
        {navBar}
        <route.component navigator={navigator} route={route} />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        ref='ExploreNavigator'
        renderScene={this._renderScene}
        navigator={this.props.navigator}
        initialRoute={{
          component: BucketExploreView,
          navigationBar: <NavigationBar
            title='Explore'
            titleColor='#FFFFFF'
            backgroundColor='#000000'
            buttonsColor='#FFFFFF'/>
        }}
      />
    );
  }
}


var styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: 'black'
  },
});

module.exports = BucketExploreNavigator;