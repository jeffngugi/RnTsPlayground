import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstCategory from './FirstCategory'
import SecondCategory from './SecondCategory'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { gamesApi } from '../../apis/api';
import { useInfiniteQuery } from 'react-query';


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const {isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        'gamescart',
        gamesApi.fetchsAllGames,
        {
        getNextPageParam: (lastPage:any) => {
            if (lastPage.next !== null) {
                return lastPage.next;
            }
            return lastPage;
            }
        }
        )

  return (
    <SafeAreaView
    style={{flex:1}}
   >
     <Tab.Navigator>
     <Tab.Screen name="Home" component={FirstCategory} />
     <Tab.Screen name="Settings" component={SecondCategory} />
   </Tab.Navigator>
   </SafeAreaView>
  )
}

export default TopTabs

const styles = StyleSheet.create({})