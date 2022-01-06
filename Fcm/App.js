import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';


const App = () => {
  // Get the device token
  const getDeviceToken = () => {
    messaging()
      .getToken()
      .then(token => {
        console.log('your device token', token)
      });

    //  // If using other push notification providers (ie Amazon SNS, etc)
    //   // you may need to get the APNs token instead for iOS:
    //   // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
    //   // Listen to whether the token changes
    //   return messaging().onTokenRefresh(token => {
    //     saveTokenToDatabase(token);
    //   });
  }

  useEffect(() => {
    getDeviceToken();
  }, [])

  // Receiving messages

  /**1. Foreground state messages */
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // const jsonMessage =  JSON.stringify(remoteMessage)
  //     Alert.alert('A new FCM message arrived!', remoteMessage.data.content);
  //   });
  //   return unsubscribe;
  // }, []);

  /**2. Background & Quit state messages */
  // useEffect(() => {
  //   // Register background handler
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //     // const jsonMessage =  JSON.stringify(remoteMessage)
  //     Alert.alert('A new FCM message arrived!', remoteMessage.data.content); // you can't run this Alert
  //   });
  // }, [])

  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic">
      </ScrollView> */}
      <View>
        <Text>Firebase Cloud Message</Text>
      </View>

    </SafeAreaView>
  );
};

export default App;
