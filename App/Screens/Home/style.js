import { StyleSheet, Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

const screenHeight = Dimensions.get('window').height

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
    textAlign: 'left',
  },
  sectionTitle: {
    ...Fonts.normal,
    marginBottom: Metrics.small,
    textAlign: 'left',
    fontWeight:'bold'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  container:{
    flexDirection:'column',
    justifyContent:"flex-start",
    marginVertical:10,
    marginHorizontal:10
  },
  scrollContainer:{
    height:screenHeight/7,
    marginBottom:10
  },
  item: {
    display:'flex',
  },
  title: {
    fontSize: 32,
  },

})
