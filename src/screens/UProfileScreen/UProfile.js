import { Image, View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import UProfileStyles from './UProfileStyle'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePutImageMutation } from '../../Services/ecApi';
import { useGetImageQuery } from '../../Services/ecApi';
import { useDispatch } from 'react-redux';
import { ClearUser } from '../../Redux/Slice/AuthSlice';




const UProfile = ({ navigation }) => {


  const [putImage, result] = usePutImageMutation();

  const { data, error, isError, refetch } = useGetImageQuery();

  const dispatch = useDispatch();



  const DefaultImage = "https://cdn.pixabay.com/photo/2013/07/13/11/35/question-158453_1280.png";

  //////////////////////////////////////////////////////////////////
  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
    });



    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });

      refetch();

    }
  };
  //////////////////////////////////////////////////////////////

  const openCamera = async () => {
    const permResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permResult.granted === false) {
      alert("Camera access denied");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync(
        {
          base64: true,
        }
      );


      if (!result.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        refetch();
      }
    }
  };
  const onHandlerLogOut = async () => {
    try {
      dispatch(ClearUser());
      await AsyncStorage.removeItem("userEmail");



    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View>
      <Header
        title={"User"}
      />
      <View style={UProfileStyles.Container} >
        <Image style={UProfileStyles.Image}

          source={{
            uri: data ? data.image : DefaultImage,
          }}
        />
        <View style={UProfileStyles.iconsContainer}>
          <Pressable style={UProfileStyles.icons} onPress={() => openCamera()}>
            <Feather name="camera" size={36} color="black" />
          </Pressable>

          <Pressable style={UProfileStyles.icons} onPress={() => pickImage()}>
            <AntDesign name="picture" size={36} color="black" />
          </Pressable>
        </View>
        <View style={UProfileStyles.infoContainer}>
          <Text style={UProfileStyles.infoText}>1</Text>
          <Text style={UProfileStyles.infoText}>2</Text>
          <Text style={UProfileStyles.infoText}>3</Text>
          <Text style={UProfileStyles.infoText}>4</Text>
          {/* info del usuario */}

        </View>
        <View>
          <Pressable

            onPress={onHandlerLogOut}>
            <Text style={UProfileStyles.LogOut}>Log Out</Text>
          </Pressable>


        </View>

        <View>




        </View>



      </View>
    </View>
  )
}

export default UProfile