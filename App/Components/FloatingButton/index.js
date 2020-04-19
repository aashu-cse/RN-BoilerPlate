import React from 'react'
import {TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './style'
import {Colors } from 'App/Theme'

function FloatingButton(props) {
    return (
        <React.Fragment>
            <TouchableOpacity
                activeOpacity={props.activeOpacity || 0.7}
                onPress={props.clickHandler || console.log('button clicked')}
                style={Style.TouchableOpacityStyle}>
                <Icon
                    name={props.icon || 'plus-circle'}
                    color={Colors.primary}
                    size={props.size || 50}
                />
            </TouchableOpacity>
        </React.Fragment>
    )
}

export default FloatingButton