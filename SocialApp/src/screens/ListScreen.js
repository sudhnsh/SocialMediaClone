import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image,Pressable, StyleSheet, Alert, ToastAndroid } from 'react-native';

const ListScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [comments,setComments] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const handlePostDetails= () => {
        navigation.navigate('PostDetails');
  }

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handlePostDetails()}>
      <View style={styles.postContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.postImage} source={{ uri: 'https://image.dummyjson.com/150' }} />
        </View>
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postBody}>{item.body}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  postContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1, // Ensures the image maintains a square aspect ratio
    borderRadius: 5,
  },
  postContent: {
    flex: 1,
    marginLeft: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postBody: {
    fontSize: 14,
  },
});

export default ListScreen;
