import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    register: builder.mutation({
      query: (name, email, password) => ({
        url: '/users/signup',
        method: 'POST',
        body: name,
        email,
        password,
      }),
      invalidatesTags: ['Auth'],
    }),
    signUp: builder.mutation({
      query: (email, password) => ({
        url: '/users/login',
        method: 'POST',
        body: email,
        password,
      }),
      invalidatesTags: ['Auth'],
    }),
    //     addContact: builder.mutation({
    //       query: (name, number) => ({
    //         url: '/contacts',
    //         method: 'POST',
    //         body: name,
    //         number,
    //       }),
    //       invalidatesTags: ['Phonebook'],
    //     }),
    //     deleteContact: builder.mutation({
    //       query: id => ({
    //         url: `/contacts/${id}`,
    //         method: 'DELETE',
    //         body: id,
    //       }),
    //       invalidatesTags: ['Phonebook'],
    //     }),
    //   }),
  }),
});

export const {
  // useGetContactsQuery,
  useRegisterMutation,
  useSignUpMutation,
  // useDeleteContactMutation,
} = authApi;
