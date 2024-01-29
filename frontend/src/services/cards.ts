import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  endpoints: (builder) => ({
    getClassrooms: builder.query({
      query: (supabase_user_id: any) => `study-classes/${supabase_user_id}`,
    }),
    updateCards: builder.mutation({
      query: ({ name, patch }) => ({
        url: `study-classes/${name}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
})



export const { useGetClassroomsQuery, useUpdateCardsMutation } = cardsApi

