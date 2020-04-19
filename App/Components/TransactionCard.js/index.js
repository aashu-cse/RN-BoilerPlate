import React from 'react'
import { Platform, View, ActivityIndicator, Image, FlatList, TouchableOpacity } from 'react-native'
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



function TransactionCard(props){
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default TransactionCard