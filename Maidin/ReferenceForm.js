import { useState } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Alert,
} from 'react-native'
import Heading from '../Component/Heading';
import References from '../Component/Reference'
import Btn from '../Component/Btn';
import { Button, Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
    },  
    referenceContainer : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
    },
    header : {
        flex : 1,
    },
    referenceList : {
        display : 'flex',
        flexDirection : 'column',
    },
    buttons : {
        display : 'flex',
        flexDirection : 'row',
    },
    Btn : {
        flex : 1,
        margin : 10
    },
    refSubmitted : {
        flex : 1,
        alignItems : 'center'
    }
})

const ReferenceForm = (props) => {
    const [name,setName] = useState('');
    const [occupation,setOccupation] = useState('')
    const [contact,setContact] = useState('')
    const [email,setEmail] = useState('')
    const [references,setReferences] = useState([]);

    const add = () => {
        if(name.length == 0 || occupation.length == 0 && contact.length == 0 && email.length == 0){
            Alert.alert(
                "Maid In",
                "Please Fill Out All The Fields"
            )
        }   
        else { 
            references.push({
                name : name,
                occupation : occupation,
                contact : contact,
                email : email
            })
            setReferences(references)
            setName('')
            setContact('')
            setEmail('')
            setOccupation('')
        }
    }

    const submit = () => {
        if(references.length >= 2){
            // submit registration form
        }
        else {
            Alert.alert(
                'Maid-In',
                'Atleast 2 References must be Submitted'
            )
        }
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.referenceContainer}>
                        <View style = {styles.header}>
                            <Heading heading_title = {'References'}/>
                        </View>
                        <View style = {styles.referenceList}>
                            <References 
                                name = {name}
                                setName = {setName}
                                occupation = {occupation}
                                setOccupation = {setOccupation}
                                contact = {contact}
                                setContact = {setContact}
                                email = {email}
                                setEmail = {setEmail}
                            />                  
                        </View>
                        <View style = {styles.refSubmitted}>
                            <Text>
                                References Submited : {references.length}
                            </Text>
                        </View>
                        <View style = {styles.buttons}>
                            <View style = {styles.Btn}>
                                <Button
                                title={'ADD'}
                                buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30}}
                                titleStyle = {{color : 'black'}}
                                onPress = {add}
                                />        
                            </View>
                        </View>
                    </View>
                    <View style = {styles.Btn}>
                        <Button
                        title={'SUBMIT'}
                        buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30}}
                        titleStyle = {{color : 'black'}}
                        onPress = {submit}
                        />
                    </View>
                </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default ReferenceForm;