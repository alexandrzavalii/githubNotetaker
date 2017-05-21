import React, { Component } from 'react';
// import Badge from './Badge.js';
// import Separator from './Helpers/Separator.js';
import PropTypes from 'prop-types';
// import Web_View from './Helpers/WebView.js';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  WebView,
  TouchableHighlight
} from 'react-native';

export default class Web_View extends Component{
  render(){
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}} />
      </View>
    )
  }
}

Web_View.propTypes = {
  url: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});
