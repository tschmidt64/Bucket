'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

var BucketFeedView = require('./BucketFeedView.js')

class BucketFeedTab extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavigatorIOS
        barTintColor='black'
        titleTextColor='rgba(255, 0, 0, 0.6)'
        initialRoute={{
          title: 'Feed',
          component: BucketFeedView,
        }}
      />
    );
  }
}

module.exports = BucketFeedTab;
