'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  ListView
} = React;

var ExploreItem = require('./ExploreItem.js')

var Dimensions = require('Dimensions')

var events = [
  {
    title: 'Surfing',
    img: 'http://under30ceo.com/wp-content/uploads/2010/08/lanzarote-surfing-e1282012957210.jpg'
  },
  {
    title: 'Snowboarding',
    img: 'http://upload.wikimedia.org/wikipedia/commons/6/61/Snowboarding1.jpg'
  },
  {
    title: 'Sailing',
    img: 'http://www.breezincharters.com/images/sail.jpg'
  },
  {
    title: 'Kayaking',
    img: 'http://upload.wikimedia.org/wikipedia/commons/8/86/Whitewater_kayaking_Isere.jpg'
  },
  {
    title: 'Hiking',
    img: 'http://blog.codyapp.com/wp-content/uploads/2012/12/keys_hiking_happiness_beginners_guide.jpg'
  },
  {
    title: 'Music Festivals',
    img: 'http://blogs-images.forbes.com/hughmcintyre/files/2015/03/Music-Festival.jpg'
  },
]

class ExploreView extends React.Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: this.ds.cloneWithRows(events) }
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(row) {
    return (
      <ExploreItem
        title={row.title}
        img={row.img} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          initialListSize='15'
          renderRow={this.renderRow} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = ExploreView;