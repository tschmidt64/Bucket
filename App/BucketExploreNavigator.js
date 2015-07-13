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
      <View>
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
        sceneStyle={styles.scene}
        initialRoute={{
          component: BucketExploreView,
          navigationBar: <NavigationBar
            title='Explore'
            onNext={this.handleNext}
            style={styles.navigator}
          />
        }}
      />
    );
  }
}


var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

module.exports = BucketExploreNavigator;