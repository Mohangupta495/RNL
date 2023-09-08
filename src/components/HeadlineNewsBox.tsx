import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import OpenUrlButton from '../small-components/OpenUrlButton';

interface NewsItem {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

interface Props {
  data: NewsItem[];
  navigation: any;
}

const NewsBox: React.FC<Props> = ({ data, navigation }) => { // Pass navigation prop
  const renderItem = ({ item }: { item: NewsItem }) => (
    <View style={styles.container}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            urlToOpen: item.url, // Pass the URL to the Details screen
          });
        }}
      />
      {/* <OpenUrlButton urlToOpen={item.url}/> */}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Add shadow
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default NewsBox;
