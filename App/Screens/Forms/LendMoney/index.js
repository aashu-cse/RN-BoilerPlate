import React, { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-material-dropdown';
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import ToggleSwitch from 'toggle-switch-react-native'
import DateTimePicker from 'App/Components/DateTimePicker';
import AutoSuggest from "App/Components/AutoSuggest";
import Style from './style'

const modeOptions = [{
    value: 'Fixed',
},
{
    value: 'Daily',
}, {
    value: 'Monthly',
}, {
    value: 'Quartarly',
}];


const LendMoney = () => {
     
    [name, setName] = useState('')
    //[number, setNumber] = useState('')
    
    const changeHandler = (date, element) => {
        console.log(date, element)
    }

    const autoSuggestHandler = (name) => {
        setName(name)
        //setNumber(number)
    }

    return (
        <React.Fragment>

            <View style={ApplicationStyles.container}>
                <View style={{ flex: .9 }}>
                    <AutoSuggest
                    selectHandler={(number, name) => autoSuggestHandler(number, name)}
                    />
                    
                    <Input
                        placeholder='Enter borrower name'
                        leftIcon={
                            <Icon
                                name='account'
                                size={24}
                                color='black'
                            />
                        }
                        value={name}
                    />
                    <Input
                        placeholder='Enter amount'
                        leftIcon={
                            <Icon
                                name='currency-inr'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <View style={{
                        // marginVertical: 20,
                        // marginHorizontal: 20,
                        flexDirection: 'row'
                    }}>
                        <View style={{ flex: 0.5 }}>
                            <View>
                                <DateTimePicker
                                    placeholder='Loan date'
                                    disabled={true}
                                    leftIcon={
                                        <Icon
                                            name='calendar-month'
                                            size={24}
                                            color='black'
                                        />
                                    }
                                    testID="load-date"
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date(1598051730000)}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    changeHandler={(date) => changeHandler(date, 'loanDate')}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <View>
                                <DateTimePicker
                                    placeholder='Closing date'
                                    disabled={true}
                                    leftIcon={
                                        <Icon
                                            name='calendar-month'
                                            size={24}
                                            color='black'
                                        />
                                    }
                                    testID="closing-date"
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date(1598051730000)}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    changeHandler={(date) => changeHandler(date, 'closingDate')}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                        <View style={{
                            flex: 0.9,
                            alignItems: 'flex-end',
                            marginRight: 15
                        }}>
                            <Text>Add Interest Details</Text>
                        </View>
                        <View style={{
                            flex: 0.1,
                            alignItems: 'flex-end',

                        }} >
                            <ToggleSwitch
                                isOn={true}
                                onColor="green"
                                offColor="red"
                                labelStyle={{ color: "black", }}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>

                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Dropdown
                            labelFontSize={14}
                            fontSize={18}
                            label='Select Interest Mode'
                            data={modeOptions}
                        />
                    </View>


                    <Input
                        placeholder='Enter Interest Rate'
                        leftIcon={
                            <Icon
                                name='finance'
                                size={24}
                                color='black'
                            />
                        }
                    />

                    <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                        <View style={{
                            flex: 0.9,
                            alignItems: 'flex-end',
                            marginRight: 15
                        }}>
                            <Text>Enable Emi</Text>
                        </View>
                        <View style={{
                            flex: 0.1,
                            alignItems: 'flex-end',

                        }} >
                            <ToggleSwitch
                                isOn={true}
                                onColor="green"
                                offColor="red"
                                labelStyle={{ color: "black", }}
                                size="medium"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                        </View>

                    </View>

                    <View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text>Select Duration</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{ flex: 0.33 }}>
                                <Input
                                    style={{ flex: .33 }}
                                    placeholder='Day'
                                />
                            </View>
                            <View style={{ flex: 0.33 }}>
                                <Input
                                    style={{ flex: .33 }}
                                    placeholder='Month'
                                />
                            </View>
                            <View style={{ flex: 0.33 }}>
                                <Input
                                    style={{ flex: .33 }}
                                    placeholder='Year'
                                />
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ flex: .1, justifyContent: 'center' }}>
                    <Button
                        buttonStyle={{ backgroundColor: Colors.primary }}
                        title="Create"
                    />
                </View>
            </View>






        </React.Fragment>
    )
}
export default LendMoney