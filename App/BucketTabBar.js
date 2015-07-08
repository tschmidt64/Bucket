'use strict';

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} = React;

var BucketExploreView = require('./BucketExploreView')
var BucketFeedView = require('./BucketFeedView')

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
        barTintColor='black'
        tintColor='rgba(255, 0, 0, 0.7)'>
        <TabBarIOS.Item
          systemIcon='downloads'
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'exploreTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'exploreTab',
            });
          }}>
          <View style={styles.tabContent}>
            <BucketExploreView/>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'feedTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'feedTab',
            });
          }}>
          <View style={styles.tabContent}>
            <BucketFeedView/>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
});

module.exports = BucketTabBar;
