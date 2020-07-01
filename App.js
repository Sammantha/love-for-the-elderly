import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Header from './components/Header';

export default function App() {

  const[currentPage, setCurrentPage] = useState('welcome');

  let content;

  switch(currentPage) {
    case 'about':
      content = <About/>;
      break;
    case 'gatherInfo':
      content = <GatherInfo/>;
      break;
    case 'learn':
      content = <Learn/>;
      break;
    case 'profile':
      content = <Profile/>;
      break;
    case 'settings':
      content = <Settings/>;
      break;
    case 'signIn':
      content = <SignIn/>;
      break;
    case 'signUp':
      content = <SignUp/>;
      break;
    case 'termsConditions':
      content = <TermsConditions/>;
      break;
    case 'videoChat':
      content = <VideoChat/>;
      break;
    case 'welcome':
      content = <Welcome/>;
      break;
    case 'default':
      content = <Welcome/>
  };

  return (
    <View style={styles.container}>
      <Text>This is the app page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
