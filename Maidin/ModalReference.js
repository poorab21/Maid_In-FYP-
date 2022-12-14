import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Button , Icon, Input , Text } from "react-native-elements";
import Heading from "./Heading";

const ModalBox = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name,setName] = useState('');
  const [occupation,setOccupation] = useState('');
  const [contact,setContact] = useState('');
  const [email,setEmail] = useState('');
  const [references,setReferences] = useState([])
  const add = () => {
    if(name.length == 0 || occupation.length == 0 || contact.length == 0 || email.length == 0){
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
      setModalVisible(!modalVisible)
  }
}
  const Del = (i) => {
      setReferences(references.filter((value,index)=>{
        return index != i;
      }))
  }
  const submit = () => {
    if(references.length >= 2){
       
    }
    else {
      Alert.alert(
        'Maid-In',
        'Atleast 2 References must be Submitted'
      )
    }
  }

  return (
    <ScrollView>
        <View>
            <Heading heading_title = {'References'}/>
        </View>
        <View style = {styles.table}>
            { references.map((value,index)=>{
                  return (
                    <>
                      <View style = {styles.row}>
                        <Text style = {styles.rowContent}>
                          Name : {value.name}
                        </Text>
                        <Text style = {styles.rowContent}>
                          Occupation : {value.occupation}
                        </Text>
                        <Text style = {styles.rowContent}>
                          Contact : {value.contact}
                        </Text>
                        <Text style = {styles.rowContent}>
                          Email : {value.email}
                        </Text>
                    </View>
                    <View>
                      <Button
                      icon={
                        <Icon
                          name={'delete'}
                          size={25}
                          color="white" 
                          />
                      }
                      onPress={() => Del(index)}
                      />    
                  </View>
                </>
                  )
            })  
              
          }
        </View>
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >   
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Input
                                placeholder = {'Enter Name'}
                                leftIcon = {{type : 'font-awesome' , name : 'user'}} 
                                onChangeText = {setName} 
                                value = {name} />
                            </View>
                            <View>
                                <Input
                                placeholder = {'Enter Occupation'}
                                leftIcon = {{type : 'font-awesome' , name : 'user'}} 
                                onChangeText = {setOccupation} 
                                value = {occupation} />
                            </View>
                            <View>
                                <Input
                                placeholder = {'Enter Contact'}
                                leftIcon = {{type : 'font-awesome' , name : 'phone'}} 
                                onChangeText = {setContact} 
                                value = {contact} />
                            </View>
                            <View>
                                <Input
                                placeholder = {'Enter Email'}
                                leftIcon = {{type : 'font-awesome' , name : 'envelope'}} 
                                onChangeText = {setEmail} 
                                value = {email} />
                            </View>
                            <View>
                                <Button
                                title={'ADD'}
                                buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30}}
                                titleStyle = {{color : 'black'}}
                                onPress = {add}
                                />  
                            </View>
                            <View>
                                <Button
                                title={'BACK'}
                                buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30,marginTop : 10}}
                                titleStyle = {{color : 'black'}}
                                onPress = {() => setModalVisible(!modalVisible)}
                                />  
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
            <View>
                <Button
                title={'ADD REFERENCES +'}
                buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30,padding : 20,margin : 10}}
                titleStyle = {{color : 'black'}}
                onPress = {()=> setModalVisible(!modalVisible)}
                />
            </View>
            <View>
                <Button
                title={'SUBMIT'}
                buttonStyle = {{backgroundColor : '#36FF92', borderRadius : 30,padding : 20,margin : 10}}
                titleStyle = {{color : 'black'}}
                onPress = {submit}
                />
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop : 70
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container : {
    display : 'flex',
    flexDirection : 'column',
    flex : 1,
},
table : {
  display : 'flex',
  margin : 10,
},
row : {
  borderWidth : 3,
  padding : 10,
  marginTop : 5
},
rowContent : {
  fontWeight : 'bold',
  textAlign : 'center'
}
});

export default ModalBox;