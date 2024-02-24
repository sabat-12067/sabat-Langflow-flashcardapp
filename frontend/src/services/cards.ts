
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormFields, StudyGroup } from '@/types'; // Assuming '@/types' is the correct path

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  tagTypes: ['classes'],
  endpoints: (builder) => ({
    getClassrooms: builder.query<StudyGroup[], string>({
      query: (supabase_user_id) => `study-classes/${supabase_user_id}`,
      providesTags: ["classes"]
    }),
    createClassroom: builder.mutation<FormFields, FormFields>({
      query: (classroom) => ({
        url: 'study-classes/',
        method: 'POST',
        body: classroom,
      }),
      invalidatesTags: ['classes']
    }),
    deleteClassroom: builder.mutation({
      query: (id) => ({
        url: `study-classes/${id}/`,
        method: 'POST',
      }),
      invalidatesTags: ['classes']
    }),
  }),
});

export const { useGetClassroomsQuery, useCreateClassroomMutation, useDeleteClassroomMutation } = cardsApi;
