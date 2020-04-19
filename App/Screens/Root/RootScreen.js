import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
const actions = [
  {
    text: "Accessibility",
    name: "bt_accessibility",
    position: 2
  },
  {
    text: "Language",
    name: "bt_language",
    position: 1
  },
  {
    text: "Location",
    name: "bt_room",
    position: 3
  },
  {
    text: "Video",
    name: "bt_videocam",
    position: 4
  }
];
class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup()
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
        {/* <FloatingAction
        color='#316064'
        distanceToEdge={{vertical:60, horizontal:30}}
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        /> */}
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
