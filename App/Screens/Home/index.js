import React from 'react'
import { Platform, View, ActivityIndicator, Image, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native'
import {
  Button,
  Text,
  Card, ListItem, Divider
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './style'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import FeatureScroller from 'App/Components/FeatureScroller'
import FloatingButton from 'App/Components/FloatingButton'
import Contacts from 'react-native-contacts';


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Finance',
    icon: 'bank'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Investment',
    icon: 'account-group-outline'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Renting',
    icon: 'wallet-outline'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29e72',
    title: 'Mutual Funds',
    icon: 'currency-inr'
  },
];


const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },

]


const Item = ({ id, item, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        Style.item,
        Metrics.horizontalMargin,
        {
          justifyContent: "center",
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'space-around'
        }

      ]}
    >

      <Icon
        name={item.icon}
        color='#fff'
        size={50}
      />
      <Text style={[{ color: Colors.white }]}>{item.title}</Text>
    </TouchableOpacity>
  );
}

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

class HomeScreen extends React.Component {
  
  componentDidMount() {
    this._fetchUser()
  }

  addNewTransaction = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    ).then((granted) => {
      this.props.navigation.navigate('LendMoney');
    }).catch(err => {
      console.log(err)
    })
  }



  render() {
    return (
      <React.Fragment>
        <View
          style={ApplicationStyles.container}
        >
          {this.props.userIsLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
              <View>
                <FeatureScroller gradiant={['#73C0B0', '#4B908E', '#316064']} data={DATA} />
                <Text style={ApplicationStyles.sectionTitle}>Recent Transactions</Text>
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='account-group-outline'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You received committee from <Text style={{ fontWeight: 'bold' }}>Sanjay</Text> in <Text style={{ fontWeight: 'bold' }}>Saket committee</Text> group
                    </Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>
                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'green' }}>1000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='bank'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You lend money to <Text style={{ fontWeight: 'bold' }}>Ashok Kumar</Text></Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>
                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'red' }}>1000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='bank'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You lend money to <Text style={{ fontWeight: 'bold' }}>Ashok Kumar</Text></Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>
                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'red' }}>1000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='account-group-outline'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You received committee from <Text style={{ fontWeight: 'bold' }}>Abhay</Text> in <Text style={{ fontWeight: 'bold' }}>Bhogal committee</Text> group
                    </Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>

                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'green' }}>2000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='account-group-outline'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You received committee from <Text style={{ fontWeight: 'bold' }}>Aayush Kumar</Text> in <Text style={{ fontWeight: 'bold' }}>Bhogal committee</Text> group
                    </Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>

                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'green' }}>2000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='bank'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You lend money to <Text style={{ fontWeight: 'bold' }}>Ajay</Text></Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>
                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'red' }}>500</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='bank'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You lend money to <Text style={{ fontWeight: 'bold' }}>Kumar Swami</Text></Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>
                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'red' }}>10000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />
                <View style={{
                  display: "flex",
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10

                }}>
                  <View style={{ flex: .1, alignItems: 'center' }}><Icon
                    name='bank'
                    color='#316064'
                    size={30}
                  /></View>
                  <View style={{ flex: .7 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text>You lend money to <Text style={{ fontWeight: 'bold' }}>Anuj Saxena</Text></Text>
                      <Text style={{ fontSize: 12, color: Colors.text }}>31-Mar-2020 01:20 PM</Text>
                    </View>

                  </View>
                  <View style={{ flex: .2 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Icon
                        name='currency-inr'
                        color='#316064'
                        size={20}
                      />
                      <Text style={{ fontWeight: 'bold', color: 'red' }}>5000</Text>
                    </View>

                  </View>
                </View>
                <Divider style={ApplicationStyles.divider} />



              </View>
            )}

        </View>
        <FloatingButton clickHandler={this.addNewTransaction} />
      </React.Fragment>
    )
  }

  _fetchUser() {
    this.props.fetchUser('ajay')
  }
}

HomeScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (name) => dispatch(ExampleActions.fetchUser(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
