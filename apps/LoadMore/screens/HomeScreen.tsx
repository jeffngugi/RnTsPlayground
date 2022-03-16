import React from 'react';
import { Box, Text, Divider, Spinner, FlatList } from 'native-base';
import { gamesApi } from '../api';
import {  useInfiniteQuery } from 'react-query';


export const HomeScreen = () => {
// const {data, isLoading} = useQuery('games', gamesApi.fetchAllGames)
const {isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
            'games',
            gamesApi.fetchAllGames,
            {
            getNextPageParam: lastPage => {
                if (lastPage.next !== null) {
                    return lastPage.next;
                }
            
                return lastPage;
                }
            }
            )

const gameItemExtractorKey = (item:any, index:any) => {
    return index.toString();
  };

  const renderSpinner = () => {
    return <Spinner color="emerald.500" size="lg" />;
  };

  const renderData = (item: { item: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => {
    return (
      <Text fontSize="20" py="2">
        {item.item.name}
      </Text>
    );
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return isLoading ? (
    <Box
      flex={1}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color="emerald.500" size="lg" />
    </Box>
  ) : (
    <Box flex={1} safeAreaTop backgroundColor="white">
      <Box height={16} justifyContent={'center'} px={2}>
        <Text fontSize={28} fontWeight={'600'} color={'emerald.500'}>
          Explore Games
        </Text>
      </Box>
      <Divider />
      <Box px={2}>
        <FlatList
          data={data?.pages.map(page => page.results).flat()}
          keyExtractor={gameItemExtractorKey}
          renderItem={renderData}
          onEndReached={loadMore}
          onEndReachedThreshold={0.01}
          ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
        />
      </Box>
    </Box>
  );
};
