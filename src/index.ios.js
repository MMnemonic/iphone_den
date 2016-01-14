import React from 'react-native';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  PixelRatio,
} = React;

import Dimensions from 'Dimensions';
var {width, height} = Dimensions.get('window');

import ScreenNavigator from './ScreenNavigator.js';
import SearchScreen from './SearchScreen.js';
import SavedScreen from './SavedScreen.js';
import TabBarButton from './components/TabBarButton.js';
import globalVariables from './globalVariables.js';

var Den = React.createClass({

  getInitialState() {
    return {
      tab: 'search',
    };
  },

  render() {
    var screenElement;

    if (this.state.tab == 'saved') screenElement = (<ScreenNavigator title='Saved' component={SavedScreen} key='saved' />);
    else screenElement = (<ScreenNavigator title='Search' component={SearchScreen} key='search' />);

    return (
      <View style={styles.app}>
        {screenElement}
        <View style={styles.tabbar}>
          <TabBarButton tab='search' label='Homes' selected={this.state.tab} onChange={this.handleSelect} />
          <TabBarButton tab='saved' label='Saved' selected={this.state.tab} onChange={this.handleSelect} />
        </View>
      </View>
    );
  },


  handleSelect(tab) {
    this.setState({
      tab,
    });
  },
});

var styles = StyleSheet.create({
  app: { width, height },

  tabbar: {
    width,
    height: 49,
    shadowColor: 'black',
     shadowOffset: { height: -2, width: 0 },
     shadowOpacity: 0.05,
     shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('Den', () => Den);