import React, { useState } from 'react';
import { View, TextInput, ToastAndroid,TouchableOpacity, Text, Image, StyleSheet } from 'react-native';


const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const handleLogin = async () => {
    try {
        await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then(res => res.json())
        .then((res) => {
            if(res.token){
                navigation.navigate('Tab');
            }
            else
            {
                ToastAndroid.show('Auth Failed', ToastAndroid.SHORT);
            }
        });    
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Icon.png')} style={styles.icon} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    backgroundColor: '#EDEDED',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
