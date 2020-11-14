import React from 'react'
import { Button, View, Text, Image} from 'react-native';

export default function DeatilsScreen({route, navigation}){
  const {poster, title, type, year} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
    style={{width: 400, height: 400}}
      source={{
        uri: poster,
      }}
    />
      <Text style={{fontSize: 24, color: "red"}}>{title}</Text>
      <Text>Type: {type}</Text>
      <Text>Year: {year}</Text>
      <Button
        title="Go to Home Again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}