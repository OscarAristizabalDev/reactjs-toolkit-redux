import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Todo =
    | { userId: number, id: number, title: string, completed: boolean }

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query<Todo, string>({
            query: () => `/todos`,
        }),
    }),
})


// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery } = todosApi;