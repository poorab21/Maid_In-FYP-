import {
    View,
    StyleSheet,
    ScrollView,
    PermissionsAndroid,
    Platform,
    Alert,
} from 'react-native';
import axios from 'axios';
import { Text , Input } from '@rneui/base';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import { launchCamera } from "react-native-image-picker";

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flex : 1,
        flexDirection : 'column',
        backgroundColor : 'white',
    },
    body : {
        flex : 1,
        display : 'flex',
        flexDirection : 'column',
    },
    row : {
        display : 'flex',
        flexDirection : 'row',
        flex : 1,
        margin : 10,
    },
    firstField : {
        flex : 1,
        borderWidth : 3,
        borderRadius : 10
    },
    SecondField : {
        flex : 1,
        borderWidth : 3,
        marginLeft : 10,
        borderRadius : 10
    },
    fieldLabel : {
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 15
    },
    serviceType : {
        borderWidth : 3,
        margin : 10,
        padding  : 10,
        backgroundColor : '#36FF92',
        borderRadius : 10
    },
    serviceTypeContainer : {
        backgroundColor : 'white',
        borderRadius : 10,
        marginTop : 5,
        padding : 5
    },
    buttons : {
        borderColor : 'black',
        flex : 1
    },
    footer : {
        flex : 1,
        alignItems : 'center',
        padding : 10
    },
    footerContent : {
        display : 'flex',
        flexDirection : 'row',
    }
})

