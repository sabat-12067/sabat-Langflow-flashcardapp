
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormFields, StudyGroup, StudySet } from '@/types'; // Assuming '@/types' is the correct path

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  tagTypes: ['classes', 'studySets'],
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
        method: 'DELETE',
      }),
      invalidatesTags: ['classes']
    }),
    getStudySet: builder.query<StudySet[], string>({
      query: (id) => `study-classes/${id}/flashcard-sets/`,
      providesTags: ["studySets"]
    }),
    createStudySet: builder.mutation<StudySet, StudySet>({
      query: (set) => ({
        url: `study-classes/${set.user_id_or_study_class_id}/flashcard-sets/`,
        method: 'POST',
        body: set
      }),
      invalidatesTags: ['studySets']
    })
  }),
});

export const { useGetClassroomsQuery, useCreateClassroomMutation, useDeleteClassroomMutation, useGetStudySetQuery, useCreateStudySetMutation } = cardsApi;
