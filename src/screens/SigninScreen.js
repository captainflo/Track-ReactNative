import React,{ useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                submitButtonText='Signin'
                onSubmit={signin}
            />
            <NavLink
                routeName='Signup'
                text='dont have an account? Sign up instead!'
            />
    </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      header: null
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
      }
});

export default SigninScreen;