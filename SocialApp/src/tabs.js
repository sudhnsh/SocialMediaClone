import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import ListScreen from './screens/ListScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ListScreen} />
        <Tab.Screen name="UserProfile" component={UserProfileScreen}/>
        <Tab.Screen name="CreatePost" component={CreatePostScreen} />
        <Tab.Screen name="PostDetails" component={PostDetailsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
