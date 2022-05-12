import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstCategory from './FirstCategory'
import SecondCategory from './SecondCategory'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { gamesApi } from '../../apis/api';
import { useInfiniteQuery } from 'react-query';
import ThirdCategory from './ThirdCategory';


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const {isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        'gamesByYear',
        gamesApi.fetchAllGames,
        {
        getNextPageParam: (lastPage:any) => {
            if (lastPage.next !== null) {
                return lastPage.next;
            }
            return lastPage;
            }
        }
        )

        console.log('The data is', data)
  
  return (
    <SafeAreaView
    style={{flex:1}}
   >
     <Tab.Navigator>
     <Tab.Screen 
          name="Indie" 
          component={FirstCategory} 
      />
     <Tab.Screen 
          name="Action" 
          component={SecondCategory} 
      />
     <Tab.Screen 
          name="com" 
          component={ThirdCategory} 
      />
    
   </Tab.Navigator>
   </SafeAreaView>
  )
}

export default TopTabs

const styles = StyleSheet.create({})


