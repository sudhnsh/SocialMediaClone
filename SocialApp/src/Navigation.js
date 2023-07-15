import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen';
import TabNavigator from './tabs';
import PostDetailsScreen from './screens/PostDetailsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const AppNavigator = createStackNavigator(
  {
    Tab: TabNavigator,
    Login: LoginScreen,
    List: ListScreen,
    PostDetails: PostDetailsScreen,
    CreatePost: CreatePostScreen,
    UserProfile: UserProfileScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
