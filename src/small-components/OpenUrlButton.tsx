import { Component } from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
  interface Props{
    urlToOpen:string;
  }
  export class OpenUrlButton extends Component <Props>{
    handleClick = () => {
        Linking.openURL(this.props.urlToOpen);
        Linking.canOpenURL(this.props.urlToOpen).then(supported => {
          if (supported) {
            
          } else {
            console.log("Don't know how to open URI: " + this.props.urlToOpen);
          }
        });
      };
    render() {
        const {urlToOpen}=this.props;
        return (
            <TouchableOpacity onPress={this.handleClick}> 
              <View style={styles.button}>
                <Text style={styles.text}>{urlToOpen}</Text>
              </View>              
            </TouchableOpacity>
          );
    }
  }
  
  const styles=StyleSheet.create({
    button:{},
    text:{}
  })
  export default OpenUrlButton
  