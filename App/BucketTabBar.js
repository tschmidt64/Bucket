'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} = React;

var BucketExploreNavigator = require('./BucketExploreNavigator')
var BucketFeedNavigator = require('./BucketFeedNavigator')

class BucketTabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'exploreTab',
      presses: 0,
    }
  }

  render() {
    return (
      <TabBarIOS
        barTintColor='#000000'
        tintColor='#FFFFFF'>
        <TabBarIOS.Item
          systemIcon='downloads'
          selected={this.state.selectedTab === 'exploreTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'exploreTab',
            });
          }} >
          <View style={styles.tabContent}>
            <BucketExploreNavigator/>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === 'feedTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'feedTab',
            });
          }}>
          <View style={styles.tabContent}>
            <BucketFeedNavigator/>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },

});

module.exports = BucketTabBar;
