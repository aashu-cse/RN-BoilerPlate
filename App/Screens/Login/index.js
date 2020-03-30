import React from 'react'
import { Platform, Text, View, ActivityIndicator, Image } from 'react-native'
import { Icon, Input, Button, colors } from 'react-native-elements'
import NavigationService from 'App/Services/NavigationService'
import Styles from "./style";
import { Colors } from 'App/Theme'


class LoginScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.main}>
          <Icon
            raised
            name='user'
            size={50}
            type='font-awesome'
            color={colors.primary}
            onPress={() => console.log('hello')} />
          <Text style={Styles.text}>Login with your phone number</Text>
          <Input
            keyboardType='number-pad'
            placeholder='+91-99XXXXXXXX'
            leftIcon={{ type: 'font-awesome', name: 'phone', color: colors.primary }}
            containerStyle={Styles.inputContainerStyle}
            inputContainerStyle={{
              borderBottomColor: '#e4e6ed'
            }}
          />
          <Button
            title="Send OTP"
            raised
            type="solid"
            onPress={() => NavigationService.navigate('OTPScreen')}

          />
        </View>
        <View style={Styles.footer}>
          <Text>Dont have an account?</Text>
          <Button
            title="Signup"
            raised
            type="clear"

          />
        </View>
      </View>
    )
  }


}



export default LoginScreen
