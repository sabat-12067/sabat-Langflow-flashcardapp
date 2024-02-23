
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StudyGroup } from '@/types'; // Assuming '@/types' is the correct path

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  endpoints: (builder) => ({
    // Define the getClassrooms query
    getClassrooms: builder.query<StudyGroup[], string>({
      query: (supabase_user_id) => `study-classes/${supabase_user_id}`,
    }),
    // Define the createClassroom mutation
    createClassroom: builder.mutation<StudyGroup, StudyGroup>({
      query: (newClassroomData) => ({
        url: 'study-classes',
        method: 'POST',
        body: newClassroomData,
      }),
    }),
    // Define the updateCards mutation
    // Define the deleteCards mutation
  }),
});

export const { useGetClassroomsQuery, useCreateClassroomMutation } = cardsApi;
