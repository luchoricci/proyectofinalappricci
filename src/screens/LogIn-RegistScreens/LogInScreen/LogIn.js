import { View, Text, TextInput, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { firebase_auth } from '../../../firebase/firebase_auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SetIdToken, SetUser } from '../../../Redux/Slice/AuthSlice';
import LogInStyles from './LogInStyle'

const LogIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");


  const onHandlerLogIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

      dispatch(SetUser(response.user.email));
      dispatch(SetIdToken(response._tokenResponse.idToken));
      // console.log(response);
    } catch (e) {
      console.log("Error en Login", e);
    }
  };








  return (
    <View style={LogInStyles.container}>
      <Text style={LogInStyles.title}>Log In</Text>
      <View>

        <TextInput
          placeholder='Email'
          style={LogInStyles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          style={LogInStyles.input}
          value={password}
          onChangeText={(text) => setPasword(text)}
        />
 

      </View>
      <View>
        <Pressable style={LogInStyles.button} onPress={() => onHandlerLogIn()}>
          <Text style={LogInStyles.buttonText} >Log In</Text>
        </Pressable>
        <Text style={LogInStyles.registroText} >Don't you have an acount?</Text>
        <Pressable style={LogInStyles.button} onPress={() => navigation.navigate("SignIn")}>
          <Text style={LogInStyles.buttonText} >Sign In</Text>
        </Pressable>
      </View>


    </View>
  )
}

export default LogIn