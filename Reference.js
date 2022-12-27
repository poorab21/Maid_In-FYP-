import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    reference : {
        flexDirection : 'column',
        backgroundColor : '#D9D9D9',
        margin : 10,
        borderRadius : 10
    },  
    row : {
        display : 'flex',
        flex : 1,
        flexDirection : 'row'
    },
    textfield : {
        backgroundColor : 'white',
        flex : 1,
        margin : 10,
        borderRadius : 10
    },
    field : {
        flex : 1,
        flexDirection : 'column',
    },
    fieldname : {
        textAlign : 'center',
        fontSize : 20,
        fontWeight : 'bold',
        color : 'black'
    }
})

const References = (props) => {
    return (
        <View style = {styles.reference}>
            <View style = {styles.row}>
                <View style = {styles.field}>
                    <Text style = {styles.fieldname}>Full-Name</Text>
                        <TextInput style = {styles.textfield} />
                </View>
                <View style = {styles.field}>
                    <Text style = {styles.fieldname}>Occupation</Text>
                    <TextInput style = {styles.textfield} />
                </View>
                </View>
                <View style = {styles.row}>
                    <View style = {styles.field}>
                        <Text style = {styles.fieldname}>Contact</Text>
                        <TextInput style = {styles.textfield} />
                    </View>
                    <View style = {styles.field}>
                        <Text style = {styles.fieldname}>Email Address</Text>
                        <TextInput style = {styles.textfield} />
                    </View>
                </View>
        </View>
    )
}

export default References;