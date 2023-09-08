import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebViewComp from '../components/WebViewComp';
import { withNavigation } from 'react-navigation';
import { windowHeight, windowWidth } from '../utils/WindowDimension';

// Define the route params type
type RootStackParamList = {
  // Define your screen names and their param types here
  About: { itemId: string; otherParam: string };
};

interface Props {
  route: any;
}

export class DetailsScreen extends Component<Props> {
  render() {
    const { urlToOpen } = this.props.route.params;
    return (
      <View style={styles.container}>
        <WebViewComp urlToOpen={urlToOpen} />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:"red",
    height:windowHeight,
    width:windowWidth
  }
})
export default withNavigation(DetailsScreen);
