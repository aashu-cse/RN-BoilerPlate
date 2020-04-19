import { StyleSheet, Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    scrollContainer: {
        height: screenHeight / 7,
        marginBottom: 10
    },
    item: {
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'space-around'
    },
    itemText: {
        color: Colors.white
    },

})