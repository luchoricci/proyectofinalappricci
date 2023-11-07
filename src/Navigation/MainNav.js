import React,{useState, useEffect} from 'react';
import AuthNav from './AuthNav';
import TabNav from './TabNav';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';


const MainNav = () => {
const [checkedUser, setCheckedUser] = useState(null);
const User = useSelector( state => state.AuthSlice.User )

useEffect(() => {
  const checkUser = async () =>{
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
   userEmail ? setCheckedUser(userEmail) : setCheckedUser(User);
    } catch (error) {
      console.log(error)
    }
  };
  checkUser();
}, [User]);

  return (
    <NavigationContainer>{checkedUser? <TabNav/> : <AuthNav/>}</NavigationContainer>
  );
};

export default MainNav