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

      console.log(response);

      navigation.navigate("LogIn");
    } catch (e) {
      console.log("Error en registro", e);
    }
  };



  return (
    <View>
      <Text>Sign In</Text>

      <TextInput
        placeholder='Email'

        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder='Password'

        value={password}
        onChangeText={(text) => setPasword(text)}
      />


      <TouchableOpacity onPress={() => onHandlerSignIn()}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <Text>Do you have an acount? </Text>
      <Pressable onPress={() => navigation.navigate("LogIn")} >
        <Text>Log In</Text>
      </Pressable>



    </View>
  )
}

export default SignIn