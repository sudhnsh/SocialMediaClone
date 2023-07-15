import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handlePost = () => {
    const postData = {
      title: title,
      body: body,
      userId: 5,
      // Add other post data as needed
    };

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('Error posting the data:', error));

    // Reset the form after posting the data
    setTitle('');
    setBody('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={styles.input}
          placeholder="Body"
          value={body}
          onChangeText={setBody}
          multiline
        />

        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
  postButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#EDEDED',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default CreatePostScreen;
