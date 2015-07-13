'use strict'

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ListView,
} = React;

var BucketExploreElement = require('./BucketExploreElement')


class BucketExploreView extends React.Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = { dataSource: this.ds.cloneWithRows(events) }
    this._renderRow = this._renderRow.bind(this)
  }

  _renderRow(rowData) {
    return (
      <BucketExploreElement
        stle={styles.listView}
        title={rowData.title}
        img={rowData.img}
        navigator={this.props.navigator}/>
    )
  }
  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom:49}}
          navigator={this.props.navigator} />
    );
  }
}

var styles = StyleSheet.create({
  listView: {
    alignItems: 'stretch'
  }
});





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



module.exports = BucketExploreView