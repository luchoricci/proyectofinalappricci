import { Image, View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import UProfileStyles from './UProfileStyle'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { usePutImageMutation } from '../../Services/ecApi';
import { useGetImageQuery } from '../../Services/ecApi';





const UProfile = () => {
  // const [image, setImage] = useState(null);

  const [putImage, result] = usePutImageMutation();

  const {data, error, isError, refetch} = useGetImageQuery();


  
const DefaultImage = "https://cdn.pixabay.com/photo/2013/07/13/11/35/question-158453_1280.png";


const pickImage = async () => {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [3, 3],
    quality: 1,
    base64: true,
  });

  // console.log(result);

  if (!result.canceled) {
  await putImage ({
    image: `data:image/jpeg;base64,${result.assets[0].base64}`,
  });

refetch();

  }
};
////////////////////////////////////////////

const openCamera = async () => {
  const permResult = await ImagePicker.requestCameraPermissionsAsync();

  if(permResult.granted === false) {
    alert("Camera access denied");
    return;
  } else {
    const result = await ImagePicker.launchCameraAsync(
      {base64: true,
      }
    );

 
    if (!result.canceled) {
      await putImage ({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });
      refetch();
    }
  }
};


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
      
          <Pressable onPress={() => openCamera()}>
            <Feather name="camera" size={24} color="black" />
          </Pressable>

          <Pressable onPress={() => pickImage() }>
            <AntDesign name="picture" size={24} color="black" />
          </Pressable>
       
        <View>
          {/* info del usuario */}

        </View>
        <View>


        </View>

        <View>
          



        </View>



      </View>
    </View>
  )
}

export default UProfile