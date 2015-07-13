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
    this.renderScene = this.renderScene.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <BucketExploreView navigator={navigator} route={route} />
      </View>
    );
  }

  handleNext() {
    alert('Next button click handler');
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        sceneStyle={this.scene}
        initialRoute={{
          component: BucketExploreView,
          navigationBar: <NavigationBar
            title='Explore'
            onNext={this.handleNext}
          />
        }}
      />
    );
  }
}


var styles = StyleSheet.create({
  scene: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  navigator: {
    flex: 1,
  },
});

module.exports = BucketExploreNavigator;