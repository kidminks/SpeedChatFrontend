import React from 'react';
import {createAppContainer, createSwitchNavigator} from'react-navigation';
import Welcome_screen from './src/screens/welcome_screen';
import ChatScreen from './src/screens/chat_screen';

export default createAppContainer(createSwitchNavigator({
  Welcome: Welcome_screen,
  Chat: ChatScreen
},{
  initialRouteName: 'Chat'
}))
