import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Input, Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contacts from 'react-native-contacts';


const AutoSuggest = (props) => {
    [contactSuggestion, setContactSuggestion] = useState([]);
    [filteredSuggestion, setfilteredSuggestion] = useState([]);
    [selectedNumber, setSelectedNumber] = useState('');

    useEffect(() => {
        Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
            } else {
                contacts = contacts.filter((item) => {
                    return item.phoneNumbers.length > 0
                })
                contacts = contacts.map(item => {
                    return {
                        displayName : item.displayName,
                        number : item.phoneNumbers[0].number.replace(/ /g,""),
                    }
                })
                setContactSuggestion(contacts)
            }
        })
    }, [])

    

    const getContactSuggestion = (query) => {
        if(query){
            contactSuggestion = contactSuggestion.filter(item => {
                return item.number.indexOf(query) !== -1
            })
            setfilteredSuggestion(contactSuggestion)
            setSelectedNumber(query)
        }
        else{
            
            setfilteredSuggestion([])
        }
        
    }

    const selectHandler = (number, name) => {
        setSelectedNumber(number)
        setfilteredSuggestion([])
        props.selectHandler(name)
    }


    return (
        <React.Fragment>
            <Input
                placeholder='Enter contact number'
                leftIcon={
                    <Icon
                        name='phone'
                        size={24}
                        color='black'
                    />
                }
                value={selectedNumber}
                onChangeText={(data) => getContactSuggestion(data)}
            />
            <View style={{
                position:'absolute',
                width:400,
                zIndex:99,
                top:50,
                backgroundColor:'red'
            }}>
                {
                    filteredSuggestion.map((l, i) => (
                        <ListItem
                            key={i}
                            //leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.displayName}
                            subtitle={l.number}
                            bottomDivider
                            onPress={() => selectHandler(l.number, l.displayName)}
                        />
                    ))
                }
            </View>


        </React.Fragment>
    )
}

export default AutoSuggest