const SignUp = (props) => {
    const data = [
        { label : 'Maid' , value : 1 },
        { label : 'Electrician' , value : 2 },
        { label : 'Gardener' , value : 3 },
        { label : 'Cleaner/Washer' , value : 4 }
    ]
    
    const [serviceType,setServiceType] = useState('');
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [cnic,setCNIC] = useState('');
    const [experience,setExperience] = useState('');
    const [contact,setContact] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [confirm,setConfirmed] = useState('')
    const [filePath,setFilePath] = useState(null);


    const [firstnameFocused,setFirstnameFocused] = useState(false);
    const [lastnameFocused,setLastnameFocused] = useState(false);
    const [cnicFocused,setcnicFocused] = useState(false);
    const [experienceFocused,setexperienceFocused] = useState(false);
    const [emailFocused,setemailFocused] = useState('');
    const [passwordFocused,setpasswordFocused] = useState('')
    const [confirmFocused,setconfirmedFocused] = useState('')
    

    const nameCriteria = /[a-zA-Z]{3,}/i;
    const cnicCriteria = /^[0-9]{5}(-)[0-9]{7}(-)[0-9]$/;
    const emailCriteria =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    const passwordCriteria = /[a-zA-Z0-9]{8,}/i;

    const requestCameraPermission = async () => {
        if(Platform.OS === 'android'){
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title : 'Camera Permissions',
                        message : 'MaidIn requires access to your device camera'
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }
            catch(err){
                return false;
            }
        }
        else return true;
    }

    const captureImage = async () => {
        let options = {
            mediaType : 'photo',
            maxWidth : 300,
            maxHeight : 550,
            quality  : 1,
            videoQuality : 'low',
            durationLimit : 30,
            saveToPhotos : true
        }
        let isCameraPermitted = await requestCameraPermission();
        if(isCameraPermitted){
            launchCamera(options,(response)=>{
                if(response.errorCode == 'camera_unavailable'){
                    Alert.alert(
                        'Camera Status',
                        'Camera not Available on Device',
                    )
                    return;
                }
                else if(response.errorCode == 'permission'){
                    Alert.alert(
                        'Camera Status',
                        'Permissions not Satisfied',
                    )
                    return;
                }
                else if(response.errorCode == 'others'){
                    Alert.alert(
                        'Camera Status',
                        response.errorCode,
                    )
                    return;
                }
                setFilePath(response);
            })
        }
    }

    const submit = async () => {
        const isFirstNameValid = nameCriteria.test(firstname);
        const isLastNameValid = nameCriteria.test(lastname);
        const isCNICValid = cnicCriteria.test(cnic);
        const isEmailValid = emailCriteria.test(email);
        const isPasswordValid = passwordCriteria.test(password);
        const isConfirmedValid = passwordCriteria.test(confirm);
        const password_match = (password === confirm)
        const isExperienceValid = (!isNaN(experience) && (Number(experience)> 0 && Number(experience) < 100))
        

        if(isFirstNameValid && isLastNameValid && isCNICValid && isExperienceValid && isExperienceValid && isEmailValid && isPasswordValid && isConfirmedValid && password_match && filePath && serviceType){
            await axios.post('http://192.168.100.131:3000/Register',{
                firstname : firstname,
                lastname : lastname,
                cnic : cnic,
                experience : experience,
                contact : contact,
                email : email,
                password : password,
                serviceType : data[serviceType-1].label,
                photo : filePath.assets
            }).then((response)=>{
                if(response.data.success){
                    console.log(response.data.message)
                    setFirstName('')
                    setLastName('')
                    setCNIC('')
                    setExperience('')
                    setEmail('')
                    setContact('')
                    setPassword('')
                    setServiceType(null)
                    setConfirmed('')
                    setFilePath(null)
                }
                else if(response.data.error_in_storage || response.data.already_exists){
                    Alert.alert(
                        'Maid In',
                        response.data.message
                    )
                }

            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.body}>
                <View style = {styles.row}>
                    <View style = {styles.firstField}>
                        <Text style = {styles.fieldLabel}>First-Name</Text>
                        <Input
                        onFocus={() => setFirstnameFocused(true)}
                        onBlur = {() =>  setFirstnameFocused(false)}
                        { ...( firstnameFocused && !nameCriteria.test(firstname) ? { errorMessage : 'First-Name must be atleast 3 characters long' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'user'}} 
                        onChangeText = {setFirstName} 
                        value = {firstname} />   
                    </View>
                    <View style = {styles.SecondField}>
                        <Text style = {styles.fieldLabel}>Last-Name</Text>
                        <Input 
                        onFocus={() => setLastnameFocused(true)}
                        onBlur = {() =>  setLastnameFocused(false)}
                        { ...( lastnameFocused && !nameCriteria.test(lastname) ? { errorMessage : 'Last-Name must be atleast 3 characters long' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'user'}} 
                        onChangeText = {setLastName}
                        value = {lastname}
                        />   
                    </View>
                </View>
                <View style = {styles.row}>
                    <View style = {styles.firstField}>
                        <Text style = {styles.fieldLabel}>CNIC</Text>
                        <Input  
                        onFocus={() => setcnicFocused(true)}
                        onBlur = {() =>  setcnicFocused(false)}
                        { ...( cnicFocused && !cnicCriteria.test(cnic) ? { errorMessage : 'CNIC format XXXXX-XXXXXXX-X' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'address-card-o'}}
                        onChangeText = {setCNIC}
                        value = {cnic}
                        />   
                    </View>
                    <View style = {styles.SecondField}>
                        <Text style = {styles.fieldLabel}>Experience</Text>
                        <Input 
                        onFocus={() => setexperienceFocused(true)}
                        onBlur = {() =>  setexperienceFocused(false)}
                        { ...( experienceFocused && !(!isNaN(experience) && (Number(experience)> 0 && Number(experience) < 100))  ? { errorMessage : 'Must be in range 1-99' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'briefcase'}}
                        onChangeText = {setExperience}
                        value = {experience}
                        />   
                    </View>
                </View>
                <View style = {styles.row}>
                    <View style = {styles.firstField}>
                        <Text style = {styles.fieldLabel}>Contact</Text>
                        <Input 
                        leftIcon = {{type : 'font-awesome' , name : 'phone'}}
                        onChangeText = {setContact}
                        value = {contact}
                        />   
                    </View>
                    <View style = {styles.SecondField}>
                        <Text style = {styles.fieldLabel}>Email Address</Text>
                        <Input 
                        onFocus={() => setemailFocused(true)}
                        onBlur = {() =>  setemailFocused(false)}
                        { ...( emailFocused && !emailCriteria.test(email) ? { errorMessage : 'Invalid Email' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'envelope'}}
                        onChangeText = {setEmail}
                        value = {email}
                        />   
                    </View>
                </View>
                <View style = {styles.serviceType}>
                    <Text style = {styles.fieldLabel}>Service Type</Text>
                    <Dropdown
                    data={data}
                    labelField = {'label'}
                    valueField = {'value'}
                    value = {serviceType}
                    onChange = {(item)=> setServiceType(item.value)}
                    style = {styles.serviceTypeContainer}
                    />
                </View>
                <View style = {styles.row}>
                    <View style = {styles.firstField}>
                        <Text style = {styles.fieldLabel}>Password</Text>
                        <Input  
                        onFocus={() => setpasswordFocused(true)}
                        onBlur = {() =>  setpasswordFocused(false)}
                        { ...( passwordFocused && !passwordCriteria.test(password) ? { errorMessage : 'Password must be atleast 8 characters long' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'key'}}
                        onChangeText = {setPassword}
                        secureTextEntry = {true}
                        value = {password}
                        />   
                    </View>
                    <View style = {styles.SecondField}>
                        <Text style = {styles.fieldLabel}>Confirm Password</Text>
                        <Input 
                        onFocus={() => setconfirmedFocused(true)}
                        onBlur = {() =>  setconfirmedFocused(false)}
                        { ...( confirmFocused && !passwordCriteria.test(confirm) ? { errorMessage : 'Password must be atleast 8 characters long' } : {} )}
                        leftIcon = {{type : 'font-awesome' , name : 'lock'}} 
                        onChangeText = {setConfirmed}
                        secureTextEntry = {true}
                        value = {confirm}
                        />   
                    </View>
                </View>
                <View style = {styles.buttons}>
                    <Button
                    title = {'Camera'}
                    onPress = {captureImage}
                    containerStyle = {{marginLeft : 10,marginRight : 10,borderWidth : 3 , borderRadius : 30}}
                    titleStyle = {{fontSize : 25 , fontWeight : 'bold',color : 'white'}}
                    buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30}}
                    />
                    <Button
                    title = {'Next'}
                    onPress = {submit}
                    containerStyle = {{margin : 10,borderWidth : 3 , borderRadius : 30}}
                    titleStyle = {{fontSize : 25 , fontWeight : 'bold',color : 'white'}}
                    buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30}}
                    />
                </View>
            </View>
            <View style = {styles.footer}>
                <View style = {styles.footerContent}>
                    <Text style = {{fontWeight : 'bold'}}>Already have an Account ?</Text> 
                    <Text style = {{color : '#36FF92' , fontWeight : 'bold',marginLeft : 5}}>
                      Sign In
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;