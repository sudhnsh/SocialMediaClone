import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/1`);
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.log('Error fetching user details:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{ uri: userDetails.image }} />
        <Text style={styles.profileName}>{`${userDetails.firstName} ${userDetails.lastName}`}</Text>
      </View>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.text}>{userDetails.age}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{userDetails.email}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.text}>{userDetails.phone}</Text>

      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>{userDetails.username}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default UserProfileScreen;
