import React, { useState } from 'react';
import {
  Text, 
  View ,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import Input from '../Component/Input';
import { Picker } from '@react-native-picker/picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Heading from '../Component/Heading';

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1
    },
    credentials : {
        backgroundColor : 'white',
        display : 'flex',
        flexDirection : 'column',
        padding : 10    
    },
    InfoContainer : {
        display : 'flex',
        flexDirection : 'row',
    },
    first_field : {
        flex : 1,
        margin : 10,
    },
    second_field : {
        flex : 1,
        margin : 10
    },
    serviceType : {
        margin : 10,
        backgroundColor : '#FF6161',
        borderRadius : 10,
        display : 'flex',
        flexDirection : 'column',
    },
    serviceTypeHeading : {
        flex : 1,
    },
    services : {
        flex : 1
    },
    serviceSelect : {
        backgroundColor : 'white',
        margin : 10,
        color : 'black'
    },
    btns : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
    },
    cameraBtn : {
        backgroundColor : 'black',
        padding : 10,
        marginLeft : 10,
        marginRight : 10
    },
    nextBtn : {
        backgroundColor : '#444444',
        padding : 10,
        marginLeft : 10,
        marginRight : 10
    },
    nextText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 25
    },
    cameraText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 25
    },
    addRemoveIcons : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
    }    
})

const SPRegistration = (props) => {
    const [service,setService] = useState('');
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [cnic,setCNIC] = useState('');
    const [experience,setExperience] = useState('');
    const [contact,setContact] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmed,setConfirmed] = useState('');
    
    const submit = () => {
        
    }

    return (
            <SafeAreaView style = {styles.container}>
                <ScrollView>    
                        <Heading heading_title = {'Maid In'}/>
                        <View style = {styles.credentials}>
                            <View style = {styles.InfoContainer}>
                                <View style = {styles.first_field}>
                                    <Input 
                                    fieldname = {'First-Name'} 
                                    type = {'text'} 
                                    field = {firstname}
                                    setState = {setFirstName}

                                    />                  
                                </View>

                                <View style = {styles.second_field}>
                                    <Input 
                                    fieldname = {'Last-Name'} 
                                    type = {'text'}
                                    field = {lastname} 
                                    setState = {setLastName} />
                                </View>
                            </View>
                            
                            <View style = {styles.InfoContainer}>
                                <View style = {styles.first_field}>
                                    <Input 
                                    fieldname = {'CNIC'} 
                                    type = {'text'}
                                    field = {cnic} 
                                    setState = {setCNIC} />                  
                                </View>

                                <View style = {styles.second_field}>
                                    <Input 
                                    fieldname = {'Experience'} 
                                    type = {'number'} 
                                    field = {experience}
                                    setState = {setExperience} />
                                </View>
                            </View>
                            
                            <View style = {styles.InfoContainer}>
                                <View style = {styles.first_field}>
                                    <Input 
                                    fieldname = {'Contact'} 
                                    type = {'phone'} 
                                    field = {contact}
                                    setState = {setContact} />                  
                                </View>

                                <View style = {styles.second_field}>
                                    <Input 
                                    fieldname = {'Email'} 
                                    type = {'email'} 
                                    field = {email}
                                    setState = {setEmail} />
                                </View>
                            </View>
                        </View>
                        <View style = {styles.serviceType}>
                            <View style = {styles.serviceTypeHeading}>
                                <Text style = {{fontWeight : 'bold',fontSize : 25,textAlign : 'center',color : 'white'}}>
                                    Service Type
                                </Text>
                            </View>
                            <View style = {styles.services}>
                                <Picker
                                selectedValue={service}
                                onValueChange={(intemValue) => setService(intemValue)} 
                                style = {styles.serviceSelect}
                                mode = {'dialog'}
                                >
                                    <Picker.Item label={'service Type 1'} value={'service type 1'}/>
                                    <Picker.Item label={'service Type 2'} value={'service type 2'}/>
                                    <Picker.Item label={'service Type 3'} value={'service type 3'}/>
                                    <Picker.Item label={'service Type 4'} value={'service type 4'}/>
                                </Picker>
                            </View>
                        </View>
                        <View style = {styles.password}>
                            <View style = {styles.InfoContainer}>
                                <View style = {styles.first_field}>
                                    <Input 
                                    fieldname = {'Password'} 
                                    type = {'password'} 
                                    field = {password}
                                    setState = {setPassword} />                  
                                </View>

                                <View style = {styles.second_field}>
                                    <Input 
                                    fieldname = {'Confirm Password'} 
                                    type = {'password'} 
                                    field = {confirmed}
                                    setState = {setConfirmed} />
                                </View>
                            </View>
                        </View>
                        <View style = {styles.btns}>
                            <View style = {styles.cameraBtn}>
                                <Pressable>
                                    <Text style = {styles.cameraText}>
                                        Camera
                                    </Text>
                                </Pressable>
                            </View>
                            <View style = {styles.nextBtn}>
                                <Pressable onPress = {submit}>
                                    <Text style = {styles.nextText}>
                                        Next
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
    )
}

export default SPRegistration;