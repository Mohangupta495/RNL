import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { windowHeight } from '../utils/WindowDimension'
import { Article, NewsResponse, fetchTopBusinessHeadlines } from '../api';
import NewsBox from '../components/HeadlineNewsBox';

interface HomeProps{
  navigation:any;
}
interface HomeState{
  businessHeadlinesNewsData:NewsResponse | null;
  loading:boolean;
}
export class HomeScreen extends Component <HomeProps,HomeState>{
  constructor(props:HomeProps) {
    super(props);
    this.state={
      businessHeadlinesNewsData:null,
      loading:false,
    }
  }
  componentDidMount(): void {
      this.getBusinessHeadlines();
  }
    getBusinessHeadlines=async()=> {
      this.setState({loading:true});
    try {
      const newsData = await fetchTopBusinessHeadlines();
      this.setState({businessHeadlinesNewsData:newsData})
      console.log(newsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    this.setState({loading:false});
  };  
  render() {
    const {loading,businessHeadlinesNewsData} = this.state;
    const {navigation}=this.props;
    return (
      <View style={styles.container}>
        {loading &&<Text>Loading.....</Text>}
        {!loading && businessHeadlinesNewsData===null && <Text>Something went wrong please try again later..</Text> }
        {!loading && businessHeadlinesNewsData!==null && <NewsBox data={businessHeadlinesNewsData.articles} navigation={navigation}/>}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    height:windowHeight,
    backgroundColor:"red",
  }
})

export default HomeScreen