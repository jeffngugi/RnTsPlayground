import React from 'react'
import { QueryClient, QueryClientProvider, useInfiniteQuery} from 'react-query';
import TopTabs from './screens/TopTabs';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <TopTabs />
     </QueryClientProvider>
  )
}

export default App
