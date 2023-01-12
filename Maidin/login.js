import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(`${email} \n ${password}`)
  }

  return (
    <ScrollView style = {{backgroundColor : 'white'}}>    
        <View style={styles.container}>
        <View>
            <Image style={styles.image} source={require("../Images/MaidIn.png")} /> 
        </View>
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email."
            value={email}
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            /> 
        </View> 
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password."
            value={password}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            /> 
        </View> 
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginBtn} onPress = {login}>
            <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity> 
        </View> 
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText : {
    color : 'white',
    fontSize : 20
  },
  image: {
    marginBottom: 40,
    marginTop : 50
  },
  inputView: {
    backgroundColor: "#CAFAFE",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor : '#36FF92'
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor : '#36FF92',
    marginBottom : 20
  },
});