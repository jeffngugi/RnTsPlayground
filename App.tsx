import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadMore from './apps/LoadMore/App'
import LoadMoreTabs from './apps/LoadMoreTabs/App'
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

interface BtnProps{
  label:string,
  onPress:Function
}

const LinkItem = (props:BtnProps)=>{
  return(
    <TouchableOpacity
      style={styles.projectBtn}
      onPress={()=>props.onPress()}
    >
      <Text style={styles.btnTxt}>
        {props.label}
      </Text>
    </TouchableOpacity>
  )
}


const  HomeScreen = ({navigation}:{navigation:any})=> {
    return (
      <SafeAreaView
        style={{
          flex:1,
          paddingVertical:10,
          paddingHorizontal:10
        }}
      >
      <Text style={{marginVertical:10, fontSize:20}}>Welcome, click Any apps below</Text>
      <ScrollView
        style={{}}
        
      >
        <LinkItem 
          label='Load More'
          onPress={()=>navigation.navigate('LoadMore')}
        />  
        <LinkItem 
          label='Load More with Tabs'
          onPress={()=>navigation.navigate('LoadMoreTabs')}
        />                   
      </ScrollView>
      </SafeAreaView>
    );
  }

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerShown:false
            }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='LoadMore' component={LoadMore} />
        <Stack.Screen name='LoadMoreTabs' component={LoadMoreTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  projectBtn:{
    flexDirection:'row',
    marginVertical:6
  },
  btnTxt:{
    fontSize:18,
    color:'blue'
  }
})