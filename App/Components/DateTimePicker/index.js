import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './style'
import { Colors } from 'App/Theme'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = (props) => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const onDateChange = (date) => {
        setShow(false)
        if(date.type === 'set'){
            setSelectedDate(date.nativeEvent.timestamp)
            props.changeHandler(date)
        }
    }

    const formatDate = (timestamp) => {
        if(timestamp){
            const d = new Date(timestamp)
            const year = d.getFullYear() // 2019
            const date = d.getDate() // 23
            const month = d.getMonth() // 23
            return `${date}-${month}-${year}`
        }
        return ''
        
    }

    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => setShow(true)}>
                <Input
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    leftIcon={props.leftIcon}
                    value={props.date ? formatDate(props.date) : formatDate(selectedDate)}

                />
            </TouchableOpacity>
            {show && <DateTimePicker
                onChange={(date) => onDateChange(date)}
                {...props}
            />}
        </React.Fragment>
    )
}

export default DateTime