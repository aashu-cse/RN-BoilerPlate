import React from 'react'
import {View, FlatList, TouchableOpacity } from 'react-native'
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Style from './style'
import {Metrics, Colors } from 'App/Theme'


const Item = ({ id, item, selected, onSelect }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          Style.item,
          Metrics.horizontalMargin,  
        ]}
      >
        <Icon
          name={item.icon}
          color={Colors.white}
          size={50}
        />
        <Text style={Style.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

function FeatureScroller(props) {
    return (
        <View style={Style.scrollContainer}>
            <LinearGradient colors={props.gradiant} style={Style.linearGradient}>
                <FlatList

                    data={props.data}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            item={item}
                            selected={true}
                            onSelect={() => console.log('selefct')}
                        />
                    )}
                    keyExtractor={item => item.id}
                //extraData={selected}
                />
            </LinearGradient>


        </View>
    )
}

export default FeatureScroller