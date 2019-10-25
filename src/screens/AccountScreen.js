import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-navigation';
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <MaterialCommunityIcons style={styles.middle} name='account' size={38}/>
      <Text style={styles.middle}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='gear'size={20} />
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    textAlign: "center",
  }
});

export default AccountScreen;
