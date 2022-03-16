import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';

import { HomeScreen } from './screens/HomeScreen';


const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <HomeScreen />
        </QueryClientProvider>
      </NativeBaseProvider>
    </>
  );
}