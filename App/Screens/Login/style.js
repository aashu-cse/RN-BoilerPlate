import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  main:{
    flex:.9,
    justifyContent:'center',
    alignItems:'center'
    
  },
  footer:{
    flex:.1,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  inputContainerStyle:{
    width:250,
    marginBottom:10,
    //borderWidth:1
    
  }
})
