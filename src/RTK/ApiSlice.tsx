import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = 'https://retoolapi.dev/xFgEwq/data';

const ApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userData) => ({
                url: apiBaseUrl,
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useSignupMutation } = ApiSlice;

export default ApiSlice;