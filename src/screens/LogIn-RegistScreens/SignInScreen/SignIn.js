import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SignInStyles from './SignInStyle';
import { firebase_auth } from '../../../firebase/firebase_auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';





const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const onHandlerSignIn = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

    

      navigation.navigate("LogIn");
    } catch (e) {
   
    }
  };



  return (
    <View style={SignInStyles.container}>
      <Text style={SignInStyles.title}>Sign In</Text>
      
      <TextInput
        placeholder='Email'
        style={SignInStyles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder='Password'
        style={SignInStyles.input}
        value={password}
        onChangeText={(text) => setPasword(text)}
      />
                <TextInput
          placeholder='Name'
          style={SignInStyles.input}
          // value={Name}
          // onChangeText={(text) => setPasword(text)}
        />
           <TextInput
          placeholder='Surname'
          style={SignInStyles.input}
          // value={Surname}
          // onChangeText={(text) => setPasword(text)}
        />
           <TextInput
          placeholder='Age'
          style={SignInStyles.input}
          // value={Age}
          // onChangeText={(text) => setPasword(text)}
        />




      <TouchableOpacity style={SignInStyles.button} onPress={() => onHandlerSignIn()}>
        <Text style={SignInStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={SignInStyles.registroText}>Do you have an acount? </Text>
      <Pressable style={SignInStyles.button} onPress={() => navigation.navigate("LogIn")} >
        <Text style={SignInStyles.buttonText}>Log In</Text>
      </Pressable>



    </View>
  )
}

export default SignIn