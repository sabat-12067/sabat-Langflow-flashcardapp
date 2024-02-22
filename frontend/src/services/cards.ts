import { StudyGroup } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const cardsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  keepUnusedDataFor: 3,
  endpoints: (builder) => ({
    getClassrooms: builder.query<StudyGroup[], string[]>({
      query: (supabase_user_id: any) => `study-classes/${supabase_user_id}`

    }),
    createClassroom: builder.mutation<StudyGroup[], string[]>({
      query: (newClassroomData) => ({
        url: `study-classes`,
        method: 'POST',
        body: newClassroomData,
      }),

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


export const { useGetClassroomsQuery, useUpdateCardsMutation, useCreateClassroomMutation} = cardsApi

