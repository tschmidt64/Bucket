'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

var BucketExploreView = require('./BucketExploreView')

class BucketExploreTab extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavigatorIOS
        barTintColor='black'
        titleTextColor='rgba(255, 0, 0, 0.6)'
        initialRoute={{
          title: 'Explore',
          component: BucketExploreView,
        }}
      />
    );
  }
}

module.exports = BucketExploreTab;
