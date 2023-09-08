import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { windowHeight, windowWidth } from '../utils/WindowDimension';


interface Props{
    urlToOpen:string;
}
interface State{
    isLoading:boolean;
}
export class WebViewComp extends Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state={
            isLoading:true,
    }
}
componentWillUnmount(): void {
    
}
  render() {
    const {urlToOpen}=this.props;
    const {isLoading}=this.state;
  return (
    <View style={styles.container}>
    {isLoading && (
      <ActivityIndicator size="large" color="#000" style={styles.loadingIndicator} />
    )}
    {!isLoading && (
        <WebView
        source={{ uri: urlToOpen }} style={{ flex: 1,height:windowHeight,width:windowWidth }}
        onLoad={() => this.setState({isLoading:true})}
        onLoadEnd={() => this.setState({isLoading:false})}
      />
    )}
  </View>
  )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loadingIndicator: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });

export default WebViewComp;




