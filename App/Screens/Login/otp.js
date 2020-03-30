import React from 'react'
import { Platform, Text, View, ActivityIndicator, Image } from 'react-native'
import { Icon, Input, Button, colors } from 'react-native-elements'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Styles from "./style";
import { Colors } from 'App/Theme'


class OTPScreen extends React.Component {
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
          <Text style={Styles.text}>Enter 4 digit OTP recevied on your phone number</Text>
          <OTPInputView
            pinCount={4}
            style={{ width: '60%', height: 80 }}
            codeInputHighlightStyle={{
              borderColor: colors.primary

            }}
            codeInputFieldStyle={{
              color: colors.grey0
            }}
          />
          <Button
            title="Continue"
            raised
            type="solid"

          />
          <Button
            title="Resend OTP"
            raised
            type="clear"

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



export default OTPScreen
