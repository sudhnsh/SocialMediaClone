import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PostDetailsScreen = () => {
  const postId = 1; 
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    fetch(`https://dummyjson.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleAddComment = () => {
    const comment = {
      body: newComment,
      postId: postId,
      userId: 5,
    };

    fetch('https://dummyjson.com/comments/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewComment('');
      });
  };

  return (
    <View style={styles.container}>
      {post && (
        <View>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={(text) => setNewComment(text)}
      />
      <Button title="Add Comment" onPress={handleAddComment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    marginBottom: 10,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PostDetailsScreen;
