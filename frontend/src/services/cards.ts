import { StudyGroup } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  tagTypes: ['Classrooms'], // Define the types of tags used in this API
  endpoints: (builder) => ({
    getClassrooms: builder.query<StudyGroup[], string>({
      query: (supabase_user_id) => `study-classes/${supabase_user_id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Classrooms' as const, id: id.toString() })),
              { type: 'Classrooms', id: 'LIST' },
            ]
          : [{ type: 'Classrooms', id: 'LIST' }],
    }),
    createClassroom: builder.mutation<StudyGroup, StudyGroup>({
      query: (newClassroomData) => ({
        url: 'study-classes',
        method: 'POST',
        body: newClassroomData,
      }),
      invalidatesTags: [{ type: 'Classrooms', id: 'LIST' }],
    }),
    updateCards: builder.mutation<void, { name: string; patch: any }>({
      query: ({ name, patch }) => ({
        url: `study-classes/${name}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: [{ type: 'Classrooms', id: 'LIST' }],
    }),
  }),
});



export const { useGetClassroomsQuery, useUpdateCardsMutation, useCreateClassroomMutation} = cardsApi

