import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import NoteFileList from '../pages/NoteFileList';
import DeleteFileList from '../pages/DeleteFileList';
import EditNote from '../pages/EditNote';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabBar" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditNote" component={EditNote} />
        <Stack.Screen name="NoteFileList" component={NoteFileList} />
        <Stack.Screen name="DeleteFileList" component={DeleteFileList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
