import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNav from './AuthNav';
import TabNav from './TabNav';
import { useSelector } from 'react-redux';


const MainNav = () => {

const User = useSelector( state => state.AuthSlice.User )


  return (
    <NavigationContainer>{User? <TabNav/> : <AuthNav/>}</NavigationContainer>
  );
};

export default MainNav