import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getbooks: builder.query({
      query: () => '/books',
    }),
  
        // Define your search endpoint
        search: builder.query({
          query: (query) => `/books/?searchTerm=${encodeURIComponent(query)}`, // Replace with your search endpoint URL
        }),
    
  }),
});

export const { useGetbooksQuery ,useSearchQuery} = api;