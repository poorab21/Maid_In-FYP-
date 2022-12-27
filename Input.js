import React from 'react';
import {
  Text, 
  View ,
  StyleSheet,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  label : {
    fontWeight : 'bold',
    fontSize : 20,
    color : 'black',
    textAlign : 'center'
},
  textbox : {
    backgroundColor : '#DBDBDB' ,
    borderRadius : 10
  }
})

const Input = (props) => {
  const {fieldname,type,value,setState} = props

  if(type === 'text'){
    return (
      <>
        <Text style = {styles.label}>
          {fieldname}
        </Text>
        <TextInput style = {styles.textbox} value = {value} onChangeText = {setState}  />
      </>
    )
  }
  else if(type === 'password'){
    return (
      <>
        <Text style = {styles.label}>
          {fieldname}
        </Text>
        <TextInput style = {styles.textbox} secureTextEntry = {true} value = {value} onChangeText = {setState} />
      </>
    )
  }
  else if(type === 'email'){
    return (
      <>
        <Text style = {styles.label}>
          {fieldname}
        </Text>
        <TextInput style = {styles.textbox} value = {value} onChangeText = {setState}/>
      </>
    )
  }
  else if(type === 'number'){
    return (
      <>
        <Text style = {styles.label}>
          {fieldname}
        </Text>
        <TextInput style = {styles.textbox} value = {value} onChangeText = {setState} />
      </>
    )
  }
  else if(type === 'phone'){
    return (
      <>
        <Text style = {styles.label}>
          {fieldname}
        </Text>
        <TextInput style = {styles.textbox} value = {value} onChangeText = {setState} />
      </>
    )
  }
  else if(type === 'cnic'){
    return (
      <>
        <Text style = {styles.label}>
          {fieldname}
        </Text>
        <TextInput style = {styles.textbox}  value = {value} onChangeText = {setState}/>
      </>
    )
  }
}

export default Input;