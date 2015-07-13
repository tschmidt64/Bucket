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
var BucketFeedView = require('./BucketFeedView')

class BucketFeedNavigator extends React.Component {
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
        <BucketFeedView navigator={navigator} route={route} />
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
        initialRoute={{
          component: BucketFeedView,
          navigationBar: <NavigationBar
            title='Feed'
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

module.exports = BucketFeedNavigator;